import React from "react";

export interface SelectInputProps {
  label: string;
  placeholder: string;
  options: Array<{ key: string; value: string }>;
  value?: string;
  onChange: (key: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = (props) => {
  const { label, placeholder, options, value, onChange } = props;
  return (
    <div className="form-group flex-1">
      <label htmlFor="name" className="block text-base text-white mb-2">
        {label}
      </label>
      <select
        className="px-5 py-3 w-full h-fit rounded-lg font-sans text-slate-700"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
