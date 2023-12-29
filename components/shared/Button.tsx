import { Oswald } from "next/font/google";
import { useContext, ReactNode } from "react";
import { AccentContext } from "../../contexts/AccentProvider";

const oswald = Oswald({ subsets: ["latin"] });

type ButtonProps = {
  customClasses?: string;
  onClick?: () => any;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
};
export default function Button({
  customClasses,
  onClick,
  children,
  type,
}: ButtonProps) {
  const { accent } = useContext(AccentContext);
  return (
    <button
      className={`btn btn-outlined-${accent} font-md ${oswald.className} ${customClasses}`}
      onClick={onClick}
      type={type || "button"}
    >
      {children}
    </button>
  );
}
