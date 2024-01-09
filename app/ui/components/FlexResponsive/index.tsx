import React from "react";

export default function FelxResponsive({
  children,
  breakThrow = "lg:flex-row",
  gapCol = "gap-3",
  gapRow = "gap-3",
  extraClasses,
}: {
  children: React.ReactNode;
  breakThrow?: string;
  gapCol?: string;
  gapRow?: string;
  extraClasses?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center ${breakThrow} ${gapCol} ${breakThrow}:${gapRow}  ${extraClasses}`}>
      {children}
    </div>
  );
}
