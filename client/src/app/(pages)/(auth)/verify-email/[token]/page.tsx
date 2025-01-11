"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export default function VerifyEmailPage() {
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const verifyEmail = async () => {
      const token = window.location.pathname.split("/").pop();
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-email/${token}`,
      );

      if (response.ok) {
        const data = await response.json();
        toast({
          title: "Registration successful!",
          description: data.message,
          duration: 1500,
        });
        router.replace("/login");
      } else {
        const errorData = await response.json();
        toast({
          title: "Registration failed",
          description: errorData.message,
          duration: 1500,
          variant: "destructive",
        });
      }
    };

    verifyEmail();
  }, [router, toast]);

  return <div>Verifying your email...</div>;
}
