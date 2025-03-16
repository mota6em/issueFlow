import React from "react";

const Skeleton = ({ className }: { className?: string }) => {
  return <div className={`${className} skeleton h-4`}></div>;
};

export default Skeleton;
