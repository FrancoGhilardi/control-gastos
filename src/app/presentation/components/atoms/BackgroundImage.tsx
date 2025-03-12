import React from "react";

interface Props {
  src?: string;
  opacity?: number;
}

const BackgroundImage: React.FC<Props> = ({
  src = "/images/background-Login.png",
  opacity = 0.5,
}) => {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${src})`,
        opacity,
      }}
    />
  );
};

export default BackgroundImage;
