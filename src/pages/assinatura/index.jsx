import PageWrapper from "@/components/PageWrapper";
import { FaPix } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";
import { TbPawFilled } from "react-icons/tb";
import { LuPawPrint } from "react-icons/lu";



export default function assinatura() {
    return(
        <PageWrapper>
        <div className="w-full h-auto flex justify-center">
            <div className="w-[400px] h-auto flex flex-col items-center rounded-xl bg-white p-5 gap-3">
                <div className="flex justify-center items-center text-[#215f1f] mb-4 gap-3">
                <TbPawFilled size={20}/>
                <h1 className="text-[20px] font-bold">Escolha opção de pagamento</h1>
                <TbPawFilled size={20}/>
                </div>
                <div className="w-full h-[20%]] flex gap-3 mb-4">
                    <button className="w-[50%] h-[40px] flex justify-center items-center gap-3 rounded-md border border-[#215f1f] bg-[#5bf356c2] cursor-pointer hover:bg-[#5bf356c2]/80">
                        <FaRegCreditCard size={20} className="text-[#215f1f]"/>
                        <p className="text-[20px] font-bold text-[#215f1f]">Cartão</p>
                        </button>
                    <button className="w-[50%] h-[40px] flex justify-center items-center gap-3 rounded-md border border-[#215f1f] bg-[#5bf356c2] cursor-pointer hover:bg-[#5bf356c2]/80">
                        <FaPix size={20} className="text-[#215f1f]"/>
                        <p className="text-[20px] font-bold text-[#215f1f]">Pix</p>  
                    </button>
                </div>
                <div className="w-full h-[80%]">
                    <div className="w-full flex flex-col">
                        <label className="text-[20px] font-bold text-[#215f1f]">
                            Nome no cartão
                        </label>
                        <input
                            type="text"
                            placeholder="Fulano de Tal"
                            className="w-full h-[40px] rounded-md bg-[#eeeeee] hover:bg-[#ADEEAB] pl-2"
                        />
                    </div>
                    <div>
                    <label className="text-[20px] font-bold text-[#215f1f]">
                            Número do cartão
                        </label>
                        <input
                            type="text"
                            placeholder="0123 4567 8910 1112"
                            className="w-full h-[40px] rounded-md bg-[#eeeeee] hover:bg-[#ADEEAB] pl-2"
                        />
                    </div>
                    <div className="w-full flex flex-row">
                        <div className="w-[70%] pr-2">
                        <label className="text-[20px] font-bold text-[#215f1f]">
                            Expiração
                        </label>
                        <div className="flex flex-row gap-2">
                            <input 
                                type="number" 
                                placeholder="00"
                                className="w-full h-[40px] rounded-md bg-[#eeeeee] hover:bg-[#ADEEAB] pl-2"
                            />
                            <input
                                type="number"
                                placeholder="00"
                                className="w-full h-[40px] rounded-md bg-[#eeeeee] hover:bg-[#ADEEAB] pl-2"
                            />
                        </div>
                        </div>
                        <div className="w-[30%]">
                        <label className="text-[20px] font-bold text-[#215f1f]">
                            CVV
                        </label>
                        <input
                                type="number"
                                placeholder="000"
                                className="w-full h-[40px] rounded-md bg-[#eeeeee] hover:bg-[#ADEEAB] pl-2"
                            />
                        </div>
                    </div>
                </div>
                
                <button className="w-[100%] h-[50px] flex justify-center items-center gap-3 rounded-md border border-[#215f1f] bg-[#5bf356c2] text-[20px] font-bold text-[#215f1f] cursor-pointer hover:bg-[#5bf356c2]/80">
                    Efetuar pagamento
                    <LuPawPrint />
                </button>
            </div>

        </div>
        </PageWrapper>

    )
}
