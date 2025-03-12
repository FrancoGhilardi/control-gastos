import React from "react";

interface Props {
  children: React.ReactNode;
}

const AuthContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-red-500 flex items-center justify-center h-full ">
      {/* <Text className="auth-title">Bienvenido</Text> */}
      {children}
    </div>
  );
};

export default AuthContainer;
