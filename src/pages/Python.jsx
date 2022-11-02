import React from "react";
import { MenuInferior } from "../components/menuInferior/MenuInferior";
import { Nav } from "../components/nav/Nav";

export const Python = () => {
  return (
    <>
      <Nav />
      
      <section className="w-full mt-[2.25rem] ">
        <img
          className="m-auto h-[11.375rem] w-full object-cover"
          src="../layout/python-code.webp"
          alt=""
        />
      </section>

      <main className="p-[0.9375rem]">
        <h2 className="text-[1.25rem] mb-[1.1875rem] font-aoboshione ">
          ¿Qué es Python?
        </h2>
        <p>
          Python es un lenguaje de alto nivel de programación interpretado cuya
          filosofía hace hincapié en la legibilidad de su código, se utiliza
          para desarrollar aplicaciones de todo tipo, ejemplos: Instagram,
          Netflix, Spotify, Panda 3D, entre otros.2​ Se trata de un lenguaje de
          programación multiparadigma, ya que soporta parcialmente la
          orientación a objetos, programación imperativa y, en menor
          medida[¿cuál?], programación funcional. Es un lenguaje interpretado,
          dinámico y multiplataforma. Administrado por Python Software
          Foundation, posee una licencia de código abierto, denominada Python
          Software Foundation License.3​ Python se clasifica constantemente como
          uno de los lenguajes de programación más populares.
        </p>
      </main>
      <MenuInferior />
    </>
  );
};
