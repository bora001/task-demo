import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { KeyboardEvent, useState } from "react";

const SearchInput = ({
  searchHandler,
}: {
  searchHandler: (currentWord: string) => void;
}) => {
  const [currentWord, setCurrentWord] = useState("");
  const onSearch = () => {
    searchHandler(currentWord);
  };
  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      onSearch();
    }
  };
  return (
    <div className="border rounded-md w-[200px] flex items-center justify-between py-1 px-2">
      <input
        placeholder="Search"
        onChange={(e) => setCurrentWord(e.target.value)}
        onKeyDown={onEnter}
      />
      <MagnifyingGlassIcon className="cursor-pointer" onClick={onSearch} />
    </div>
  );
};

export default SearchInput;
