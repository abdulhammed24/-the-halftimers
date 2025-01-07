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
const verifyEmailSchema = z.object({
  email: z.string().email("Invalid email address"),
});

// Define the type for form data
type VerifyEmailFormData = z.infer<typeof verifyEmailSchema>;

export default function VerifyEmailPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyEmailFormData>({
    resolver: zodResolver(verifyEmailSchema),
  });

  const onSubmit = (data: VerifyEmailFormData) => {
    console.log(data);
    // Handle email verification logic here
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold">Verify Your Email</h2>
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
            Send Verification Link
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
