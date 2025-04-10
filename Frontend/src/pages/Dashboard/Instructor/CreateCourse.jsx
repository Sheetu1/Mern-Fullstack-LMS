import { useState } from "react";

const CreateCourses = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy submit – backend integration later
    console.log({ title, description, price, thumbnail });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">📚 Create New Course</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Course Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter course title"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Description</label>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Brief course description"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Price (in ₹)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Eg. 499"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Thumbnail Image</label>
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
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Create Course
        </button>
      </form>
    </div>
  );
};

export default CreateCourses;
