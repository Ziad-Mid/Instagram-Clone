import React, { useState, useEffect } from "react";
import {
  DotsHorizontalIcon,
  ViewGridIcon,
  BookmarkIcon,
  TagIcon,
} from "@heroicons/react/outline";
import { db } from "../firebase";
import {
  onSnapshot,
  collection,
  query,
  orderBy,
  where,
} from "@firebase/firestore";
import { useSession } from "next-auth/react";

function UserPosts() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "posts"),
        where("username", "==", session?.user.username)
      ),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );

    return unsubscribe;
  }, [db]);

  return (
    <div className="col-span-3  w-full my-7 ">
      {/* Header */}
      <div className="bg-white  border-t border-b rounded-sm">
        <div className="flex justify-between mx-20 md:mx-40 items-center p-5">
          <div className="flex items-center">
            <ViewGridIcon className="h-5 cursor-pointer  text-gray-400" />
            <div className="hidden md:block ml-2 font-normal text-gray-400">
              POSTS
            </div>
          </div>
          <div className="flex items-center">
            {" "}
            <BookmarkIcon className="h-5 cursor-pointer  text-gray-400" />
            <div className="hidden md:block ml-2 font-normal text-gray-400">
              SAVED
            </div>
          </div>
          <div className="flex items-center">
            {" "}
            <TagIcon className="h-5 cursor-pointer text-gray-400" />
            <div className="hidden md:block ml-2 font-normal text-gray-400">
              TAGGED
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* POSTS */}
      <main className="">
        <div className=" flex flex-wrap w-full justify-center ">
          {posts.length > 0 ? (
            <>
              {posts.map((post) => (
                <img
                  key={post.id}
                  id={post.id}
                  src={post.data().image}
                  alt=""
                  className="object-cover  w-3/12 xl:w-72 mx-1 my-1 md:mx-4 md:my-2 "
                />
              ))}
            </>
          ) : (
            <div className="my-10 font-thin italic text-4xl">Nothing Found</div>
          )}
        </div>
      </main>
      {/* POSTS End*/}
    </div>
  );
}

export default UserPosts;
