import React from "react";

export const Item = ({name}) => {
  return (
    <a className="text-[#AA86C0] flex items-center gap-1 " href="#">
      <span className="text-white text-[1.25rem]">•</span>{" "}
      <div className="bg-[rgba(43,43,43,0.19);] rounded-[0.9375rem] px-[0.375rem] m-[0.15rem_0]">
        {name}
      </div>
    </a>
  );
};
