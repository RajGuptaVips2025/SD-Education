// src/BlogList.jsx
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import React, { useState, useEffect } from "react";

const BlogList = ({ userId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPost();
  }, []);

  // const fetchPost = async () => {
  //   await getDocs(collection(db, "posts")).then((querySnapshot) => {
  //     const newData = querySnapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //   }));
  //     setPosts(newData);
  //     console.log(posts, newData);
  //   });
  // };

  const fetchPost = async () => {
    try {
      const postsRef = collection(db, "posts");
      const q = query(postsRef, where("id", "==", userId)); // Adjust the field name if needed

      const querySnapshot = await getDocs(q);
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(newData);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };
  return (
    <>
      {posts.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-3xl font-bold text-gray-600">
            You have not published any blogs yet
          </h1>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto my-8 p-6">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Your Blogs</h2>
          <hr className="border-t border-gray-300 mb-6" />
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="border-b border-gray-300 pb-10 mb-8"
              >
                <div className="flex justify-between items-start">
                  <p className="text-md text-gray-500 mt-2">{post.createdAt}</p>
                  <div className="ml-4 flex-1 pl-10">
                    <h3 className="text-3xl font-bold text-gray-800 mb-1">
                      {post.title}
                    </h3>
                    <p className="text-gray-700">{post.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BlogList;
