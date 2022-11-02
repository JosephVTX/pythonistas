import { useAtom } from "jotai";
import React from "react";
import { useState } from "react";
import { refreshMenuAtom } from "./SubMenu";
import { SlArrowRight, SlArrowDown } from "react-icons/sl";

export const SubSubMenu = ({ subMenuTitle, subMenuContent }) => {
  const [openSubMenu, setOpenSubMenu] = useState(true);

  const [refresh, setRefresh] = useAtom(refreshMenuAtom);

  return (
    <ul>
      <li>
        <div className="flex items-center">
          {!openSubMenu ? (
            <SlArrowRight className="text-[14px]" />
          ) : (
            <SlArrowDown className="text-[14px] mr-1" />
          )}

          <a
            onClick={() => setOpenSubMenu(!openSubMenu)}
            className="text-[#309EAB] flex items-center gap-1 bg-[rgba(43,43,43,0.19);] rounded-[0.9375rem] px-[0.375rem] m-[0.2rem_0] h-max"
            href="#"
          >
            {subMenuTitle}
          </a>
        </div>

        <div className="pl-6">{openSubMenu && subMenuContent}</div>
      </li>
    </ul>
  );
};
