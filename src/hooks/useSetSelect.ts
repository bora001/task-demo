import { useState } from "react";
import useAddParams from "./useAddParams";

const useSetSelect = () => {
  const [select, setSelect] = useState("");
  const { addParams } = useAddParams();

  const searchHandler = (currentWord: string) => {
    addParams(select, currentWord);
  };
  return { setSelect, searchHandler };
};

export default useSetSelect;
