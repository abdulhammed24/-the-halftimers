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

// reset password zod schema
const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters long"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

// Define the type for form data
type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data: ResetPasswordFormData) => {
    console.log(data);
    // Handle reset password logic here
    // You would typically send the new password to your backend for processing
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold">Reset Password</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <Label htmlFor="newPassword">New Password</Label>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                id="newPassword"
                className="pr-8"
                {...register("newPassword")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 transform"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.newPassword && (
              <p className="text-sm text-destructive">
                {errors.newPassword.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <Label htmlFor="confirmPassword">Confirm Password</Label>

            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="pr-8"
                {...register("confirmPassword")}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 transform"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-destructive">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Reset Password
          </Button>
        </form>
      </CardContent>
      <CardFooter className="grid justify-center gap-2 text-center text-sm">
        <Link href="/login" className="text-primary">
          Back to Login
        </Link>
      </CardFooter>
    </Card>
  );
}
