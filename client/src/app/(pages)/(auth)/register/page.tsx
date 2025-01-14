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
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useRegisterMutation } from "@/rtk-query/features/authApi";

//
const registrationSchema = z.object({
  name: z.string().min(6, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

//
type RegistrationFormData = z.infer<typeof registrationSchema>;

export default function RegisterPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation();
  const {
    register: formRegister,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      await register(data).unwrap();
      toast({
        title: "Registration successful!",
        description: "Please check your email to verify your account.",
        duration: 1800,
      });

      reset();
    } catch (error) {
      const err = error as { data?: { message?: string } };

      toast({
        title: "Registration failed",
        description:
          err.data?.message ||
          "There was a problem with your registration. Please try again.",
        duration: 1800,
        variant: "destructive",
      });
    }
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
            <Input type="text" id="name" {...formRegister("name")} />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" {...formRegister("email")} />
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
                {...formRegister("password")}
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
          <Button className="w-full" disabled={isLoading}>
            {isLoading ? "Registering..." : "Register"}
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
