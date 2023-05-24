import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_COMMENTS_LIST_API } from "../Utils/constants";

const CommentsList = () => {
  const [searchParams] = useSearchParams();
  const [allComments,setAllComments]=useState([]);

  const getAllComments = async () => {
    const data = await fetch(
      YOUTUBE_COMMENTS_LIST_API +
        searchParams.get("v") +
        "&key=" +
        process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const json = await data.json();

    setAllComments(json.items);
  };

  useEffect(() => {
    getAllComments();
  }, []);
  return (
    <div className="py-8 mx-8 w-[885px] h-[498px] ">
      {allComments.map((comments)=>(
        <Comment key={comments?.id} commentInfo={comments}/>
      ))}
      <h3>Comments</h3>
    </div>
  );
};

export default CommentsList;
