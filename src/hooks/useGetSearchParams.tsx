"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useGetSearchParams = () => {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState<Record<string, string | null>>({});
  useEffect(() => {
    const newParams: Record<string, string | null> = {};
    searchParams.forEach((value, key) => {
      newParams[key] = value;
    });
    setQuery(newParams);
  }, [searchParams]);
  return { query };
};

export default useGetSearchParams;
