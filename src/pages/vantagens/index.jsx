import PageWrapper from "@/components/PageWrapper";
import { FaPix } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";

export default function vantagens() {
    return(
        <PageWrapper>
        <div className="w-full h-auto flex justify-center">
            <div className="w-[400px] h-auto flex flex-col items-center rounded-xl bg-white p-5">
                <div className="w-full h-[20%]] flex px-4 gap-3 mb-4">
                    <button className="w-[50%] h-[40px] flex justify-center items-center gap-3 rounded-md border bg-[#5bf356c2]">
                        <FaRegCreditCard />
                        <p>Cartão</p>
                        </button>
                    <button className="w-[50%] h-[40px] flex justify-center items-center gap-3 rounded-md border bg-[#5bf356c2]">
                        <FaPix />
                        <p>Pix</p>  
                    </button>
                </div>
                <div className="w-full h-[80%]">
                    <div className="w-full flex flex-col">
                        <label className="text-[20px]">
                            Nome no cartão
                        </label>
                        <input
                            type="text"
                            placeholder="Fulano de Tal"
                            className="w-full h-[40px] rounded-md bg-[#eeeeee] pl-2"
                        />
                    </div>
                    <div>
                    <label className="text-[20px]">
                            Número do cartão
                        </label>
                        <input
                            type="text"
                            placeholder="0123 4567 8910 1112"
                            className="w-full h-[40px] rounded-md bg-[#eeeeee] pl-2"
                        />
                    </div>
                    <div className="w-full flex flex-row">
                        <div className="w-[70%] pr-2">
                        <label className="text-[20px]">
                            Expiração
                        </label>
                        <div className="flex flex-row gap-2">
                            <input 
                                type="number" 
                                placeholder="00"
                                className="w-full h-[40px] rounded-md bg-[#eeeeee] pl-2"
                            />
                            <input
                                type="number"
                                placeholder="00"
                                className="w-full h-[40px] rounded-md bg-[#eeeeee] pl-2"
                            />
                        </div>
                        </div>
                        <div className="w-[30%]">
                        <label className="text-[20px]">
                            CVV
                        </label>
                        <input
                                type="number"
                                placeholder="000"
                                className="w-full h-[40px] rounded-md bg-[#eeeeee] pl-2"
                            />
                        </div>
                    </div>
                </div>
                
                
            </div>

        </div>
        </PageWrapper>
    )
}