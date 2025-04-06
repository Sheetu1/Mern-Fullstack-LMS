// src/pages/Home/CoursePreview.jsx

import React from "react";

const courses = [
  {
    title: "Full-Stack Web Development",
    instructor: "Anurag Singh",
    duration: "6 Months",
    image: "https://tse1.mm.bing.net/th?id=OIP.6NEqeSkxgEjYiHYUAkdZXwHaEK&pid=Api&rs=1&c=1&qlt=95&w=191&h=107",
  },
  {
    title: "Data Structures & Algorithms",
    instructor: "Love Babbar",
    duration: "3 Months",
    image: "https://tse1.mm.bing.net/th?id=OIP._8DbR9o6NOMiI9Zx8u4hTAHaEK&pid=Api&rs=1&c=1&qlt=95&w=191&h=107",
  },
  {
    title: "Frontend Development with React",
    instructor: "Harshbandana Sharma",
    duration: "4 Months",
    image: "https://tse1.mm.bing.net/th?id=OIP.MwSbPCFPXnZnVznutkV8OwHaEK&pid=Api&rs=1&c=1&qlt=95&w=200&h=112",
  },
];

const CoursePreview = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white">
        🔥 Popular Courses
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {course.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-300">
                By {course.instructor}
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Duration: {course.duration}
              </p>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursePreview;
