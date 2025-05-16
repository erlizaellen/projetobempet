import { IoLogoInstagram } from "react-icons/io5";
import { LuFacebook } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import Paw from "../Paw";


export default function Footer() {  
    return(
        <div className="w-full h-[300px] flex flex-col items-center bg-[#5bf356c2] p-4 sm:p-8 lg:p-16">
            <div className="w-full h-[149px] flex items-center justify-between px-5 mb-4">
                <div>
                <img className="size-[150px] h-[140px] cursor-pointer" src= "/bempetlogo.png" onClick={() => window.location.href = "/"}  alt="" />
                </div>
                <div className="">
                    <Paw></Paw>
                </div>
                <div className="text-white text-[20px] font-bold flex flex-col items-center">
                    <p className="pb-3 max-w-[200px]">Siga-nos em nossas redes sociais</p>

                    <div className="flex flex-row justify-end items-center gap-5">
                        <IoLogoInstagram onClick={() => window.open("https://www.instagram.com")} size={40} className="text-[#5bf356c2] p-1 bg-white rounded-full cursor-pointer"/>
                        <LuFacebook onClick={() => window.open("https://www.facebook.com")} size={40} className="text-[#5bf356c2] p-1 bg-white rounded-full cursor-pointer"/>
                        <FaWhatsapp onClick={() => window.open("https://www.whatsapp.com")} size={40} className="text-[#5bf356c2] p-1 bg-white rounded-full cursor-pointer"/>
                    </div>
                </div>
            </div>
            <div className="w-[90%] h-[1px] bg-white/70"/>
            <div className="w-full h-[150px] flex items-center justify-center">
                    <p className="text-white text-[20px] font-bold">© 2025 Bem Pet. Todos os direitos reservados.</p>
            </div>
            

        </div>
    )
}


{/* <div className="w-full h-[200px] flex ml-16  gap-8 cursor-pointer">
<img src= "/bempetlogo.png" onClick={() => window.location.href = "/"}  alt="" />
<img 
className="w-[200px] h-[200px]  p-8 ml-30 rounded-full flex item-center justify-center "
src="/img/insta.png" alt="" />
 <img 
className="w-[200px] h-[200px]  p-8 ml-30 rounded-full flex item-center justify-center "
src="/img/face.png" alt="" />
</div> */}
