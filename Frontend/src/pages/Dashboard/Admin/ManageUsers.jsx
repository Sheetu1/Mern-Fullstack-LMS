 // src/pages/Dashboard/Admin/ManageUsers.jsx

const users = [
    {
      id: 1,
      name: "Ankit Sharma",
      email: "ankit@example.com",
      role: "Student",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Verma",
      email: "priya@example.com",
      role: "Instructor",
      status: "Pending",
    },
    {
      id: 3,
      name: "Rahul Singh",
      email: "rahul@example.com",
      role: "Admin",
      status: "Active",
    },
  ];
  
  const ManageUsers = () => {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Users 👥</h1>
  
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Name</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Email</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Role</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Status</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="py-3 px-4 text-gray-800 dark:text-white">{user.name}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{user.email}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{user.role}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{user.status}</td>
                  <td className="py-3 px-4">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default ManageUsers;
  