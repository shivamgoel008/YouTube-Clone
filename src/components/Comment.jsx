import React from "react";

const Comment = () => {
  return (
    <div className="flex flex-row" >
        <img
          className="h-6 w-6 rounded-full m-2"
          alt="name"
          src="https://i.stack.imgur.com/HgkK0.png"
        />
      
      <div>
        <p className="text-sm mt-2">@Person Name</p>
        <p className="text-base ml-1">Person Comment</p>
      </div>
    </div>
  );
};

export default Comment;
