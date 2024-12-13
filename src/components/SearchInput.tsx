import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const SearchInput = () => {
  return (
    <div className="border rounded-md w-[200px] flex items-center justify-between py-1 px-2">
      <input placeholder="Search" />
      <MagnifyingGlassIcon />
    </div>
  );
};

export default SearchInput;
