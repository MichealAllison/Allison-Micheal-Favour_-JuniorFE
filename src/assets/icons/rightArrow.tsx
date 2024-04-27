import { IconProps } from "../../types/data";

const RightArrow = (props: IconProps) => {
  const { color, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="12"
      fill="none"
      viewBox="0 0 18 12"
      {...rest}
    >
      <path
        stroke={color || "#171717"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 11s5-3.682 5-5m0 0c0-1.318-5-5-5-5m5 5H1"
      ></path>
    </svg>
  );
};

export default RightArrow;
