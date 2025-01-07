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
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

// Define the type for form data
type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    // Handle login logic here
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold">Login</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                className="pr-8"
                id="password"
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
            Login
          </Button>
        </form>
      </CardContent>
      <CardFooter className="grid justify-center gap-2 text-center text-sm">
        <Link href="/forgot-password" className="text-primary">
          Forgot Password?
        </Link>
        <Link href="/register" className="text-sm">
          Don't have an account?{" "}
          <span className="text-primary hover:underline"> Register</span>
        </Link>
      </CardFooter>
    </Card>
  );
}
