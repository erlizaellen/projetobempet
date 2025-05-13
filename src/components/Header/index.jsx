import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Header(){
    return(
        <div className="w-full h-screen flex">
            <div className="w-full h-[80px] bg-[#5bf356c2] flex">
                <div className="w-[20%]">
                   <div className="w-[90px] h-[70px] ml-8">
                    <img src= "/bempetlogo.png" alt="" />
                   </div>
                </div>   
                <div className="w-[50%] h-[70px]  items-center flex gap-2 justify-center">
                    <div className="w-[10%] ">
                    <HiMagnifyingGlass className="w-[40px] h-[30px]"/>
                    </div>
                    <input className="w-[450px] h-[40px] rounded-md hover:bg-[#d8e4dbc9] bg-[#7ecb7c] justify-center items-center"/>
                </div>
                  <div className="w-[70%] h-[70px] flex items-center justify-end  gap-8 mr-20">
                    <button className="w-[120px] h-[50px]  rounded-md hover:bg-[#7ecb7c] text-[20px] font-bold text-[#215f1f]">Login</button>
                    <button className="w-[120px] h-[50px]  rounded-md hover:bg-[#7ecb7c] text-[20px] font-bold text-[#215f1f]" >Cadastro</button>
                    <button className="w-[120px] h-[50px]  rounded-md hover:bg-[#7ecb7c] text-[20px] font-bold text-[#215f1f]">Assinatura</button> 
                    <button className="w-[120px] h-[50px]  rounded-md hover:bg-[#7ecb7c] text-[20px] font-bold text-[#215f1f]">Vantagens</button>
                  </div> 
            </div>


        </div>
    )
}