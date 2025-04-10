 // src/pages/Dashboard/Admin/ManageCourses.jsx

const courses = [
    {
      id: 1,
      title: "Complete React Course",
      instructor: "Ankit Sharma",
      enrolled: 120,
      status: "Published",
    },
    {
      id: 2,
      title: "Node.js for Beginners",
      instructor: "Priya Verma",
      enrolled: 80,
      status: "Pending",
    },
    {
      id: 3,
      title: "MongoDB Mastery",
      instructor: "Rahul Singh",
      enrolled: 45,
      status: "Draft",
    },
  ];
  
  const ManageCourses = () => {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Courses 📚</h1>
  
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Title</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Instructor</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Enrolled</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Status</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr
                  key={course.id}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="py-3 px-4 text-gray-800 dark:text-white">{course.title}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{course.instructor}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{course.enrolled}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{course.status}</td>
                  <td className="py-3 px-4 space-x-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm hover:bg-green-600">
                      View
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600">
                      Delete
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
  
  export default ManageCourses;
  