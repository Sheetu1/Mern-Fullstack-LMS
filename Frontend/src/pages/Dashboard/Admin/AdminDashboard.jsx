 // src/pages/Dashboard/Admin/AdminDashboard.jsx

const AdminDashboard = () => {
    const stats = [
      {
        label: "Total Users",
        value: 1243,
        icon: "👥",
      },
      {
        label: "Total Courses",
        value: 87,
        icon: "📘",
      },
      {
        label: "Active Instructors",
        value: 42,
        icon: "🧑‍🏫",
      },
      {
        label: "Pending Approvals",
        value: 5,
        icon: "⏳",
      },
    ];
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome Admin 👋</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center justify-center text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              <div className="text-2xl font-semibold text-gray-800 dark:text-white">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default AdminDashboard;
  