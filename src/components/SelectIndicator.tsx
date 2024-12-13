const SelectIndicator = ({ count }: { count: number }) => {
  return (
    <div className="flex text-teal-800 items-center gap-2 border-b-2 border-b-gray-700 p-2 mt-2">
      <h3>Selected</h3>
      <div className="border border-teal-800 rounded-full min-w-5 h-5 flex items-center justify-center px-1">
        <p className="text-xs font-bold">{count}</p>
      </div>
    </div>
  );
};

export default SelectIndicator;
