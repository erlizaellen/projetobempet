import PageWrapper from "@/components/PageWrapper";
import { FaPix } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";
import { TbPawFilled } from "react-icons/tb";
import { LuPawPrint } from "react-icons/lu";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";


export default function assinatura() {
    const [opcao, setOpcao] = useState("Cartao")
    const [nome, setNome] = useState("")
    const [numero, setNumero] = useState("")
    const [mes, setMes] = useState(0)
    const [ano, setAno] = useState(0)
    const [cvv, setCvv] = useState(0)

    function formatNumero(evento) {
        let numero = evento.target.value
        let numeroFormatado = numero.replace(/\D/g, '') //Remove tudo que nao for numero
        numeroFormatado = numeroFormatado.substring(0, 16) //Limita a quantidade de caracteres a 16
        numeroFormatado = numeroFormatado.replace(/(\d{4})/g, '$1 ').trim() //cria espaçamento de 4 em 4 digitos
        setNumero(numeroFormatado)
  }

    async function pagar() {
        if (opcao == "Pix") {
            return toast.error("Indisponível para esta opção de pagamento");
        }
        if (!nome || !numero || !mes || !ano || !cvv) {
            return toast.error("Preencha todos os campos");
        }
        if (numero.replace(/\s/g, '').length !== 16) {
            return toast.error("Numero do cartao inválido");
        }
        if (cvv.length !== 3) {
            return toast.error("CVV inválido");
        }
        if (ano.length != 2) {
            return toast.error("Ano de expiração inválido");
        }
        if (mes > 12 || mes < 1) {
            return toast.error("Mês de expiração invalido");
        }

    
    try {
        return toast.success("Pagamento realizado com sucesso");
    } catch (error) {
        return toast.error("Erro ao processar o pagamento");
    }
    }
    

    return(
        <PageWrapper>
        <div className="w-full h-auto flex justify-center">
            <ToastContainer position="top-right" autoClose={5000} theme="colored" />
            <div className="w-[400px] h-auto flex flex-col items-center rounded-xl bg-white p-5 gap-3">
                <div className="w-full flex justify-between items-center text-[#215f1f] mb-4 gap-3 text-[40px] font-bold">
                    <p>Valor:</p>
                    <p>R$9,90</p>
                </div>
                <div className="flex justify-center items-center text-[#215f1f] mb-2 gap-3">
                    <TbPawFilled size={22}/>
                    <h1 className="text-[22px]">Escolha opção de pagamento</h1>
                    <TbPawFilled size={22}/>
                </div>
                <div className="w-full h-[20%]] flex gap-3">
                    <button 
                        onClick={() => setOpcao('Cartao')}
                        className="w-[50%] h-[40px] flex justify-center items-center gap-3 rounded-md border border-[#215f1f] bg-[#5bf356c2] cursor-pointer hover:bg-[#5bf356c2]/80">
                        <FaRegCreditCard size={20} className="text-[#215f1f]"/>
                        <p className="text-[20px] font-bold text-[#215f1f]">Cartão</p>
                        </button>
                    <button 
                        onClick={() => setOpcao('Pix')}
                        className="w-[50%] h-[40px] flex justify-center items-center gap-3 rounded-md border border-[#215f1f] bg-[#5bf356c2] cursor-pointer hover:bg-[#5bf356c2]/80">
                        <FaPix size={20} className="text-[#215f1f]"/>
                        <p className="text-[20px] font-bold text-[#215f1f]">Pix</p>  
                    </button>
                </div>
                {
                    opcao == "Cartao" ? (
                        <div className="w-full h-[80%]">
                        <div className="w-full flex flex-col pb-3">
                            <label className="text-[20px] font-bold text-[#215f1f]">
                                Nome no cartão
                            </label>
                            <input
                                onChange={(event) => setNome(event.target.value)}
                                type="text"
                                placeholder="Fulano de Tal"
                                className="w-full h-[40px] rounded-md bg-[#eeeeee] hover:bg-[#ADEEAB] pl-2"
                            />
                        </div>
                        <div className="w-full flex flex-col pb-3">
                        <label className="text-[20px] font-bold text-[#215f1f]">
                                Número do cartão
                            </label>
                            <input
                                onChange={(event) => formatNumero(event)}
                                value={numero}
                                type="text"
                                placeholder="0123 4567 8910 1112"
                                className="w-full h-[40px] rounded-md bg-[#eeeeee] hover:bg-[#ADEEAB] pl-2"
                            />
                        </div>
                        <div className="w-full flex flex-row pb-3">
                            <div className="w-[70%] pr-2">
                            <label className="text-[20px] font-bold text-[#215f1f]">
                                Expiração (MM/AA)
                            </label>
                            <div className="flex flex-row gap-2">
                                <input 
                                    onChange={(event) => setMes(event.target.value)}
                                    type="number" 
                                    placeholder="MM"
                                    className="w-full h-[40px] rounded-md bg-[#eeeeee] hover:bg-[#ADEEAB] pl-2"
                                />
                                <input
                                    onChange={(event) => setAno(event.target.value)}
                                    type="number"
                                    placeholder="AA"
                                    className="w-full h-[40px] rounded-md bg-[#eeeeee] hover:bg-[#ADEEAB] pl-2"
                                />
                            </div>
                            </div>
                            <div className="w-[30%]">
                            <label className="text-[20px] font-bold text-[#215f1f]">
                                CVV
                            </label>
                            <input
                                    onChange={(event) => setCvv(event.target.value)}
                                    type="number"
                                    placeholder="000"
                                    className="w-full h-[40px] rounded-md bg-[#eeeeee] hover:bg-[#ADEEAB] pl-2"
                                />
                            </div>
                        </div>
                    </div>
      
                    ) :
                    (     

                        <div className="w-full h-[80%] break-words">
                            <div className="flex flex-row justify-center items-center text-[#215f1f] mb-4 gap-3">
                
                                <h2 className="text-[20px] font-semibold">Scaneie ou copie o codigo para efetuar o pagamento no seu app de banco.</h2>
                                
                
                            </div>
                            <img src="/img/QRCode.jpeg"alt="" />
                            <a href="url" target="blank" className="max-w-[300px] underline text-[#808cffcc] hover:text-[#434a8acc]">00020126430014br.gov.bcb.pix0114+55859964602000203Pix5204000053039865802BR5921RAMIRO SILVA PINHEIRO6009FORTALEZA622905258qbcECvUnn2ibV5j47CbzoBEx63042143</a>
                        </div>
                    )
                    
                }              
                <div className="w-full h-[40px] flex justify-center items-center">
                    <button 
                        onClick={pagar}
                        className="w-full h-[40px] flex justify-center items-center gap-3 rounded-md border border-[#215f1f] bg-[#5bf356c2] text-[20px] font-bold text-[#215f1f] cursor-pointer hover:bg-[#5bf356c2]/80">
                        Efetuar pagamento
                        <LuPawPrint />
                    </button>   

                </div>
                
            </div>

        </div>
        </PageWrapper>

    )
}
