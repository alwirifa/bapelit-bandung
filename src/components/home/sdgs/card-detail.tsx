import React from "react";

interface CardProps {
  title?: string;
  titleFormatter?: React.ReactElement;
  icon: React.ReactElement;
  number: string;
  className?: string;
}

const CardDetail: React.FC<CardProps> = ({
  title,
  titleFormatter,
  icon,
  number,
  className,
}) => {
  return (
    <div
      className={`border-4 rounded-md h-[256px] w-[256px] flex flex-col gap-2 justify-center items-center ${className}`}
    >
      <div className="relative flex items-center justify-center w-full">
        <h1 className="absolute -top-3 left-4 text-7xl font-bold">{number}</h1>
        <p className="text-xl font-bold max-w-[120px]">
          {title}
          {titleFormatter}
        </p>
      </div>
      {icon}
    </div>
  );
};

export default CardDetail;
