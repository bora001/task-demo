"use client";
import * as Dialog from "@radix-ui/react-dialog";
import {
  CheckIcon,
  EnterIcon,
  EyeNoneIcon,
  EyeOpenIcon,
} from "@radix-ui/react-icons";
import "./login-modal.css";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import userList from "@api/user_list.json";
import { useUserStore } from "@/providers/UserProvider";
import { useRouter } from "next/navigation";
import { MENU_LIST } from "@/app/(with-auth)/Side";
const LoginModal = () => {
  const { setUser } = useUserStore((state) => state);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const [isVisiblePwd, setIsVisiblePwd] = useState(false);
  const onSubmit = (data: FieldValues) => {
    const { userName, userRole } = userList.find(
      (item) => item.userEmail === data.email
    ) || { userName: null, userRole: null };
    if (userName && userRole) {
      setUser({ userName, userRole });
      const path = MENU_LIST.filter((item) =>
        item.allowList?.includes(userRole)
      );
      console.log("path", path[0].href ?? MENU_LIST[0].href);
      router.push(path[0].href ?? MENU_LIST[0].href);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="btn">Login</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle flex items-center gap-2">
            <span className="bg-blue-500 text-white p-1 rounded-md">
              <EnterIcon />
            </span>
            로그인
          </Dialog.Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="name">
                이메일
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="Input"
                placeholder="이메일 주소를 입력해 주세요."
              />
            </fieldset>
            <fieldset className="Fieldset relative">
              <label className="Label" htmlFor="username">
                비밀번호
              </label>
              <input
                {...register("password", { required: true })}
                className="Input"
                type={isVisiblePwd ? "text" : "password"}
                placeholder="비밀번호를 입력해 주세요."
              />
              <div
                onClick={() => setIsVisiblePwd((prev) => !prev)}
                className="absolute right-[10px] bottom-[10px] cursor-pointer"
              >
                {isVisiblePwd ? <EyeOpenIcon /> : <EyeNoneIcon />}
              </div>
            </fieldset>

            <div
              style={{
                display: "flex",
                marginTop: 25,
                gap: "5px",
                justifyContent: "flex-end",
              }}
            >
              <Dialog.Close asChild>
                <button className="btn-outline" aria-label="Close">
                  Cancel
                </button>
              </Dialog.Close>
              <button
                className={`${
                  isValid ? `btn !bg-teal-600` : `btn-disabled`
                } flex items-center gap-2 `}
                type="submit"
              >
                <CheckIcon />
                Log-In
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default LoginModal;
