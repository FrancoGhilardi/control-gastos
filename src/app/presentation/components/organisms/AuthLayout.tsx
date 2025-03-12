import React from "react";
import { BackgroundImage } from "@/atoms";

type Props = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <BackgroundImage />
      <div className="z-10 bg-white p-6 w-2xl h-screen sm:h-9/12 min-w-sm min-h-[450px]">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
