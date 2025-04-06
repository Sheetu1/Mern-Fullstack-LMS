import React from "react";
import { FaUserPlus, FaBookOpen, FaGraduationCap } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus size={30} />,
    title: "Sign Up",
    description: "Create your free account and explore available courses.",
  },
  {
    icon: <FaBookOpen size={30} />,
    title: "Enroll in Courses",
    description: "Choose your desired course and start learning instantly.",
  },
  {
    icon: <FaGraduationCap size={30} />,
    title: "Get Certified",
    description: "Complete assessments and earn recognized certifications.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
          How CourseCamp Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="p-6 rounded-xl shadow-lg bg-gray-100 dark:bg-gray-800">
              <div className="mb-4 text-blue-600 dark:text-yellow-400 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
