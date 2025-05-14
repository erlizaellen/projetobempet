//pagina HOME 


import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";

export default function Home(){
    return (
        <PageWrapper>
            <div className="w-full h-auto flex flex-col  mt-4 ">
                <div 
                  className="w-full h-[350px] flex flex-col items-center justify-center bg-[#f3f598]">
                  <h1 className="text-[50px] font-semibold text-green-900 ">Seja Bem Vindo</h1>
                  <p className="text-[30px] font-semibold text-green-900">Cuidando do seu melhor amigo com carinho que ele merece ! </p>
                </div>

                <div className="w-full h-auto flex gap-4 p-4 items-center justify-center ">
                    <div className="w-[300px] h-[200px] border border-2 "></div>
                    <div className="w-[300px] h-[200px] border border-2 "></div>
                    <div className="w-[300px] h-[200px] border border-2 "></div>
                    <div className="w-[300px] h-[200px] border border-2 "></div>

                </div>
                
                <div className="w-full h-auto flex gap-4 p-4 items-center justify-center ">
                    <div className="w-[300px] h-[200px] border border-2 "></div>
                    <div className="w-[300px] h-[200px] border border-2 "></div>
                    <div className="w-[300px] h-[200px] border border-2 "></div>
                    <div className="w-[300px] h-[200px] border border-2 "></div>

                </div>
                
            </div>
        </PageWrapper>
    )
}