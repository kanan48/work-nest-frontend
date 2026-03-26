"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { AxiosError } from "axios";

import { loginUser } from "@/src/services/authServices";

import AuthCard from "@/src/core-ui/layout/AuthCard";
import Input from "@/src/core-ui/inputs/Input";
import Button from "@/src/core-ui/buttons/Button";

type LoginFormData = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormData>();
  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    try {
      await loginUser(data);

      toast.success("Login successful 🎉");
      router.push("/dashboard");
    } catch (err) {
      const error = err as AxiosError<{ message: string; type?: string }>;

      const type = error.response?.data?.type;

      if (type === "INVALID_CREDENTIALS") {
        toast.error("Invalid email or password");
      } else if (type === "VALIDATION_ERROR") {
        toast.error("Please fill all fields");
      } else {
        toast.error("Login failed");
      }
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign In Clicked");
    // later you can integrate next-auth or firebase here
  };

  return (
    <>
      <Toaster position="top-right" />
      <div
        className="relative min-h-screen flex items-center justify-center px-4 py-10 overflow-hidden
    bg-linear-to-br from-[#1e1b4b] via-[#6d28d9] to-[#db2777]">
        {/* Glow Effects */}
        <div className="pointer-events-none absolute w-52 h-52 sm:w-72 sm:h-72 bg-pink-500 rounded-full blur-3xl opacity-30 top-0 left-0"></div>
        <div className="pointer-events-none absolute w-52 h-52 sm:w-72 sm:h-72 bg-purple-500 rounded-full blur-3xl opacity-30 bottom-0 right-0"></div>

        <div className="w-full flex justify-center">
          <AuthCard className="w-full max-w-md mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-gray-800">
              Welcome! Back👋
            </h1>

            <p className="text-sm text-center mb-6">
              SignIn to continue your journey
            </p>

            {/* 🔹 Email Login */}
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
                <Link
                  href="/auth/forgot-password"
                  className="text-xs text-pink-600 cursor-pointer hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <Button title="Login" type="submit" isLoading={isSubmitting} />
            </form>

            {/* 🔹 Divider */}
            <div className="flex items-center gap-2 my-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-xs text-gray-500">
                or continue with email
              </span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* 🔹 Google Sign In */}
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2.5 mb-4
            bg-white hover:bg-gray-50 transition duration-200 shadow-sm">
              <Image
                src="/assets/google.svg"
                alt="google"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="text-sm font-medium text-gray-700">
                Continue with Google
              </span>
            </button>
            <p className="text-sm text-center mt-6">
              Don’t have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-pink-600 font-semibold hover:underline">
                Create Account
              </Link>
            </p>
          </AuthCard>
        </div>
      </div>
    </>
  );
}
