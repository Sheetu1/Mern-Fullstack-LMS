 // src/pages/Dashboard/Student/Dashboard.jsx

 const Dashboard = () => {
    return (
      <div className="text-gray-800 space-y-6">
        <h1 className="text-3xl font-bold">🎓 Welcome back, Student!</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className="bg-blue-100 p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold">Total Courses Enrolled</h2>
            <p className="text-4xl font-bold mt-2">3</p>
          </div>
  
          {/* Box 2 */}
          <div className="bg-green-100 p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold">Overall Progress</h2>
            <p className="text-4xl font-bold mt-2">60%</p>
          </div>
  
          {/* Box 3 */}
          <div className="bg-yellow-100 p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold">Active Course</h2>
            <p className="mt-2">React Mastery Bootcamp</p>
            <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
              Continue Learning
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  
  