import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  width?: "small" | "medium" | "large" | "default";
};

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  width = "default",
}) => {
  const widthClasses = {
    small: "max-w-screen-sm",
    medium: "max-w-screen-md",
    large: "max-w-screen-lg",
    default: "max-w-screen-xl",
  };

  return (
    <div className={`mx-auto px-4 ${widthClasses[width]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
