import CardVantagens from "@/components/CardVantagens";
import PageWrapper from "@/components/PageWrapper";

export default function vantagens() {
    return (
        <PageWrapper>
            <div className="w-full p-8 text-center">
                <h1 className="text-[50px] font-bold text-[#215f1f]">Vantagens</h1>
                <p className="mb-8 text-[25px] font-bold text-[#215f1f]/70">conheça os todos beneficios execlusivos que preparamos
                    para você e seu pet. <br /> Uma experiência para garantir o maior cuidado.</p>
            </div>
          <div className="w-full h-full flex flex-wrap">
            
            <CardVantagens titulo={"Tudo para seu Pet"} texto={"rações e acessórios que seus pets vão adorar. Petshops afiliados na região."}/>
            <CardVantagens className={"bg-blue-200"} titulo={"Parcerias em expansão"} texto={"A cada semana, novas clinicas veterinarias e petshop são adicionado a nossa rede de parceiros com ofertas exclusivas."}/>
            <CardVantagens  className={"bg-amber-200"} titulo={"Localização inteligente"} texto={"Encontre clinicas de atendimento proxímas da sua casa, facilitando o acessos aos melhores serviços para seu pet."}/>
            <CardVantagens className={"bg-lime-200"} titulo={"Beneficio por assinatura"} texto={"Assinando o Bem Pet,você automaticamente tem acesso a deversos beneficíos exclusivos"}/>
        </div>
        </PageWrapper>
    )
}