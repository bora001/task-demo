"use client";
import LoginModal from "../../components/LoginModal/LoginModal";

const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen gap-3">
      <h1 className="text-teal-700 font-bold text-2xl">Task Management</h1>
      <LoginModal />
    </div>
  );
};

export default Main;
