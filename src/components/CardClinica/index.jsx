
import { FaInstagram } from "react-icons/fa";
export default function CardClinica(){

    const clinicas = [
        {
            nome: "Clinica Animale",
            imagem: "/img/animale.jpg",
            urlInsta: "https://www.instagram.com/animalepetshop/"
        },
        {
            nome:"Clinica Novo Pet",
            imagem:"/img/novopet.jpeg",
            urlInsta:"https://www.instagram.com/petshopnovopet/"
        },
        {
            nome:"  Clinica De Vet Pra Pet",
            imagem:"/img/devetprapet.jpeg",
            urlInsta:"https://www.instagram.com/devet.prapet/"
        },
        {
            nome:"Pet Pituka",
            imagem:"/img/petpituka.webp",
            urlInsta:"https://www.instagram.com/petpitukaofc/"
        },
        {
            nome:" Pet Land",
            imagem:"/img/petland.jpg",
            urlInsta:"https://www.instagram.com/petlandbrasil/"
        }
        ,
        {
            nome:"Villa Pet Shop",
            imagem:"/img/villapetshop.jpg",
            urlInsta:"https://www.instagram.com/villapet.shop/"
        }
        ,
        {
            nome:"Clinica Vital Pet",
            imagem:"/img/vitalpet.jpeg",
            urlInsta:"https://www.instagram.com/_vitalpet/"
        }  ,
        {
            nome:"Pet Shop Vitória",
            imagem:"/img/petshopvitoria.jpeg",
            urlInsta:"https://www.instagram.com/petshopvitoriasantoandre/"
        }
        

    
    ]

    return(
        

        <div className="w-full h-auto grid sm:grid-cols-4 gap-3.5 items-center justify-center mt-4 sm:p-8 lg:p-16">
            {clinicas.map((clinica, index) => {
                return (
                    <div
                        key={index}
                        className="w-[300px] h-[300px] rounded-[50px] border-2 hover:shadow-green-500/50 shadow-lg
                        border-[#5bf356c2] bg-amber-200 item-center justify-center cursor-pointer hover:scale-105 transition"
                    >
                        <img className="rounded-t-[50px] w-full h-[200px]" src={clinica.imagem} alt="" />
                        <h1 className="text-center text-[20px] font-bold text-green-900 italic">
                        {clinica.nome}{" "}
                        </h1>
                        <FaInstagram
                        onClick={() =>
                            window.open(clinica.urlInsta)
                        }
                        className="w-[50px] h-[30px] ml-28 mt-2 items-center justify-center cursor-pointer text-green-900"
                        />
                    </div>
                )
            })}
            {/* <div //CLINICA ANIMALE
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
          <div
            className="w-[300px] h-[300px] rounded-[50px] border-[1px] bg-amber-200  ">
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
                window.open("https://www.instagram.com/petshopvitoriasantoandre/")
              }
              className="w-[50px] h-[30px] ml-28 mt-2 items-center justify-center cursor-pointer text-green-900"
            />
          </div>
           */}

        </div>
    )
}