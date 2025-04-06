// src/pages/Home/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-900 dark:to-gray-800 py-20 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Learn Anything, <span className="text-purple-600 dark:text-purple-400">Anytime</span>, Anywhere
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300">
          Explore high-quality courses by top instructors & boost your career with CourseCamp.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg hover:bg-purple-700 transition-all duration-300">
            Explore Courses
          </button>
          <button className="border border-purple-600 text-purple-600 dark:text-purple-400 px-6 py-3 rounded-full text-lg hover:bg-purple-100 dark:hover:bg-gray-700 transition-all duration-300">
            Become an Instructor
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
