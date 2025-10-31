interface FormHelperTextProps {
  text: string;
  variant?: "info" | "warning" | "error";
  className?: string;
}

export const FormHelperText = ({
  text,
  variant = "info",
  className = "",
}: FormHelperTextProps) => {
  const variantStyles = {
    info: "text-gray-500",
    warning: "text-yellow-600",
    error: "text-red-600",
  };

  return (
    <p
      className={`text-sm italic ${variantStyles[variant]} ${className}`}
    >
      {text}
    </p>
  );
};
