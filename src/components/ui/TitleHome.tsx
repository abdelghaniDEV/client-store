import React from "react";

type titleHomeProps = {
  children: React.ReactNode;
  className?: string;
};
export default function TitleHome({ children }: titleHomeProps) {
  return (
    <div>
      <h2 className="text-[30px] font-[500] md:text-[40px] leading-[40px]">
        {children}
      </h2>
    </div>
  );
}
