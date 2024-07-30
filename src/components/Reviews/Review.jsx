import React, { useState} from "react";
import BlogForm from "./ReviewForm";
import ReviewForm from "./ReviewForm";

const Review = ({userId}) => {

  return (
    <div className="container mx-auto p-6">
      <ReviewForm userId={userId}/>
    </div>
  );
};

export default Review;
