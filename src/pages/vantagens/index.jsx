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

                    <CardVantagens titulo={"Tudo para seu Pet"} texto={"Rações e acessórios que seus pets vão adorar. Petshops afiliados na sua região."} />
                    <CardVantagens className={"bg-blue-200 bg"} titulo={"Parcerias em expansão"} texto={"A cada semana, novas clínicas veterinárias e petshop são adicionado a nossa rede de parceiros com ofertas exclusivas."} />
                    <CardVantagens className={"bg-amber-200"} titulo={"Localização inteligente"} texto={"Encontre clínicas de atendimento próximas da sua casa, facilitando o acessos aos melhores serviços para seu pet."} />
                    <CardVantagens className={"bg-lime-200"} titulo={"Benefício por assinatura"} texto={"Assinando o Bem Pet,você automaticamente tem acesso a deversos benefícios exclusivos"} />
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