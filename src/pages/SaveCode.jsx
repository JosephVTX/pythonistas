import { MenuInferior } from "../components/menuInferior/MenuInferior"
import { Nav } from "../components/nav/Nav"

export const SaveCode = () => {
  return (
    <>
    <Nav/>

        <section className="border-b border-b-black pb-[0.625rem]">
            <h2 className="text-center text-[1.25rem]  text-[#6B6767] font-aoboshione">Lista de códigos guardados</h2>

            <div className="flex justify-between px-4 mt-4">
                <img src="../icons/list.svg" alt="Clipboard" />
                <button className="border-[#000000] border shadow-[3px_4px_7px_rgba(0,0,0,0.25);] items-center rounded-lg h-[2.75rem] flex justify-between text-[0.875rem] tracking-[-0.03em] px-2 font-acme [text-shadow:0px_4px_4px_rgba(0,0,0,0.25);]">Añadir Nuevo Código <img src="../icons/file-medical-alt.svg"  alt="file-medical-alt" /></button>
            </div>
            
        </section>

        <main className="p-4">

            <div className="grid grid-cols-2 place-items-center gap-[2rem_1rem]">

                <div className="w-[9.5rem] h-[9.5rem] bg-red-500 rounded-xl">

                </div>
                <div className="w-[9.5rem] h-[9.5rem] bg-red-500 rounded-xl">

                </div>
                <div className="w-[9.5rem] h-[9.5rem] bg-red-500 rounded-xl">

                </div>
                <div className="w-[9.5rem] h-[9.5rem] bg-red-500 rounded-xl">

                </div>
            </div>
        </main>
    <MenuInferior/>
    </>
  )
}
