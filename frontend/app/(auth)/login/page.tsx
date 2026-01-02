"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { login } from "@/app/services/auth.service";
import { saveToken } from "@/app/lib/auth";
import { ToastContainer, Zoom, toast } from "react-toastify";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submit = async () => {
    try {
      const res = await login({ email, password });
      saveToken(res.data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      toast.error(`Email yoki password xato!`);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        theme="light"
        transition={Zoom}
      />
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-50 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r bg-slate-800 px-8 py-10 text-center">
              <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                <img className="rounded-full" src="https://i.pinimg.com/1200x/f0/c3/fd/f0c3fd7456121509dff26f996df6826d.jpg" alt="img" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome Back
              </h1>
              <p className="text-slate-100">
                Sign in to continue to your account
              </p>
            </div>
            <div className="px-8 py-10 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 block">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 block">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-slate-800 focus:ring-2 focus:ring-slate-800"
                  />
                  <span className="ml-2 text-gray-600 group-hover:text-gray-900">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-slate-800 hover:text-slate-900 font-semibold"
                >
                  Forgot password?
                </a>
              </div>

              <button
                onClick={submit}
                disabled={isLoading}
                className="w-full bg-gradient-to-r bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg shadow-slate-800/30 hover:shadow-slate-800/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </div>

            <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 text-center">
              <a
                href="/register"
                className="text-slate-800 hover:text-slate-900 font-semibold"
              >
                Sign Up
              </a>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            By signing in, you agree to our{" "}
            <a href="#" className="text-slate-800 hover:underline underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-slate-800 hover:underline underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
