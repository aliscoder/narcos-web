import { SVGProps } from "react";

const SVG: React.FC<SVGProps<any>> = ({ children, ...props }) => {
  return <svg {...props}>{children}</svg>;
};

export default SVG;
