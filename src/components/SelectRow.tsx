import CheckBox from "./CheckBox";

export type ListType = {
  label: string;
  option: string;
};
type SelectRowType = {
  title: string;
  list: ListType[];
  selected: string[];
  onClick: (option: string) => void;
};
const SelectRow = ({ title, list, selected, onClick }: SelectRowType) => {
  return (
    <div className="flex gap-[100px] border-b-gray-200 border-b-2 py-3 p-2">
      <h3 className="min-w-[80px]">{title}</h3>
      <div className="flex flex-wrap gap-x-[100px]">
        {list.map(({ label, option }) => (
          <div key={option} className="flex items-center gap-2 ">
            <CheckBox
              isChecked={selected.includes(option)}
              onClick={() => onClick(option)}
            />
            <p className="break-words whitespace-nowrap truncate w-[100px]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectRow;
