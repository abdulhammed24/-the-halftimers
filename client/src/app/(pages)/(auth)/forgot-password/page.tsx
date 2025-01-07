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

// Define the validation schema using Zod
const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

// Define the type for form data
type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    console.log(data);
    // Handle forgot password logic here
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold">Forgot Password</h2>
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
          <Button type="submit" className="w-full">
            Send Reset Link
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
