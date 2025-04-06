// src/pages/Courses/Courses.jsx
import React from "react";
import CourseCard from "./CourseCard";

const dummyCourses = [
  {
    id: "1",
    title: "React for Beginners",
    description: "Learn React.js from scratch with hands-on projects.",
    image: "https://tse1.mm.bing.net/th?id=OIP.oWDa_RCrENCweLKEytdBnQHaED&pid=Api&rs=1&c=1&qlt=95&w=207&h=113",
    price: "₹1499",
  },
  {
    id: "2",
    title: "Node.js Mastery",
    description: "Build scalable backend APIs using Node.js and Express.",
    image: "https://tse1.mm.bing.net/th?id=OIP.3Rxe6N827Wfdvh6zYnKJKgHaD4&pid=Api&rs=1&c=1&qlt=95&w=238&h=124",
    price: "₹1299",
  },
  {
    id: "3",
    title: "Full Stack Bootcamp",
    description: "Become a full-stack developer with MERN stack in 90 days.",
    image: "https://tse1.mm.bing.net/th?id=OIP.6NEqeSkxgEjYiHYUAkdZXwHaEK&pid=Api&rs=1&c=1&qlt=95&w=191&h=107",
    price: "₹1999",
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Explore Our Courses</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {dummyCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
