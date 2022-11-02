import { MenuInferior } from "../components/menuInferior/MenuInferior";
import { Nav } from "../components/nav/Nav";

export const Perfil = () => {
  return (
    <>
      <Nav />

      <h2 className="ml-[13px] font-daysone">Perfil</h2>
      <section className="h-[13.25rem] flex flex-col justify-end items-center relative">
        <img
          src="../img/perfil.png"
          className="w-[6.25rem] z-50 absolute top-0"
          alt="Perfil"
        />
        <div className=" relative box-content w-[272px] h-[11rem] bg-white  [box-shadow:0px_4px_16px_1px_rgba(0,0,0,0.25)] [border-radius:0.75rem;] text-center flex flex-col justify-end pb-2">
          <img
            className="absolute top-2 left-2"
            src="../icons/code.svg"
            alt="Code"
          />
          <h4 className="text-[1.5rem] font-acme ">Pythonio Martinez</h4>
          <div className="font-arapey text-[0.875rem]">
            <p className="[text-shadow:0px_4px_4px_rgba(0,0,0,0.25);] tracking-[0.065em] ">martinez@pythonistas.com</p>

            <div className="flex justify-center gap-8 mt-2">
              <p className="[text-shadow:0px_4px_4px_rgba(0,0,0,0.25);]">Exp:</p>
              <p className="[text-shadow:0px_4px_4px_rgba(0,0,0,0.25);]">Mid Senior</p>
            </div>
            <div className="flex justify-center gap-8">
              <p className="[text-shadow:0px_4px_4px_rgba(0,0,0,0.25);]">Puntos:</p>
              <p className="[text-shadow:0px_4px_4px_rgba(0,0,0,0.25);]">750 pts</p>
            </div>
          </div>
        </div>
      </section>

      <main className="px-2">
        <div className="grid grid-cols-2  place-items-center mt-6 ">
          <ul className="flex flex-col gap-[0.875rem] text-[0.7813rem]">
            <li className="flex items-center gap-2">
              {" "}
              <div className="rounded-full w-[0.9375rem] h-[0.9375rem] bg-[#E45467]"></div>{" "}
              <span>Variables</span>
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <div className="rounded-full w-[0.9375rem] h-[0.9375rem] bg-[#E19D72]"></div>{" "}
              <span>Listas, tuplas, diccionarios</span>
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <div className="rounded-full w-[0.9375rem] h-[0.9375rem] bg-[#F1E78A]"></div>{" "}
              <span>Ciclos</span>
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <div className="rounded-full w-[0.9375rem] h-[0.9375rem] bg-[#8FE17B]"></div>{" "}
              <span>Funciones</span>
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <div className="rounded-full w-[0.9375rem] h-[0.9375rem] bg-[#68CDE5]"></div>{" "}
              <span>Orientado a objetos (poo)</span>
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <div className="rounded-full w-[0.9375rem] h-[0.9375rem] bg-[#E35CE4]"></div>{" "}
              <span>Desarrollo web (backend)</span>
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <div className="rounded-full w-[0.9375rem] h-[0.9375rem] bg-[#385CDF]"></div>{" "}
              <span>Apps móviles</span>
            </li>
          </ul>

          <img src="../img/chart.svg" alt="Chart" />
        </div>
        <button className="float-right font-biorhyme [background:var(--btn-bg-linear-gradient-1)] items-center flex justify-center w-[11.375rem] h-[2.625rem] rounded-full gap-4 ">
          Seguir curso{" "}
          <img src="../icons/branch.svg" className="mt-2" alt="Branch" />{" "}
        </button>
      </main>
      <MenuInferior />
    </>
  );
};
