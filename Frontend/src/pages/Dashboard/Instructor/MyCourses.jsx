const MyCourses = () => {
    // Dummy course list
    const courses = [
      {
        id: 1,
        title: "React Mastery",
        price: "799",
        students: 250,
        status: "Published",
      },
      {
        id: 2,
        title: "Node.js Bootcamp",
        price: "599",
        students: 180,
        status: "Draft",
      },
    ];
  
    return (
      <div className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">📚 My Courses</h2>
  
        <div className="space-y-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-xl p-5 flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                <p className="text-sm text-gray-600">₹{course.price} | {course.students} students</p>
                <p
                  className={`text-sm font-medium mt-1 ${
                    course.status === "Published" ? "text-green-600" : "text-yellow-600"
                  }`}
                >
                  {course.status}
                </p>
              </div>
              <div className="space-x-3">
                <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Edit
                </button>
                <button className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MyCourses;
  