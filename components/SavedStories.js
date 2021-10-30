import React, { useEffect, useState } from "react";
import faker from "faker";
import Story from "./Story";

function SavedStories() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(4)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="col-span-2  ml-10  md:ml-20  w-max my-10">
      <div className="flex space-x-2 md:space-x-12  bg-white mt-8  rounded-sm overflow-x-scroll scrollbar-hide">
        {suggestions.map((profile) => (
          <Story
            key={profile.id}
            img={profile.avatar}
            username={profile.username}
            size="w-20 h-20 "
          />
        ))}
      </div>
    </div>
  );
}

export default SavedStories;
