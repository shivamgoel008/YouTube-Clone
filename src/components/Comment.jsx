import React from "react";
import { timeAgo } from "../Utils/UtilsFunctions";

const Comment = ({ commentInfo }) => {
  console.log(commentInfo);
  return (
    <div className="flex flex-row my-4">
      <img
        className="h-6 w-6 rounded-full m-2"
        alt="name"
        src={
          commentInfo?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
        }
      />

      <div>
        <div className="flex flex-row">
          <p className="text-sm mt-2 font-bold">
            @{commentInfo?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          </p>

          <p className="text-sm mt-2 ml-2">{timeAgo(commentInfo?.snippet?.topLevelComment?.snippet?.updatedAt)}</p>
        </div>
        <p className="text-base ml-1 font-medium">
          {commentInfo?.snippet?.topLevelComment?.snippet?.textOriginal}
        </p>
      </div>
    </div>
  );
};

export default Comment;
