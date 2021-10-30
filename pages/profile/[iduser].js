import React from "react";
import Header from "../../components/Header";
import Bio from "../../components/Bio";
import SavedStories from "../../components/SavedStories";
import UserPosts from "../../components/UserPosts";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function userProfile() {
    const { data: session } = useSession()

    const router = useRouter()
    return (
      <>
        <Header />
       
          {/* bio  */}
          {session ? (
             <div className="grid grid-cols-1 md:grid-cols-3 md:max-w-4xl xl:grid-cols-3 xl:max-w-6xl mx-auto  mt-10">
              <Bio />
  
                    <SavedStories />
  
                    <UserPosts />
                    </div>
          ) :(
              <div>
                   <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-36 px-14 text-center">
          <img src="https://links.papareact.com/ocw" alt="" className="w-80" />
  
          <p className="font-thin text-5xl italic mt-6">
            Please Login
          </p>
  
          <div className="mt-20">
            {/* next auth code */}
      
                <button
                  className="p-3 bg-blue-500 rounded-lg text-white"
                  onClick={()=> router.push('/auth/signin')}
                >
                  Sign in here
                </button>
           
          </div>
        </div>
              </div>
          )}
        
  
       
        
      </>
    );
}

export default userProfile
