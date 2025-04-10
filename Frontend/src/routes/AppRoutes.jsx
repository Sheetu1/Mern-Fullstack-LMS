import { Routes, Route, useLocation } from "react-router-dom";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";
import VerifyEmail from "../pages/Auth/VerifyEmail";
import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses";
import CourseDetails from "../pages/Courses/CourseDetails";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Navbar from "../pages/Home/Navbar";
import DashboardLayout from "../Components/dashboard/Student/DashboardLayout";

// Student Pages
import Dashboard from "../pages/Dashboard/Student/Dashboard";
import Profile from "../pages/Dashboard/Student/Profile";
import EnrolledCourses from "../pages/Dashboard/Student/EnrolledCourses";
import CourseProgress from "../pages/Dashboard/Student/CourseProgress";
import Settings from "../pages/Dashboard/Student/Settings";

// Instructor Pages
import InstructorDashboardLayout from "../Components/dashboard/Instructor/DashboardLayout";
import CreateCourse from "../pages/Dashboard/Instructor/CreateCourse";
import EditCourse from "../pages/Dashboard/Instructor/EditCourse";
import MyCourses from "../pages/Dashboard/Instructor/MyCourses";
import InstructorProfile from "../pages/Dashboard/Instructor/InstructorProfile";

// Admin pages

import AdminDashboardLayout from "../Components/dashboard/Admin/AdminDashboardLayout";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ManageCourses from "../pages/Dashboard/Admin/ManageCourses";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile";


const AppRoutes = () => {
  const location = useLocation();

  // ✅ Hide Navbar on Auth and Dashboard routes
  const hideNavbarRoutes = ["/login", "/signup", "/verify-email"];
  const isDashboardRoute = location.pathname.startsWith("/dashboard");
  const shouldShowNavbar =
    !hideNavbarRoutes.includes(location.pathname) && !isDashboardRoute;

  return (
    <>
      {shouldShowNavbar && <Navbar />}

      <div className={`${shouldShowNavbar ? "pt-20" : ""}`}>
        {/* spacing only when Navbar is shown */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Student Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="enrolled-courses" element={<EnrolledCourses />} />
            <Route path="progress" element={<CourseProgress />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Instructor routes */}
          <Route
            path="/dashboard/instructor"
            element={<InstructorDashboardLayout />}
          >
            <Route path="create-course" element={<CreateCourse />} />
            <Route path="edit-course" element={<EditCourse />} />
            <Route path="my-courses" element={<MyCourses />} />
            <Route path="profile" element={<InstructorProfile />} />
          </Route>

          {/* Admin Routes */}

          <Route path="/dashboard/admin" element={<AdminDashboardLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="manage-users" element={<ManageUsers />} />
            <Route path="manage-courses" element={<ManageCourses />} />
            <Route path="profile" element={<AdminProfile />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default AppRoutes;
