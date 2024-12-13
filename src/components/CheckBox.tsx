import { CheckIcon } from "@radix-ui/react-icons";

const CheckBox = ({
  isChecked,
  onClick,
}: {
  isChecked: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`${
        isChecked ? `bg-teal-700 text-white` : "bg-gray-50 text-teal-700"
      } rounded-sm  cursor-pointer`}
    >
      <CheckIcon />
    </div>
  );
};

export default CheckBox;
