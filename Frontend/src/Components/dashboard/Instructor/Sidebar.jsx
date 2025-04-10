import { NavLink } from "react-router-dom";
import { PlusCircle, Pencil, BookOpen, User } from "lucide-react";

const InstructorSidebar = () => {
  const links = [
    { to: "/dashboard/instructor/create-course", label: "Create Course", icon: <PlusCircle size={20} /> },
    { to: "/dashboard/instructor/edit-course", label: "Edit Course", icon: <Pencil size={20} /> },
    { to: "/dashboard/instructor/my-courses", label: "My Courses", icon: <BookOpen size={20} /> },
    { to: "/dashboard/instructor/profile", label: "Profile", icon: <User size={20} /> },
  ];

  return (
    <div className="w-64 min-h-screen bg-gray-100 dark:bg-gray-900 p-4 shadow-md">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-8">Instructor Panel</h2>
      <nav className="space-y-4">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium 
              ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
              }`
            }
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default InstructorSidebar;
