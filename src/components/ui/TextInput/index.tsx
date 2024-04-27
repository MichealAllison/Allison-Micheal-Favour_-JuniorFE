import React from "react";

export interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const { value, onChange, label, placeholder } = props;
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
