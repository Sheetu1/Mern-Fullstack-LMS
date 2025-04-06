// src/pages/Courses/CourseDetails.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PaymentModal from "../PaymentModal";

const dummyCourses = [
  {
    id: "1",
    title: "React for Beginners",
    image: "https://tse1.mm.bing.net/th?id=OIP.oWDa_RCrENCweLKEytdBnQHaED&pid=Api&rs=1&c=1&qlt=95&w=207&h=113",
    description: "Learn React from scratch.",
    instructor: "John Doe",
    price: "₹999",
  },
  {
    id: "2",
    title: "Node.js Mastery",
    image: "https://tse1.mm.bing.net/th?id=OIP.3Rxe6N827Wfdvh6zYnKJKgHaD4&pid=Api&rs=1&c=1&qlt=95&w=238&h=124",
    description: "Become a Node.js pro!",
    instructor: "Jane Smith",
    price: "₹799",
  },
  {
    id: "3",
    title: "Full Stack Bootcamp",
    image: "https://tse1.mm.bing.net/th?id=OIP.6NEqeSkxgEjYiHYUAkdZXwHaEK&pid=Api&rs=1&c=1&qlt=95&w=191&h=107",
    description: "Full-stack developer with MERN stack in 90 day",
    instructor: "Jane Smith",
    price: "₹1999",
  },
];

const CourseDetails = () => {
  const { courseId } = useParams();
  const [showPayment, setShowPayment] = useState(false);
  const course = dummyCourses.find((c) => c.id === courseId);

  if (!course) return <div className="text-center text-2xl p-10">⚠️ Course not found</div>;

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-4xl mx-auto">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover rounded-xl shadow-lg"
        />

        <h1 className="text-4xl font-bold mt-6">{course.title}</h1>
        <p className="text-lg mt-3">{course.description}</p>
        <p className="text-md mt-2">🎓 Instructor: {course.instructor}</p>
        <p className="text-2xl font-semibold mt-4 text-green-600 dark:text-green-400">
          Price: {course.price}
        </p>

        <button
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition duration-300 ease-in-out"
          onClick={() => setShowPayment(true)}
        >
          💳 Buy Now
        </button>

        <PaymentModal show={showPayment} onClose={() => setShowPayment(false)} course={course} />
      </div>
    </div>
  );
};

export default CourseDetails;
