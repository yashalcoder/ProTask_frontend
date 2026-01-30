// app/dashboard/page.jsx
"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardContent from "../../components/Dashboard";

export default function DashboardPage() {
  return (
    //agr role based <ProtectedRoute role="admin"></ProtectedRoute>

    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}

//to secure button
// import { useSelector } from "react-redux";

// const AdminPanel = () => {
//   const { user } = useSelector((state) => state.auth);

//   return (
//     <>
//       {user?.role === "admin" && (
//         <button>Delete Project</button>
//       )}
//     </>
//   );
// };

// export default AdminPanel;
