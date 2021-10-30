import React from "react";
import { CogIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";

function Bio() {
  const { data: session } = useSession();

  return (
    <>
      <div className="col-span-1 mx-auto my-auto p-6">
        <img
          src={session?.user.image}
          className="   rounded-full w-52 p-[4px] bg-gray-100 border-red-500 border-2 "
          alt=""
        />
      </div>
      <div className=" col-span-3 ml-10 md:ml-0 md:col-span-2 mt-10 ">
        <div className="flex space-x-10">
          <div className="text-4xl font-light mb-4">
            {session?.user?.username}
          </div>
          <button className=" w-28 h-8 border border-gray-300 rounded-md">
            edit profile
          </button>
          <CogIcon className="w-8 h-8 text-gray-600 cursor-pointer" />
        </div>
        <div className="flex space-x-10 font-medium text-xl mb-10">
          <div>
            5 <span className="font-normal">publication</span>{" "}
          </div>
          <div>
            300 <span className="font-normal">abonné</span>
          </div>
          <div>
            300 <span className="font-normal">abonnement</span>
          </div>
        </div>
        <div className="font-bold w-full pr-40">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus a
          nisi itaque omnis, numquam, blanditiis dolorem soluta ex odio
          consequuntur consequatur. Odit labore consectetur suscipit expedita
          odio unde nam.
        </div>
      </div>
    </>
  );
}

export default Bio;
