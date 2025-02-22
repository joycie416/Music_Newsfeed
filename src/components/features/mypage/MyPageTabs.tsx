"use client";

import { useEffect, useState } from "react";
import MyComment from "./MyComment";
import MyPost from "./MyPost";
import MyLike from "./MyLike";
import { User } from "@supabase/supabase-js";
import useSpotifyStore from "@/store/spotifyStore";
import { fetchToken } from "@/utils/spotify-client";

type Props = {
  user: User;
};

const MyPageTabs = ({ user }: Props) => {
  const [activeTab, setActiveTab] = useState(1);
  const { setToken } = useSpotifyStore();

  useEffect(() => {
    const getToken = async () => {
      const token = await fetchToken();
      setToken(token);
    };
    getToken();
  }, [setToken]);

  const tabs = [
    { id: 1, label: "게시글", component: <MyPost user={user} /> },
    { id: 2, label: "댓글", component: <MyComment /> },
    { id: 3, label: "좋아요", component: <MyLike /> }
  ];

  return (
    <div className="max-w-full mx-auto">
      <ul className="flex justify-around border-b border-gray-300 mt-4 mb-6">
        {tabs.map((tab) => (
          <ul
            key={tab.id}
            className={`w-full text-center py-2 cursor-pointer ${
              activeTab === tab.id
                ? "border-b-2 border-sky-400 text-sky-400 font-semibold"
                : "text-gray-400 active:text-gray-300"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </ul>
        ))}
      </ul>
      <div>{tabs.find((tab) => tab.id === activeTab)?.component}</div>
    </div>
  );
};

export default MyPageTabs;
