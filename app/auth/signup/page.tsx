"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import AuthCard from "@/src/core-ui/components/AuthCard";
import Input from "@/src/core-ui/inputs/Input";
import Button from "@/src/core-ui/buttons/Button";

type SignupFormData = {
  name: string;
  email: string;
  password: string;
};

export default function Signup() {
  const { register, handleSubmit } = useForm<SignupFormData>();

  const onSubmit = (data: SignupFormData) => {
    console.log(data);
  };

  return (
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

          <Button title="Create Account" type="submit" />
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
  );
}
