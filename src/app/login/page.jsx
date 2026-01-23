"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Link from "next/link";
import { loginUser } from "@/lib/features/auth/authSlice";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await dispatch(loginUser({ email, password })).unwrap();
      if (!response.success) {
        setError(data.message || "Login failed");
        return;
      }

      // Handle successful login
      localStorage.setItem("token", response.token);
      window.location.href = "/dashboard";
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">TodoApp</h1>
          <p className="text-white">Welcome back to your tasks</p>
        </div>

        {/* Login Card */}
        <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">Sign In</h2>

          {error && (
            <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-md mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="w-full"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                className="w-full"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-border" />
            <span className="px-3 text-sm text-muted-foreground">OR</span>
            <div className="flex-grow border-t border-border" />
          </div>

          {/* Footer */}
          <p className="text-center text-muted-foreground text-sm mb-4">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-primary hover:text-primary/80 font-semibold"
            >
              Sign up
            </Link>
          </p>

          <p className="text-center text-xs text-muted-foreground">
            By signing in, you agree to our Terms of Service
          </p>
        </div>

        {/* Footer Brand */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm">
            Stay organized. Stay productive.
          </p>
        </div>
      </div>
    </div>
  );
}
