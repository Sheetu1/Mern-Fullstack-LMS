// src/pages/Courses/CourseCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{course.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{course.description}</p>
        <p className="text-green-600 dark:text-green-400 font-bold mt-2">{course.price}</p>

        <Link to={`/courses/${course.id}`}>
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Enroll Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
