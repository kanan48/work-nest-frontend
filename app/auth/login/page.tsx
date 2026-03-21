"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import AuthCard from "@/src/core-ui/components/AuthCard";
import Input from "@/src/core-ui/inputs/Input";
import Button from "@/src/core-ui/buttons/Button";

type LoginFormData = {
  email: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4 py-10 overflow-hidden
    bg-linear-to-br from-[#1e1b4b] via-[#6d28d9] to-[#db2777]">
      {/* Glow Effects (fixed for mobile) */}
      <div className="pointer-events-none absolute w-52 h-52 sm:w-72 sm:h-72 bg-pink-500 rounded-full blur-3xl opacity-30 top-0 left-0"></div>
      <div className="pointer-events-none absolute w-52 h-52 sm:w-72 sm:h-72 bg-purple-500 rounded-full blur-3xl opacity-30 bottom-0 right-0"></div>

      {/* Scroll-safe wrapper */}
      <div className="w-full flex justify-center">
        <AuthCard className="w-full max-w-md mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-gray-800">
            Welcome Back 👋
          </h1>

          <p className="text-sm text-center mb-6">
            Login to continue your journey
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-5">
            <Input label="Email Address" name="email" register={register} />
            <Input
              label="Password"
              name="password"
              type="password"
              register={register}
            />

            <div className="flex justify-end">
              <span className="text-xs text-pink-600 cursor-pointer hover:underline">
                Forgot Password?
              </span>
            </div>

            <Button title="Login" type="submit" />
          </form>

          <p className="text-sm text-center mt-6">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="text-pink-600 font-semibold hover:underline">
              Create Account
            </Link>
          </p>
        </AuthCard>
      </div>
    </div>
  );
}
