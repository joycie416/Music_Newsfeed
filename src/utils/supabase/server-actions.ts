"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { SignInWithPasswordCredentials, SignUpWithPasswordCredentials } from "@supabase/supabase-js";
import { OriginalTrack } from "@/types/track";
import { formatTrackData } from "../formatTrackData";

export async function signin(formData: SignInWithPasswordCredentials) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  // const data = {
  //   email: formData.get('email') as string,
  //   password: formData.get('password') as string,
  // }

  const { error } = await supabase.auth.signInWithPassword(formData);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: SignUpWithPasswordCredentials) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  // const data = {
  //   email: formData.get('email') as string,
  //   password: formData.get('password') as string,
  // }

  const { error } = await supabase.auth.signUp(formData);

  if (error) {
    console.log("Sign Up Error :");
    console.error(error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signout() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect("/");
}

// 댓글 CRUD

// 댓글 추가
export async function addComment(content: string, postId: string) {
  const supabase = createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("로그인이 필요합니다.");
  }

  const { error } = await supabase.from("comments").insert([{ content, post_id: postId, user_id: user.id }]);

  if (error) {
    throw new Error("댓글 추가에 실패했습니다.");
  }

  revalidatePath(`/posts/${postId}`);
}

// 댓글 삭제
export async function deleteComment(commentId: string) {
  const supabase = createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    throw Error("로그인이 필요합니다.");
  }

  const { error } = await supabase.from("comments").delete().eq("comment_id", commentId).eq("user_id", user.id);

  if (error) {
    throw new Error("댓글 삭제에 실패했습니다.");
  }
}

// 댓글 조회
export async function fetchComment(postId: string) {
  const supabase = createClient();

  const { data, error } = await supabase.from("comments").select("*").eq("post_id", postId);

  if (error) {
    throw new Error("댓글을 불러오는데 실패했습니다.");
  }

  return data;
}

// 댓글 수정
export async function updateComment(commentId: string, content: string) {
  const supabase = createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("로그인 해주세요.");
  }
  const { error } = await supabase
    .from("comments")
    .update({ content })
    .eq("comment_id", commentId)
    .eq("user_id", user.id);

  if (error) {
    throw new Error("댓글 수정에 실패했습니다.");
  }
  revalidatePath("/");
}

// 게시글 추가
export async function createPost(youtubeUrl: string, content: string) {
  const supabase = createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("로그인이 필요합니다.");
  }

  const { error } = await supabase.from("posts").insert([{ user_id: user.id, youtube_url: youtubeUrl, content }]);

  if (error) {
    console.error(error);
    return;
  }
}

// 스포티파이 api 요청을 위한 토큰 받아오는 함수
export const getSpotifyToken = async () => {
  const params = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: process.env.SPOTIFY_CLIENT_SECRET as string,
    client_secret: process.env.SPOTIFY_CLIENT_ID as string
  });

  // fetch 부분
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params.toString()
  });

  // 토큰만 구조분해 할당으로 받아옴
  const { access_token: token } = await res.json();
  return token;
};

export const getSpotifyTrack = async (id: string, token: string) => {
  // 스포티파이에 해당 음악 정보 요청
  const res = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token
    }
  });
  const data: OriginalTrack = await res.json();

  // 포맷팅 함수로 필요한 데이터만 받아옴
  const music = formatTrackData(data);
  return music;
};
