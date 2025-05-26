import CardVantagens from "@/components/CardVantagens";
import PageWrapper from "@/components/PageWrapper";
import { TbPawFilled } from "react-icons/tb";


export default function vantagens() {
    
    return (
        <PageWrapper>
            <div className="w-full p-8 text-center rp-amber-500 sm:p-8 lg:p-16  ">
                <div className="flex items-center justify-center">
                    <h1 className="text-[50px] font-bold text-[#215f1f]/70"> Vantagens</h1>
                </div>

                <p className="mb-8 text-[25px] font-bold text-[#215f1f]"> Conheça <span className="text-[#215f1f]/70">todos</span> os beneficios exclusivos que preparamos
                    para você e seu pet. <br /> Uma experiência para garantir o maior cuidado.</p>
            </div>
            <div className="w-full h-auto flex flex-wrap ">
                <div className="w-full h-full flex flex-wrap max-md:grig">

                    <CardVantagens className={"bg-[#ffc0cb]"} titulo={"Tudo para seu Pet"} texto={"Rações e acessórios que seus pets vão adorar. Petshops afiliados na sua região."} />
                    <CardVantagens className={"bg-blue-200"} titulo={"Parcerias em expansão"} texto={"Nossa rede de parceiros cresce e conta com clínicas veterinárias e petshops com ofertas exclusivas."} />
                    <CardVantagens className={"bg-amber-200"} titulo={"Localização inteligente"} texto={"Encontre clínicas de atendimento próximas da sua casa, facilitando o acessos aos melhores serviços para seu pet."} />
                    <CardVantagens className={"bg-lime-200"} titulo={"Benefício por assinatura"} texto={"Assinando o Bem Pet,você automaticamente tem acesso a deversos benefícios exclusivos"} />
                    <div className="w-full h-[55px] flex flex-col items-center justify-center mt-10">
                        <div className="w-[80%] h-[1px] bg-black mb-3"></div>
                        <div className="w-full h-[40px] flex justify-center items-center">
                            <h1 className="text-[50px] font-bold text-[#215f1f]/70">Nossos planos</h1>
                        </div>
                        
                    </div>
                    <CardVantagens className={"bg-gray-300"} titulo={"Plano Gratis"} texto={"Apenas as funcionalidades basicas"} />
                    <CardVantagens className={"bg-[#Ffd700]"} titulo={"Plano de Assinatura (R$9,90)"} texto={`Funcionalidades exclusivas como:`} item1={"- Acesso a cupons e promoçoes exclusivos"} item2={"- Maior alcance de busca"} item3={"- Seu pet vai te amar mais"}/>
                </div>
                <div className="w-full h-full flex items-center justify-center ">
                    <button
                        onClick={() => window.location.href = "/assinatura"}
                        type="submit"
                        className="flex items-center justify-center max-md:w-full w-[15%]  h-[50px] 
                         mp:bg text-white font-bold bg-[#215f1f] mt-12 text-[20px] rounded-full
                            cursor-pointer hover:bg-[#1a4f1a] focus:outline-none">
                        <TbPawFilled className=" mr-2" />
                        <p>Assinar</p>
                        <TbPawFilled className="ml-2" />
                    </button>
                </div>
            </div>

        </PageWrapper>
    )
}