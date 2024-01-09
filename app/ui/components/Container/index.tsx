import React from "react";

export default function Container({
  children,
  extraClasses,
  extraElement,
  containerClasses,
}: {
  children: React.ReactNode | React.ReactNode[];
  extraClasses?: string;
  extraElement?: React.ReactNode;
  containerClasses?: string;
}) {
  return (
    <div className={`${extraClasses} mb-[100px] relative`}>
      {extraElement && extraElement}
      <div className={`${containerClasses} container relative z-10`}>
        {children}
      </div>
    </div>
  );
}
