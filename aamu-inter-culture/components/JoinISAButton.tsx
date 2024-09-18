"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface JoinISAButtonProps {
  onShowAuthModal: () => void;
}

export function JoinISAButton({ onShowAuthModal }: JoinISAButtonProps) {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = () => {
    if (user) {
      router.push("/join");
    } else {
      onShowAuthModal();
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <Button
      size="lg"
      className="bg-[#660000] text-white hover:bg-[#660000]/90 transition-transform duration-300 hover:scale-105"
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          Join ISA <ChevronRight className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}
