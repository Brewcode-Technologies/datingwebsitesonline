import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Title = ({ children, className, as: Tag = "h2" }: Props) => {
  return (
    <Tag className={twMerge("text-2xl font-semibold", className)}>{children}</Tag>
  );
};

export default Title;
