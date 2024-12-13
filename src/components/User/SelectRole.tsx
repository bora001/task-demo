"use client";

import { Dispatch, SetStateAction, useEffect } from "react";
import SelectIndicator from "../SelectIndicator";
import SelectRow from "../SelectRow";
import { UserListType } from "./UserContent";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SelectRole = ({
  list,
  selectRole,
  setSelectRole,
}: {
  list: UserListType[];
  selectRole: string[];
  setSelectRole: Dispatch<SetStateAction<string[]>>;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const uniqueUserRoles = [...new Set(list.map((item) => item.userRole))];
  const ROLE_LIST = uniqueUserRoles.map((role) => ({
    label: role,
    option: role,
  }));

  useEffect(() => {
    if (searchParams.get("role")?.length) {
      const current = [...new Set(searchParams.get("role")?.split("&"))];
      setSelectRole(current);
    }
  }, [searchParams, setSelectRole]);

  const selectUserRole = (option: string) => {
    const current = [...new Set(searchParams.get("role")?.split("&"))];
    const newList = current.includes(option)
      ? current.filter((item) => item.length && item !== option)
      : [...current, option];

    setSelectRole(newList);
    router.replace(
      newList.length
        ? `${pathname}?role=${encodeURIComponent(newList.join("&"))}`
        : pathname
    );
  };
  return (
    <div className="">
      <SelectIndicator count={list.length} />
      <SelectRow
        title="사용자 권한"
        list={ROLE_LIST}
        selected={selectRole}
        onClick={selectUserRole}
      />
    </div>
  );
};

export default SelectRole;
