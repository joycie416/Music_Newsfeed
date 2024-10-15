"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { SignInWithPasswordCredentials, SignUpWithPasswordCredentials } from "@supabase/supabase-js";

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

  if (!user) throw new Error("로그인이 필요합니다.");

  const { error } = await supabase.from("comments").insert([{ content, post_id: postId, user_id: user.id }]);

  if (error) throw new Error("댓글 추가에 실패했습니다.");

  revalidatePath(`/posts/${postId}`);
}

// 댓글 삭제
export async function deleteComment(commentId: string) {
  const supabase = createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) throw Error("로그인이 필요합니다.");

  const { error } = await supabase.from("comments").delete().eq("comment_id", commentId).eq("user_id", user.id);

  if (error) throw new Error("댓글 삭제에 실패했습니다.");
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
    console.error("댓글 수정 오류:", error);
    throw new Error("댓글 수정에 실패했습니다.");
  }
  revalidatePath("/");
}

// MyComment

export async function fetchUserPostsByComment() {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) throw Error("로그인이 필요합니다.");

  const { data: userComments, error: commentsError } = await supabase
    .from("comments")
    .select("post_id")
    .eq("user_id", user.id);

  if (commentsError) throw Error("사용자가 작성한 댓글을 불러오는데 실패했습니다.");

  const postIds = userComments.map((comment) => comment.post_id);
  const { data: userPosts, error: postsError } = await supabase.from("posts").select("*").in("id", postIds);
  if (postsError) throw Error("댓글에 해당한 게시물을 불러오는데 실패했습니다.");

  return userPosts;
}
