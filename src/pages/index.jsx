//pagina HOME


import CardClinica from "@/components/CardClinica";
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
      <CardClinica/>
    
     
    </PageWrapper>
  );
}
