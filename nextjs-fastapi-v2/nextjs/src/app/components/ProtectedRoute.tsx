"use client";

import { PropsWithChildren, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "../context/AuthContext";

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  return <>{children}</>;
};

export default ProtectedRoute;
