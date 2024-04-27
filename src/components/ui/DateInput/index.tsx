import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export interface DateInputProps {
  label: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
}

const DateInput: React.FC<DateInputProps> = (props) => {
  const { label, value, onChange } = props;

  return (
    <div className="form-group date-input flex-1">
      <label htmlFor="name" className="block text-base text-white mb-2">
        {label}
      </label>
      <DatePicker
        selected={value}
        onChange={onChange}
        placeholderText="Select date"
        className="px-5 py-3 w-full h-fit rounded-lg font-sans text-slate-700 date-input"
      />
    </div>
  );
};

export default DateInput;
