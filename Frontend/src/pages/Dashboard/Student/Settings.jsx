 // src/pages/Dashboard/Student/Settings.jsx

 const Settings = () => {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">⚙️ Account Settings</h1>
  
        {/* Profile Info */}
        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">👤 Profile Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                value="John Doe"
                readOnly
                className="w-full p-2 border rounded bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                value="johndoe@example.com"
                readOnly
                className="w-full p-2 border rounded bg-gray-100"
              />
            </div>
          </div>
        </div>
  
        {/* Change Password */}
        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">🔐 Change Password</h2>
          <div className="space-y-3">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
  
        {/* Notifications */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-700">🔔 Email Notifications</h2>
          <input type="checkbox" className="w-5 h-5" disabled />
        </div>
  
        {/* Save button */}
        <div className="text-right">
          <button
            disabled
            className="px-6 py-2 bg-gray-300 text-white rounded cursor-not-allowed"
          >
            Save Changes
          </button>
        </div>
      </div>
    );
  };
  
  export default Settings;
  
  