"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import AuthCard from "@/src/core-ui/components/AuthCard";
import Input from "@/src/core-ui/inputs/Input";
import Button from "@/src/core-ui/buttons/Button";

type ForgotPasswordForm = {
  email: string;
};

export default function ForgotPassword() {
  const { register, handleSubmit, reset } = useForm<ForgotPasswordForm>();

  const onSubmit = (data: ForgotPasswordForm) => {
    console.log("Reset link sent to:", data.email);

    // TODO: API call here
    reset();
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4 py-10 overflow-hidden
      bg-linear-to-br from-[#1e1b4b] via-[#6d28d9] to-[#db2777]">
      {/* Glow Effects */}
      <div className="pointer-events-none absolute w-52 h-52 sm:w-72 sm:h-72 bg-pink-500 rounded-full blur-3xl opacity-30 top-0 left-0"></div>
      <div className="pointer-events-none absolute w-52 h-52 sm:w-72 sm:h-72 bg-purple-500 rounded-full blur-3xl opacity-30 bottom-0 right-0"></div>

      <div className="w-full flex justify-center">
        <AuthCard className="w-full max-w-md mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-gray-800">
            Forgot Password?
          </h1>

          <p className="text-sm text-center mb-6 ">
            Enter your email and we’ll send you a reset link
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <Input label="Email Address" name="email" register={register} />

            <Button title="Send Reset Link" type="submit" />
          </form>

          <p className="text-sm text-center mt-6">
            Remember your password?{" "}
            <Link
              href="/auth/login"
              className="text-pink-600 font-semibold hover:underline">
              Back to Login
            </Link>
          </p>
        </AuthCard>
      </div>
    </div>
  );
}
