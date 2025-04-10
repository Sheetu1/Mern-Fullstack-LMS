 // src/pages/Dashboard/Student/CourseProgress.jsx

 const CourseProgress = () => {
    const progressData = [
      {
        id: 1,
        title: "JavaScript Essentials",
        progress: 80,
        lastActivity: "April 6, 2025",
      },
      {
        id: 2,
        title: "Advanced CSS Techniques",
        progress: 55,
        lastActivity: "April 3, 2025",
      },
      {
        id: 3,
        title: "Fullstack Project with MERN",
        progress: 30,
        lastActivity: "April 1, 2025",
      },
    ];
  
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">📈 Course Progress</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {progressData.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow p-5 hover:shadow-md transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {course.title}
              </h2>
  
              <div className="w-full bg-gray-200 h-3 rounded-full mb-3">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
  
              <p className="text-gray-600 text-sm mb-1">
                Progress: <span className="font-medium">{course.progress}%</span>
              </p>
              <p className="text-gray-600 text-sm mb-2">
                Last Activity: {course.lastActivity}
              </p>
  
              <p
                className={`text-sm font-semibold mb-4 ${
                  course.progress >= 80
                    ? "text-green-600"
                    : course.progress >= 50
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {course.progress >= 80
                  ? "Almost there!"
                  : course.progress >= 50
                  ? "Keep going!"
                  : "Let's do it!"}
              </p>
  
              <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                Resume Course
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CourseProgress;
  
  