import type { FormEventHandler, ReactNode } from "react";

interface FormContainerProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
  className?: string;
}

export const FormContainer = ({
  onSubmit,
  children,
  className = "",
}: FormContainerProps) => {
  return (
    <form onSubmit={onSubmit} className={`space-y-4 ${className}`}>
      {children}
    </form>
  );
};
