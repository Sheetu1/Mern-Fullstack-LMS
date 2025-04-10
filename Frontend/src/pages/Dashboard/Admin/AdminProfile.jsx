 // src/pages/Dashboard/Admin/AdminProfile.jsx

import { useState } from "react";
import { Camera } from "lucide-react";

const AdminProfile = () => {
  const [name, setName] = useState("Admin User");
  const [editing, setEditing] = useState(false);
  const [profileImage, setProfileImage] = useState("https://i.pravatar.cc/150?img=12");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const toggleEdit = () => {
    setEditing((prev) => !prev);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 ml-30">Admin Profile 🧑‍💼</h1>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center">
        <div className="relative w-32 h-32">
          <img
            src={profileImage}
            alt="Admin Avatar"
            className="w-full h-full object-cover rounded-full border-4 border-gray-200 dark:border-gray-700"
          />
          <label htmlFor="image-upload">
            <div className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700">
              <Camera className="text-white" size={18} />
            </div>
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        <div className="mt-6 text-center">
          {editing ? (
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="text-center text-lg font-semibold px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
            />
          ) : (
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h2>
          )}

          <p className="text-gray-500 dark:text-gray-400">Admin</p>

          <button
            onClick={toggleEdit}
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium"
          >
            {editing ? "Save" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
