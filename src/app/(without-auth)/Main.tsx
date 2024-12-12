"use client";
import { useUserStore } from "@/providers/UserProvider";
import LoginModal from "../../components/LoginModal/LoginModal";
import { useRouter } from "next/navigation";

const Main = () => {
  const { userName, userRole } = useUserStore((state) => state);
  const router = useRouter();
  if (userName && userRole) {
    router.push("/users");
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen gap-3">
      <h1 className="text-teal-700 font-bold text-2xl">Task Management</h1>
      <LoginModal />
    </div>
  );
};

export default Main;
