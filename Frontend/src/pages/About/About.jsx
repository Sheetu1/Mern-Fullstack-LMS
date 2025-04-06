// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About CourseCamp</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn. Build. Grow. CourseCamp empowers learners with real-world projects,
            expert mentorship, and the skills to succeed in the tech industry.
          </p>
        </div>

        {/* 2 Column Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">🚀 Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-7">
              Our mission is to make tech education accessible, practical, and career-focused.
              We believe in project-based learning with full-stack technologies like MERN, and
              we help you prepare for real interviews from Day 1.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">🎯 Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-7">
              To become India's most trusted platform for full-stack development learners,
              guiding them from beginner to job-ready level with personal mentorship,
              mock interviews, and resume building.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
              alt="About us"
              className="rounded-xl shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow text-sm font-medium">
              Trusted by 10,000+ learners 💼
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">✨ Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Quality", emoji: "✅", desc: "Top-notch content & code" },
              { title: "Support", emoji: "🤝", desc: "1:1 doubt-solving & community" },
              { title: "Practical", emoji: "💻", desc: "Real-world projects only" },
              { title: "Placement", emoji: "🎯", desc: "Interview prep + Resume" },
            ].map((value, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-2">{value.emoji}</div>
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Join thousands of students who trust CourseCamp for career growth.
          </p>
          <a
            href="/courses"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Explore Courses 🚀
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
