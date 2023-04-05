import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

import { clsx } from "clsx";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: "primary" | "secondary";
}

function Button(props: ButtonProps) {
  return (
    <div>
      <button
        {...props}
        className={clsx(
          "cursor-pointer inline-block text-white py-2 px-14 rounded-md shadow-md m-4",
          props.variant === "primary"
            ? "bg-blue-500 hover:bg-blue-400"
            : "bg-green-400 hover:bg-green-200"
        )}
      >
        {props.children ? props.children : "submit"}
      </button>
    </div>
  );
}

export default Button;
