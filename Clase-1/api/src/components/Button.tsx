import { Link } from "react-router-dom";

type ButtonProps = {
  type?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  text: string;
  className?: string;
  to: string;
};

const Button = ({ type, text, className, to }: ButtonProps) => {
  return (
    <Link to={to} className={`btn btn-${type ?? "primary"} ${className ?? ""}`}>
      {text}
    </Link>
  );
};

export default Button;
