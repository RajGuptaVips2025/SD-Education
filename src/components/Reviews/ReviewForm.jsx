// src/BlogForm.js
import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { collection, addDoc, serverTimestamp, doc, getDoc, updateDoc } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";

const ReviewForm = ({ userId }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [reviewId, setReviewId] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const editReviewId = searchParams.get("edit");

    if (editReviewId) {
      setReviewId(editReviewId);
      fetchReview(editReviewId);
    }
  }, [location]);

  const fetchReview = async (reviewId) => {
    try {
      const reviewDocRef = doc(db, "reviews", reviewId);
      const reviewDoc = await getDoc(reviewDocRef);
      if (reviewDoc.exists()) {
        const reviewData = reviewDoc.data();
        setTitle(reviewData.title);
        setContent(reviewData.content);
      }
    } catch (error) {
      console.error("Error fetching review: ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (user) {
      if (content.length > 500) {
        setError("Review content must be 150 characters or less.");
        return;
      }
      const userName =
        user.displayName || user.email.split("@")[0].toUpperCase() || user.name;

      try {
        if (reviewId) {
          const reviewDocRef = doc(db, "reviews", reviewId);
          await updateDoc(reviewDocRef, {
            name: userName,
            title,
            content,
            timestamp: serverTimestamp(),
            createdAt: new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date()),
          });
          navigate('/review/user')
          console.log("Review updated successfully!");
        } else {
          await addDoc(collection(db, "reviews"), {
            name: userName,
            id: userId,
            title,
            content,
            timestamp: serverTimestamp(),
            createdAt: new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date()),
          });
          console.log("Review added successfully!");
        }
        navigate("/review/user");
      } catch (error) {
        console.error("Error saving review: ", error);
      }
    } else {
      console.error("User not logged in!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-slate-200 rounded-lg shadow-lg mt-24  transition-shadow duration-300 hover:shadow-xl">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">
        Write a Review
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            required
          />
        </div>
        <div className="mb-6">
          <textarea
            placeholder="Write your story..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-200"
            onClick={() => {
              setTitle("");
              setContent("");
            }}
          >
            Discard
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
