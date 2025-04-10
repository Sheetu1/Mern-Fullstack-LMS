// src/pages/Dashboard/Student/Profile.jsx

import { useState } from "react";

const InstructorProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("John Doe");
  const [image, setImage] = useState("https://i.pravatar.cc/150?img=3"); // dummy profile
  const [tempImage, setTempImage] = useState(null);
  const [tempName, setTempName] = useState(name);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTempImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    if (tempImage) {
      setImage(tempImage);
    }
    setName(tempName);
    setEditMode(false);
  };

  const handleCancel = () => {
    setTempImage(null);
    setTempName(name);
    setEditMode(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white  dark:bg-gray-900 shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Instructor Profile
      </h2>

      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <div className="relative w-32 h-32">
          <img
            src={tempImage || image}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-yellow-400"
          />
          {editMode && (
            <label className="absolute bottom-0 right-0 bg-yellow-400 p-1 rounded-full cursor-pointer">
              📷
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          )}
        </div>

        {/* Name */}
        <div className="mt-6 w-full text-center">
          {editMode ? (
            <input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              className="text-lg font-semibold text-center w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50 dark:bg-gray-800 dark:text-white"
            />
          ) : (
            <p className="text-xl font-semibold text-gray-800 dark:text-white">
              {name}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          {editMode ? (
            <>
              <button
                onClick={handleSave}
                className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
