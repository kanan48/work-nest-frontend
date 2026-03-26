"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { AxiosError } from "axios";

import { signupUser } from "@/src/services/authServices";

import AuthCard from "@/src/core-ui/layout/AuthCard";
import Input from "@/src/core-ui/inputs/Input";
import Button from "@/src/core-ui/buttons/Button";

type SignupFormData = {
  name: string;
  email: string;
  password: string;
};

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignupFormData>();
  const router = useRouter();

  const onSubmit = async (data: SignupFormData) => {
    try {
      await signupUser(data);

      toast.success("Account created 🚀");
      router.push("/auth/login");
    } catch (err) {
      const error = err as AxiosError<{ message: string; type?: string }>;

      const type = error.response?.data?.type;

      if (type === "USER_EXISTS") {
        toast.error("User already exists");
      } else if (type === "VALIDATION_ERROR") {
        toast.error("Invalid credentials");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <div
        className="relative min-h-screen flex items-center justify-center px-4
    bg-linear-to-br from-[#0f172a] via-[#7c3aed] to-[#ec4899]">
        {/* Glow Effects */}
        <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>

        <AuthCard>
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
            Create Your Account 🚀
          </h1>

          <p className="text-sm text-center mb-6">
            Start your journey with WorkNest
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <Input label="Full Name" name="name" register={register} />
            <Input label="Email Address" name="email" register={register} />
            <Input
              label="Password"
              name="password"
              type="password"
              register={register}
            />

            <Button
              title="Create Account"
              type="submit"
              isLoading={isSubmitting}
            />
          </form>

          <p className="text-sm text-center mt-6">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-pink-600 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </AuthCard>
      </div>
    </>
  );
}
