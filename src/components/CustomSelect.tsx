import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import { Dispatch, SetStateAction, useEffect } from "react";
import { FieldValues, UseFormSetValue } from "react-hook-form";

type ListType = {
  value: string;
  label: string;
};
const CustomSelect = ({
  list,
  setSelect,
  setValue,
  name,
  className,
  label,
  w,
}: {
  list: ListType[];
  setSelect?: Dispatch<SetStateAction<string>>;
  setValue?: UseFormSetValue<FieldValues>;
  name?: string;
  className?: string;
  label?: string;
  w?: number;
}) => {
  useEffect(() => {
    if (setSelect) {
      setSelect(list[0].value);
    }
    if (setValue && name) {
      setValue(name, list[0].value);
    }
  }, [list, name, setSelect, setValue]);

  return (
    <Select.Root
      onValueChange={(value) => {
        if (setValue && name) {
          setValue(name, value);
        }
        if (setSelect) {
          setSelect(value);
        }
      }}
      defaultValue={list[0].value}
    >
      {label && <p className="text-xs font-semibold mb-[-8px]">{label}</p>}
      <Select.Trigger
        className={`w-[${
          w ?? 180
        }px] border flex items-center py-1 px-2 justify-between rounded-md ${className}`}
      >
        <Select.Value />
        <ChevronDownIcon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className={`relative border top-0 bg-white w-[${(w ?? 180) + 20}px]`}
          position="popper"
        >
          {list.map(({ value, label }) => (
            <Select.Item
              key={value}
              value={value}
              className={`flex justify-between py-1 px-2 items-center cursor-pointer hover:bg-gray-200 `}
            >
              <Select.ItemText>{label}</Select.ItemText>
              <Select.ItemIndicator className="SelectItemIndicator">
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default CustomSelect;
