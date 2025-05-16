import CardVantagens from "@/components/CardVantagens";
import PageWrapper from "@/components/PageWrapper";
import { TbPawFilled } from "react-icons/tb";

export default function vantagens() {
    return (
        <PageWrapper>
            <div className="w-full p-8 text-center">
                <div className="flex items-center justify-center">
                <h1 className="text-[50px] font-bold text-[#215f1f]/70"> Vantagens</h1>
                 </div>

                <p className="mb-8 text-[25px] font-bold text-[#215f1f]"> Conheça os <span className="text-[#215f1f]/70">todos</span> beneficios execlusivos que preparamos
                    para você e seu pet. <br /> Uma experiência para garantir o maior cuidado.</p>
            </div>
            <div className="w-full h-auto flex flex-wrap ">
                <div className="w-full h-full flex flex-wrap ">

                    <CardVantagens titulo={"Tudo para seu Pet"} texto={"rações e acessórios que seus pets vão adorar. Petshops afiliados na região."} />
                    <CardVantagens className={"bg-blue-200"} titulo={"Parcerias em expansão"} texto={"A cada semana, novas clinicas veterinarias e petshop são adicionado a nossa rede de parceiros com ofertas exclusivas."} />
                    <CardVantagens className={"bg-amber-200"} titulo={"Localização inteligente"} texto={"Encontre clinicas de atendimento proxímas da sua casa, facilitando o acessos aos melhores serviços para seu pet."} />
                    <CardVantagens className={"bg-lime-200"} titulo={"Beneficio por assinatura"} texto={"Assinando o Bem Pet,você automaticamente tem acesso a deversos beneficíos exclusivos"} />
                </div>
                <div className="w-full h-[50px] flex items-center justify-center  mt-8">
                    
                        <button
                            type="submit"
                            className="flex-row  flex items-center justify-center w-[15%] h-[50px] text-white font-bold bg-[#215f1f] mt-12 text-[20px] rounded-full
                            cursor-pointer hover:bg-[#1a4f1a] focus:outline-none">
                            <TbPawFilled className=" gap-2"/>
                            <p className="p-6">Assinar</p>
                            <TbPawFilled className=""/>
                                </button>

                </div>
            </div>

        </PageWrapper>
    )
}