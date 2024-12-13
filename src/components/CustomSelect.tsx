import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";

type ListType = {
  value: string;
  label: string;
};
const CustomSelect = ({ list }: { list: ListType[] }) => {
  return (
    <Select.Root>
      <Select.Trigger className="w-[150px] border flex items-center p-1 justify-between">
        <Select.Value />
        <ChevronDownIcon />
      </Select.Trigger>

      <Select.Content className="relative border top-0 bg-white w-[150px]">
        {list.map(({ value, label }) => (
          <Select.Item
            key={value}
            value={value}
            className="flex justify-between"
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
