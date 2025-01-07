"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react"; // Import icons for eye toggle
import { useState } from "react";

// Define the validation schema using Zod
const registrationSchema = z.object({
  name: z.string().min(6, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

// Define the type for form data
type RegistrationFormData = z.infer<typeof registrationSchema>;

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: RegistrationFormData) => {
    console.log(data);
    // Handle registration logic here
    // After successful registration, redirect to verify email
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold">Register</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" {...register("name")} />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" {...register("email")} />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                className="pr-8"
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 transform"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-destructive">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
      </CardContent>
      <CardFooter className="grid justify-center gap-2 text-center">
        <Link href="/login" className="text-sm">
          Already have an account?{" "}
          <span className="text-primary hover:underline">Login</span>
        </Link>
        <p className="text-sm text-gray-500">
          Please verify your email after registration.
        </p>
      </CardFooter>
    </Card>
  );
}
