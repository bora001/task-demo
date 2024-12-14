import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useAddParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const addParams = (type: string, option: string) => {
    if (!type) return;
    const currentParams = new URLSearchParams(searchParams.toString());
    if (!option.length) {
      currentParams.delete("keyword");
    } else {
      currentParams.set("keyword", `${type}&${option}`);
    }
    const newQueryString = currentParams.toString();
    router.replace(`${pathname}?${newQueryString}`);
  };
  return { addParams };
};

export default useAddParams;
