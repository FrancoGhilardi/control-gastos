import React from "react";
import BackgroundImage from "../atoms/BackgroundImage";

type Props = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <BackgroundImage />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AuthLayout;
