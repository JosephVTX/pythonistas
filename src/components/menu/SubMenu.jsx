import { atom, useAtom } from "jotai";
import { useState } from "react";

export const refreshMenuAtom = atom(false);

export const SubMenu = ({ subMenuTitle, subMenuContent }) => {
  const [openSubMenu, setOpenMenu] = useState(true);
  const [refreshMenu, setRefreshMenu] = useAtom(refreshMenuAtom);
  return (
    <>
      <div className="text-[#AA86C0]">
        
          <a
            className="text-[#AA86C0] flex items-center gap-1"
            href="#"
            onClick={() => {
              setOpenMenu(!openSubMenu);
              setRefreshMenu(!refreshMenu);
            }}
          >
            <span className="text-white text-[20px]">•</span>
            
            <span className="bg-[rgba(43,43,43,0.19);] rounded-[0.9375rem] px-[0.375rem] m-[0.2rem_0] ">
              {subMenuTitle}
            </span>
          </a>
        
      </div>

      {openSubMenu && <div className="pl-4">{subMenuContent}</div>}

    </>
  );
};
