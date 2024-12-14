"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect } from "react";

const useFilterItems = ({
  setSelectQuery,
  type,
}: {
  type: string; // type은 항상 객체 키값
  setSelectQuery: Dispatch<SetStateAction<string[]>>;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentParams = new URLSearchParams(searchParams.toString());
    const current = currentParams.get(type);
    if (current?.length) {
      const currentQuery = [...new Set(current.split("&"))];
      setSelectQuery(currentQuery);
    }
  }, [searchParams, setSelectQuery, type]);

  const selectQuery = (option: string) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    const current = currentParams.get(type)?.split("&") || [];
    const newList = current.includes(option)
      ? current.filter((item) => item.length && item !== option)
      : [...current, option];
    if (newList.length) {
      currentParams.set(type, newList.join("&"));
    } else {
      currentParams.delete(type);
    }
    const newQueryString = currentParams.toString();
    router.replace(`${pathname}?${newQueryString}`);
    setSelectQuery(newList);
  };

  return { selectQuery };
};

export default useFilterItems;
