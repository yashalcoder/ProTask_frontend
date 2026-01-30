"use client";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "@/lib/features/auth/authSlice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function protectedRoute({ children, role }) {
  const { user, loading } = useSelector((state) => state.auth); //state.auth jo hai wo store sa ara name
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (!user && !loading) {
      dispatch(getMe());
      return;
    }
    if (!loading) {
      if (!user) {
        router.push("/login");
      } else if (role && role != role) {
        router.push("/unauthorized");
      }
    }
  }, [user, loading, role, router, dispatch]);
  if (loading || !user) return <p>Loading.....</p>;
  if (role && user.role !== role) return null;
  return children;
}
