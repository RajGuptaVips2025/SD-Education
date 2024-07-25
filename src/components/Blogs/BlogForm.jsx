// src/BlogForm.js
import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const BlogForm = ({ userId }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const date = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        id: userId,
        title,
        content,
        createdAt: formattedDate,
      });
      console.log("Document written with ID: ", docRef.id);
      setTitle("");
      setContent(""); // Fetch posts after adding a new one
      navigate("/blog/user");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">
        Write a New Story
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
            // onClick={handleSubmit}
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

export default BlogForm;
