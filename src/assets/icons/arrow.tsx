import { IconProps } from "../../types/data";

const Arrow = (props: IconProps) => {
  const { color, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="12"
      fill="none"
      viewBox="0 0 9 12"
      {...rest}
    >
      <path
        fill={color || "#0B0B0B"}
        d="M.84 1.41L5.42 6 .84 10.59 2.25 12l6-6-6-6L.84 1.41z"
      ></path>
    </svg>
  );
};

export default Arrow;
