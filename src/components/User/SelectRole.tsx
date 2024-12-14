"use client";

import { Dispatch, SetStateAction } from "react";
import SelectIndicator from "../SelectIndicator";
import SelectRow from "../SelectRow";
import { UserListType } from "./UserContent";
import useFilterItems from "@/hooks/useFilterItems";

const SelectRole = ({
  list,
  selectRole,
  setSelectRole,
  count,
}: {
  list: UserListType[];
  selectRole: string[];
  setSelectRole: Dispatch<SetStateAction<string[]>>;
  count: number;
}) => {
  const { selectQuery } = useFilterItems({
    setSelectQuery: setSelectRole,
    type: "role",
  });

  const uniqueUserRoles = [...new Set(list.map((item) => item.userRole))];
  const ROLE_LIST = uniqueUserRoles.map((role) => ({
    label: role,
    option: role,
  }));

  return (
    <div className="">
      <SelectIndicator count={count} />
      <SelectRow
        title="사용자 권한"
        list={ROLE_LIST}
        selected={selectRole}
        onClick={selectQuery}
      />
    </div>
  );
};

export default SelectRole;
