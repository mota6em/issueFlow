import React from "react";
import { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;

  return (
    <div role="alert" className="alert alert-error alert-soft mb-3">
      <span>{children}</span>
    </div>
  );
};

export default ErrorMessage;
