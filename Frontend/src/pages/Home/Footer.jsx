import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">CourseCamp LMS</h2>
          <p className="text-sm text-gray-400">
            Empowering learners worldwide with quality education.
          </p>
        </div>

        <div className="flex gap-6 mt-6 md:mt-0">
          <a href="#" className="hover:text-primary transition">About</a>
          <a href="#" className="hover:text-primary transition">Courses</a>
          <a href="#" className="hover:text-primary transition">Contact</a>
          <a href="#" className="hover:text-primary transition">Privacy</a>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        &copy; {new Date().getFullYear()} CourseCamp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
