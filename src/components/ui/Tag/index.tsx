import React from "react";

interface TagProps {
  active: boolean;
}

const Tag: React.FC<TagProps> = ({ active }) => {
  return (
    <div
      className={`w-fit flex justify-between items-center py-[5px] px-[15px] rounded-md ${
        active ? "bg-emerald-950" : "bg-rose-950"
      }`}
    >
      <div
        className={`w-1 h-1 rounded ${active ? "bg-green-600" : "bg-red-600"}`}
      />
      <p
        className={`${active ? "text-green-600" : "text-red-600"} ml-2 text-xs`}
      >
        {active ? "Active" : "Inactive"}
      </p>
    </div>
  );
};

export default Tag;
