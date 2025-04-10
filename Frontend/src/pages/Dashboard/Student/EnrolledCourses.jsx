// src/pages/Dashboard/Student/EnrolledCourses.jsx

const EnrolledCourses = () => {
    const courses = [
      {
        id: 1,
        title: "React Mastery Bootcamp",
        progress: 70,
        enrolledDate: "March 15, 2025",
        image: "https://source.unsplash.com/400x300/?react,code"
      },
      {
        id: 2,
        title: "Node.js for Beginners",
        progress: 45,
        enrolledDate: "April 2, 2025",
        image: "https://source.unsplash.com/400x300/?nodejs,backend"
      },
      {
        id: 3,
        title: "MongoDB Crash Course",
        progress: 20,
        enrolledDate: "April 5, 2025",
        image: "https://source.unsplash.com/400x300/?database,mongodb"
      }
    ];
  
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">📚 Your Enrolled Courses</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
  
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
  
              <p className="text-gray-600 text-sm mb-2">
                Enrolled on: {course.enrolledDate}
              </p>
  
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
  
              <p className="text-sm text-gray-600 mb-2">
                Progress: {course.progress}%
              </p>
  
              <button className="w-full px-4 py-2 mt-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Continue Course
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default EnrolledCourses;
  
  
  