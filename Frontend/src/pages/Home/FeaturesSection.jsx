// src/pages/Home/FeaturesSection.jsx

import { ShieldCheck, GraduationCap, Laptop2, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={32} className="text-primary" />,
    title: "Secure & Trusted",
    description: "Your data is encrypted and safe with us.",
  },
  {
    icon: <GraduationCap size={32} className="text-primary" />,
    title: "Expert Instructors",
    description: "Learn from industry professionals.",
  },
  {
    icon: <Laptop2 size={32} className="text-primary" />,
    title: "Flexible Learning",
    description: "Access courses anytime, anywhere.",
  },
  {
    icon: <BadgeCheck size={32} className="text-primary" />,
    title: "Certification",
    description: "Get certified after course completion.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
          Why Choose CourseCamp?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
