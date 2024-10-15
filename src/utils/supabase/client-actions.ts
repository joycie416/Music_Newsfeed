import { User } from "@supabase/supabase-js";
import { createClient } from "./client";

const PROFILES = "profiles";
const STORAGE = "profiles";
const DEFAULT = "default";
const supabase = createClient();

export const updateUser = async (user: User, nickname: string, profileImg: File | null) => {
  let profile_img = user.user_metadata.profile_img;
  if (profileImg) {
    // 새 이미지 O
    profile_img = user.id;
  }

  if (!!nickname) {
    // 닉네임이 변경된 경우
    await supabase.auth.updateUser({
      data: {
        ...user?.user_metadata,
        nickname,
        profile_img
      }
    });
  } else if (!nickname) {
    // 닉네임이 변경되지 않은 경우
    await supabase.auth.updateUser({
      data: {
        ...user?.user_metadata,
        profile_img
      }
    });
  }
};

export const updateProfile = async (user: User, nickname: string, profileImg: File | null) => {
  let profile_img = user.user_metadata.profile_img;
  if (profileImg) {
    // 새 이미지 O
    profile_img = user.id;
  }

  let updateData: { profile_img: string; nickname?: string } = { profile_img };
  if (nickname) {
    // 닉네임을 변경하는 경우
    updateData = { nickname, profile_img };
  }
  const { error } = await supabase.from(PROFILES).update(updateData).eq("user_id", user.id);
  console.log("update profile error :", error);
};

export const updateProfileImg = async (user: User, profileImg: File | null) => {
  const hasProfileImg = user.user_metadata.profile_img !== DEFAULT;
  let profile_img = user.user_metadata.profile_img;
  if (profileImg) {
    // 새 이미지 O
    profile_img = user.id;
  }

  if (hasProfileImg && profileImg) {
    // 프로필 이미지 O, 새 이미지 O
    const { data: updateImg, error: updateError } = await supabase.storage.from(STORAGE).update(user.id, profileImg);
    console.log("change Img :", updateImg, updateError);
  } else if (!hasProfileImg && profileImg) {
    // 프로필 이미지 X, 새 이미지 O
    const { data: uploadImg, error: uploadError } = await supabase.storage.from(STORAGE).upload(user.id, profileImg);
    console.log("upload Img :", uploadImg, uploadError);
  } else {
    console.log("no new profile img or profile img not changed");
  }
};

export const deleteProfileImg = async (user: User) => {
  if (user.user_metadata.profile_img !== DEFAULT) {
    const { data, error } = await supabase.storage.from(STORAGE).remove([user.id]);
    console.log("delete Img :", data, error);
    await supabase.auth.updateUser({
      data: {
        ...user?.user_metadata,
        profile_img: DEFAULT
      }
    });
  }
};
