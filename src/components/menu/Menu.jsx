import { useAtom } from "jotai";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { refreshMenuAtom, SubMenu } from "./SubMenu";
import { SubSubMenu } from "./SubSubMenu";
import "./Menu.css";
import { ItemColor } from "./ItemColor";
import { Item } from "./Item";

const Menu = ({ isOpen, setOpenMenu }) => {
  const ref = useRef(null);
  const [refresh, _] = useAtom(refreshMenuAtom);

  const refMenu = useRef(null);

  const [showScroll, setShowScroll] = useState(false);

  const handleClickOutside = () => {
    // Your custom logic here
    setOpenMenu(false);
  };

  useEffect(() => {
    const scroll = refMenu.current.offsetHeight < refMenu.current.scrollHeight;
    setShowScroll(scroll);
  }, [refresh]);

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div
      ref={ref}
      className={`font-actor text-[1.5rem] tracking-[-0.03em] leading-[130%] fixed rounded-r-[10px] w-[18rem] h-full top-0 z-[1000] bg-black transition-transform duration-500 ${
        isOpen ? "translate-x-0" : "translate-x-[-100%]"
      }`}
    >
      <div className="h-full w-full relative px-2 py-10 ">
        <img
          className="top-2 right-2 absolute w-[2.625rem] h-[2.625rem]"
          src="../icons/python_white.svg"
          alt="Python"
          aria-hidden="true"
        />

        <ul
          ref={refMenu}
          className={`menu text-white h-full w-full ${
            showScroll && "scrollbar overflow-y-scroll"
          }`}
        >
          <li>
            <ItemColor first="Roadmap" second=" Ruta" />
          </li>
          <li>
            <Item name="Noticias" />
          </li>
          <li>
            <ItemColor first="Primeros" second=" Pasos" />
          </li>
          <li>
            <Item name="Cursos" />
          </li>
          <li>
            <ItemColor first="Canales" second=" Recomendados" />
          </li>
          <li>
            <ItemColor first="Paginas" second=" Recomendadas" />
          </li>
          <li>
            <Item name="Comunidades" />
          </li>
          <li>
            <ItemColor first="Hacking" second=" ético" />
          </li>
          <li>
            <SubMenu
              subMenuTitle="Librerias"
              subMenuContent={
                <ul>
                  <li>
                    <SubSubMenu
                      subMenuTitle="Nativas"
                      subMenuContent={
                        <ul className="bg-[rgba(43,43,43,0.19);] rounded-[0.9375rem] px-[0.375rem]">
                          <li>
                            <p># socket</p>
                          </li>
                          <li>
                            <p># json</p>
                          </li>
                          <li>
                            <p># math</p>
                          </li>
                          <li>
                            <p># random</p>
                          </li>
                        </ul>
                      }
                    />
                  </li>
                  <li>
                    <SubSubMenu
                      subMenuTitle="Menu"
                      subMenuContent={
                        <ul className="bg-[rgba(43,43,43,0.19);] rounded-[0.9375rem] px-[0.375rem]">
                          <li>
                            <p># request</p>
                          </li>
                          <li>
                            <p># kivy</p>
                          </li>
                        </ul>
                      }
                    />
                  </li>
                </ul>
              }
            />
          </li>
          <li>
            <SubMenu
              subMenuTitle="Machine Learning"
              subMenuContent={
                <ul className="bg-[rgba(43,43,43,0.19);] rounded-[0.9375rem] px-[0.375rem]">
                  <li>
                    <p># TensorFlow</p>
                  </li>
                  <li>
                    <p># PyTorch</p>
                  </li>
                </ul>
              }
            />
          </li>
          <li>
            <SubMenu
              subMenuTitle="Ciencia de Datos"
              subMenuContent={
                <ul className="bg-[rgba(43,43,43,0.19);] rounded-[0.9375rem] px-[0.375rem]">
                  <li>
                    <p># Numpy</p>
                  </li>
                  <li>
                    <p># Matplotlib</p>
                  </li>
                  <li>
                    <p># Matplotlib</p>
                  </li>
                  <li>
                    <p># Matplotlib</p>
                  </li>
                </ul>
              }
            />
          </li>
          <li>
            <SubMenu
              subMenuTitle="API REST"
              subMenuContent={
                <ul className="bg-[rgba(43,43,43,0.19);] rounded-[0.9375rem] px-[0.375rem]">
                  <li>
                    <p># Rest-Framework</p>
                  </li>
                  <li>
                    <p># Starlette</p>
                  </li>
                  <li>
                    <p># Flask</p>
                  </li>
                  <li>
                    <p># FastApi</p>
                  </li>
                </ul>
              }
            />
          </li>
          <li>
            <SubMenu
              subMenuTitle="Frameworks"
              subMenuContent={
                <ul className="bg-[rgba(43,43,43,0.19);] rounded-[0.9375rem] px-[0.375rem]">
                  <li>
                    <p># Desktop</p>
                  </li>
                  <li>
                    <p># Mobile</p>
                  </li>
                  <li>
                    <p># Web</p>
                  </li>
                </ul>
              }
            />
          </li>
          <li>
            <SubMenu
              subMenuTitle="Bots"
              subMenuContent={
                <ul className="bg-[rgba(43,43,43,0.19);] rounded-[0.9375rem] px-[0.375rem]">
                  <li>
                    <p># Telegram</p>
                  </li>
                  <li>
                    <p># Discord</p>
                  </li>
                  <li>
                    <p># Web</p>
                  </li>
                </ul>
              }
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
