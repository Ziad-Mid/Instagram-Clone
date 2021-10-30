import React from "react";

function Story({ img, username, size }) {
  return (
    <div >
      <img
        src={img}
        alt=""
        className={`${size}  rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out`}
     
      />
      <p className="text-xs w-14 truncate text-center ">{username}</p>
    </div>
  );
}

export default Story;
