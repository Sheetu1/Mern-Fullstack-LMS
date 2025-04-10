const InstructorDashboard = () => {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome, Instructor 👨‍🏫
        </h1>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-5">
            <h2 className="text-lg font-semibold text-gray-600 mb-2">Total Courses</h2>
            <p className="text-2xl font-bold text-indigo-600">4</p>
          </div>
  
          <div className="bg-white rounded-2xl shadow-md p-5">
            <h2 className="text-lg font-semibold text-gray-600 mb-2">Total Enrollments</h2>
            <p className="text-2xl font-bold text-indigo-600">120</p>
          </div>
  
          <div className="bg-white rounded-2xl shadow-md p-5">
            <h2 className="text-lg font-semibold text-gray-600 mb-2">Pending Reviews</h2>
            <p className="text-2xl font-bold text-indigo-600">3</p>
          </div>
        </div>
  
        <div className="mt-10 bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
          <ul className="space-y-3 text-gray-600">
            <li>📅 Course "React Basics" was updated</li>
            <li>🧑‍🎓 New student enrolled in "Node.js Mastery"</li>
            <li>🔍 You received 2 new course reviews</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default InstructorDashboard;
  