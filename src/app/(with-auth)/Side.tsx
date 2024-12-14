"use client";
import {
  CaretLeftIcon,
  CheckboxIcon,
  ViewGridIcon,
} from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import withAuthCheck from "@/hoc/withAuthCheck";
import { useUserStore } from "@/providers/UserProvider";

export const MENU_LIST = [
  {
    title: "Users",
    href: "/users",
    icon: <ViewGridIcon />,
    allowList: ["Admin", "RegularUser", "PrimeUser"],
  },
  {
    title: "Tasks",
    href: "/tasks",
    icon: <CheckboxIcon />,
    allowList: ["Admin", "RegularUser", "PrimeUser", "Viewer"],
  },
];

const Side = () => {
  const path = usePathname();
  const { userRole } = useUserStore((state) => state);

  return (
    <div className="bg-teal-700 w-[250px] h-screen p-3 flex flex-col text-white relative">
      <div className="absolute bg-teal-900 p-1 rounded-full right-[-10px] top-[50px]">
        <CaretLeftIcon />
      </div>
      <div className="mt-[80px] flex flex-col gap-1">
        {MENU_LIST.map(({ title, href, icon, allowList }) =>
          allowList.includes(userRole ?? "") ? (
            <Link
              href={href}
              key={title}
              className={`${MENU_STYLE} ${
                path.includes(title.toLowerCase()) && ACTIVE_STYLE
              }`}
            >
              {icon}
              <p>{title}</p>
            </Link>
          ) : (
            <button disabled key={title} className={DISABLE_STYLE}>
              {icon}
              <p>{title}</p>
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default withAuthCheck(Side);

const MENU_STYLE =
  "flex items-center gap-2 cursor-pointer hover:bg-teal-900 p-2 rounded-md";
const ACTIVE_STYLE = "bg-teal-900";
const DISABLE_STYLE =
  "flex items-center gap-2 p-2 rounded-md cursor-not-allowed opacity-50";
