"use client";
import { selectIsLogin } from "@/redux/allStateSlice";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const IsAuthenticatedInDashboard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isLogin = useAppSelector(selectIsLogin);
  const router = useRouter();
  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [isLogin, router]);

  return <>{children}</> || null;
};

const IsAuthenticatedInAuth = ({ children }: { children: React.ReactNode }) => {
  const isLogin = useAppSelector(selectIsLogin);
  const router = useRouter();
  useEffect(() => {
    if (isLogin) {
      router.push("/");
    }
  }, [isLogin, router]);

  return <>{children}</> || null;
};

export default IsAuthenticatedInAuth;
