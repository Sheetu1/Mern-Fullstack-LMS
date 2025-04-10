import { Outlet } from "react-router-dom"
import AdminSidebar from "./AdminSidebar"

const AdminDashboardLayout = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminDashboardLayout

  