import React from "react";
import Header from "../../components/Header";
import Bio from "../../components/Bio";
import SavedStories from "../../components/SavedStories";
import UserPosts from "../../components/UserPosts";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function index() {
  const { data: session } = useSession();

  const router = useRouter();
  return <div></div>;
}

export default index;
