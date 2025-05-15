//pagina HOME


import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <PageWrapper>
        
      <div className="w-full h-[350px] flex flex-col items-center justify-center bg-[url(/img/homefundo.png)]   bg-cover">
        <h1 className="text-[50px] font-bold text-green-900 ">
          Seja Bem Vindo
        </h1>
        <p className="text-[30px]  font-bold text-green-900 italic">
          Cuidando do seu melhor amigo com carinho que ele merece !{" "}
        </p>
      </div>

      <div className="w-full h-auto flex flex-col mt-4 p-4 sm:p-8 lg:p-16 ">
        <div className="w-full h-auto flex gap-4 p-4 items-center justify-center  ">
          <div //CLINICA ANIMALE
            className="w-[300px] h-[300px] rounded-[50px] border-[1px] bg-amber-200 item-center justify-center"
          >
            <img className="rounded-t-[50px]" src="/img/animale.jpg" alt="" />
            <h1 className="text-center text-[20px] font-bold text-green-900 italic">
              Clinica Animale{" "}
            </h1>
            <FaInstagram
              onClick={() =>
                window.open("https://www.instagram.com/animalepetshop/")
              }
              className="w-[50px] h-[30px] ml-28 mt-2 items-center justify-center cursor-pointer text-green-900"
            />
          </div>

          <div //CLINICA NOVO PET
            className="w-[300px] h-[300px] rounded-[50px] border-[1px] bg-amber-200 "
          >
            <img
              className="rounded-t-[50px] w-[300px] h-[200px]"
              src="/img/novopet.jpeg"
              alt=""
            />
            <h1 className="text-center text-[20px] font-bold text-green-900 italic">
              Clinica Novo Pet
            </h1>
            <FaInstagram
              onClick={() =>
                window.open("https://www.instagram.com/petshopnovopet/")
              }
              className="w-[50px] h-[30px] ml-28 mt-2 items-center justify-center cursor-pointer text-green-900"
            />
          </div>

          <div className="w-[300px] h-[300px] rounded-[50px] border-[1px] bg-amber-200 ">
            <img
              className="rounded-t-[50px] w-[300px] h-[200px]"
              src="/img/devetprapet.jpeg"
              alt=""
            />
            <h1 className="text-center text-[20px] font-bold text-green-900 italic">
              Clinica De Vet Pra Pet
            </h1>
            <FaInstagram
              onClick={() =>
                window.open("https://www.instagram.com/devet.prapet/")
              }
              className="w-[50px] h-[30px] ml-28 mt-2 items-center justify-center cursor-pointer text-green-900"
            />
          </div>
          <div className="w-[300px] h-[300px] rounded-[50px] border-[1px] bg-amber-200  ">
            <img
              className="rounded-t-[50px] w-[300px] h-[200px]"
              src="/img/vitalpet.jpeg"
              alt=""
            />
            <h1 className="text-center text-[20px] font-bold text-green-900 italic">
              Clinica Vital Pet
            </h1>
            <FaInstagram
              onClick={() =>
                window.open("https://www.instagram.com/_vitalpet/")
              }
              className="w-[50px] h-[30px] ml-28 mt-2 items-center justify-center cursor-pointer text-green-900"
            />
          </div>
        </div>
        <div className="w-full h-auto flex gap-4 p-4 items-center justify-center ">
          <div className="w-[300px] h-[300px] rounded-[50px] border-[1px] bg-amber-200  ">
            <img
              className="rounded-t-[50px] w-[300px] h-[200px]"
              src="/img/petshopvitoria.jpeg"
              alt=""
            />
            <h1 className="text-center text-[20px] font-bold text-green-900 italic">
              Pet Shop Vitória
            </h1>
            <FaInstagram
              onClick={() =>
                window.open(
                  "https://www.instagram.com/petshopvitoriasantoandre/"
                )
              }
              className="w-[50px] h-[30px] ml-28 mt-2 items-center justify-center cursor-pointer text-green-900"
            />
          </div>
          <div className="w-[300px] h-[300px] rounded-[50px] border-[1px] bg-amber-200  ">
            <img
              className="rounded-t-[50px] w-[300px] h-[200px]"
              src="/img/petpituka.webp"
              alt=""
            />
            <h1 className="text-center text-[20px] font-bold text-green-900 italic">
              Pet Pituka
            </h1>
            <FaInstagram
              onClick={() =>
                window.open("https://www.instagram.com/petpitukaofc/")
              }
              className="w-[50px] h-[30px] ml-28 mt-2 items-center justify-center cursor-pointer text-green-900"
            />
          </div>
            <div className="w-[300px] h-[300px] rounded-[50px] border-[1px] bg-amber-200 ">
              <img
              className="rounded-t-[50px] w-[300px] h-[200px]"
              src="/img/petland.jpg"
              alt=""
              />
              <h1 className="text-center text-[20px] font-bold text-green-900 italic">
              Pet Land
               </h1>
              <FaInstagram
              onClick={() =>
                window.open("https://www.instagram.com/petlandbrasil/")
              }
              className="w-[50px] h-[30px] ml-28 mt-2 items-center justify-center cursor-pointer text-green-900"
               />
              </div>
                <div className="w-[300px] h-[300px] rounded-[50px] border-[1px] bg-amber-200  ">
                <img
                className="rounded-t-[50px] w-[300px] h-[200px]"
                src="/img/villapetshop.jpg"
              alt=""
             />
              <h1 className="text-center text-[20px] font-bold text-green-900 italic">
              Villa Pet Shop
              </h1>
                 <FaInstagram
              onClick={() =>
                window.open("https://www.instagram.com/villapet.shop/")
              }
              className="w-[50px] h-[30px] ml-28 mt-2 items-center justify-center cursor-pointer text-green-900"
                />
              </div>
        </div>
      </div>
    </PageWrapper>
  );
}
