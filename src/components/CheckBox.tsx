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
        isChecked ? `bg-teal-700 text-white` : " text-teal-700"
      } border border-teal-700 rounded-sm  cursor-pointer`}
    >
      <CheckIcon />
    </div>
  );
};

export default CheckBox;
