import { Outlet } from "react-router-dom";
import InstructorSidebar from "./Sidebar";

const InstructorDashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <InstructorSidebar />
      <main className="flex-1 bg-gray-50 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default InstructorDashboardLayout;
