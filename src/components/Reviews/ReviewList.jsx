import {
  collection,
  getDocs,
  query,
  where,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ReviewList = ({ userId }) => {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchReviews();
  }, []);

  const deleteReview = async (reviewId) => {
    try {
      // Reference to the document to be deleted
      const reviewDocRef = doc(db, "reviews", reviewId);

      // Delete the document
      await deleteDoc(reviewDocRef);
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review.id !== reviewId)
      );

      console.log("Review deleted successfully!");
    } catch (error) {
      console.error("Error deleting review: ", error);
    }
  };
  const fetchReviews = async () => {
    try {
      const postsRef = collection(db, "reviews");
      const q = query(postsRef, where("id", "==", userId)); // Adjust the field name if needed

      const querySnapshot = await getDocs(q);
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setReviews(newData);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };
  const handleEdit = (reviewId) => {
    navigate(`/review?edit=${reviewId}`);
  };
  return (
    <>
      {reviews.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-3xl font-bold text-gray-600">
            You have not published any blogs yet
          </h1>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto my-8 p-6">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Your Reviews
          </h2>
          <hr className="border-t border-gray-300 mb-6" />
          <div className="space-y-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border-b border-gray-300 pb-10 mb-8"
              >
                <div className="flex justify-between items-start">
                  <p className="text-md text-gray-500 mt-2">
                    {review.createdAt}
                  </p>
                  <div className="ml-4 flex-1 pl-10">
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">
                      {review.title}
                    </h3>
                    <p className="text-gray-700">{review.content}</p>
                  </div>
                  <button className="mr-4" onClick={() => handleEdit(review.id)}>
                    <i className="fa-solid fa-edit text-xl cursor-pointer"></i>
                  </button>
                  <button onClick={() => deleteReview(review.id)}>
                    <i className="fa-solid fa-trash-can text-xl cursor-pointer"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewList;
