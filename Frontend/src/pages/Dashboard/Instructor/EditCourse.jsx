import { useState, useEffect } from "react";

const EditCourses = () => {
  // Dummy initial values (later we’ll fetch this from backend)
  const [title, setTitle] = useState("Mastering React");
  const [description, setDescription] = useState(
    "A complete guide to learn React.js with real-world projects."
  );
  const [price, setPrice] = useState("799");
  const [thumbnail, setThumbnail] = useState(null);

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy submit – later will connect with backend
    console.log({ title, description, price, thumbnail });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">✏️ Edit Course</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Course Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Description</label>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Price (in ₹)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Update Thumbnail</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleThumbnailChange}
            className="w-full"
          />
          {thumbnail && (
            <img
              src={URL.createObjectURL(thumbnail)}
              alt="preview"
              className="h-32 mt-3 rounded-lg object-cover"
            />
          )}
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Update Course
        </button>
      </form>
    </div>
  );
};

export default EditCourses;
