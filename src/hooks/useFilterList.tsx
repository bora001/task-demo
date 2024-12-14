import { Dispatch, SetStateAction, useEffect } from "react";
import useGetSearchParams from "./useGetSearchParams";

const useFilterList = <T,>({
  setList,
  list,
}: {
  setList: Dispatch<SetStateAction<T[]>>;
  list: T[];
}) => {
  const { query } = useGetSearchParams();

  useEffect(() => {
    const searches = Object.entries(query);
    if (searches.length) {
      const newList = list.filter((item) => {
        return searches.every(([key, value]) => {
          if (!value) return;
          if (key === "keyword") {
            const [keyword, targetValue] = value.split("&");
            return (item as Record<string, string>)[keyword]
              .toLowerCase()
              ?.includes(targetValue.toLowerCase()); // 검색 대소문자 구분 x
          } else {
            const valueList = value?.split("&");
            return valueList?.length === 0
              ? (item as Record<string, string>)[key] === value
              : valueList?.includes((item as Record<string, string>)[key]);
          }
        });
      });
      setList(newList);
    } else {
      setList(list);
    }
  }, [list, query, setList]);
};

export default useFilterList;
