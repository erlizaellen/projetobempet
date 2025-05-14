import PageWrapper from "@/components/PageWrapper";

export default function Cadastro() {
    
    
    return(
        <PageWrapper>
        <div className="w-full h-full flex gap-40 p-40 bg-[#5bf356c2]">
            <div className="w-[50%] h-[70vh] bg-[#5bf356c2] rounded-xl">
                <div className="w-full h-[10vh] bg-amber-500 rounded-2xl">
                    <h1 className="font-bold text-white text-[30px] justify-center flex">Cadastre-se</h1>
                </div>
                <div className="w-full h-[80vh] rounded-xl bg-amber-950"></div>
                <div className="w-full h-[10vh] bg-amber-700"></div>
            </div>
            <div className="w-[50%] h-[70vh] rounded-xl bg-white"></div>
        </div>
        </PageWrapper>
    )
}