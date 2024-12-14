import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import { Dispatch, SetStateAction, useEffect } from "react";

type ListType = {
  value: string;
  label: string;
};
const CustomSelect = ({
  list,
  setSelect,
}: {
  list: ListType[];
  setSelect: Dispatch<SetStateAction<string>>;
}) => {
  useEffect(() => {
    setSelect(list[0].value);
  }, [list, setSelect]);

  return (
    <Select.Root
      onValueChange={(value) => setSelect(value)}
      defaultValue={list[0].value}
    >
      <Select.Trigger className="w-[180px] border flex items-center py-1 px-2 justify-between rounded-md">
        <Select.Value />
        <ChevronDownIcon />
      </Select.Trigger>
      <Select.Content className="relative border top-0 bg-white w-[180px]">
        {list.map(({ value, label }) => (
          <Select.Item
            key={value}
            value={value}
            className="flex justify-between py-1 px-2 items-center cursor-pointer hover:bg-gray-200"
          >
            <Select.ItemText>{label}</Select.ItemText>
            <Select.ItemIndicator className="SelectItemIndicator">
              <CheckIcon />
            </Select.ItemIndicator>
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default CustomSelect;
