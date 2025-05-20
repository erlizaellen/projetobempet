import { TbPawFilled } from "react-icons/tb";

export default function Paw({}){
    return (

                <div className=" flex flex-col items-center justify-center relative  rounded-full cursor-pointer">
                    <TbPawFilled className="text-[#215f1f] w-[180px] h-[180px]"/>
                    <p className="font-bold absolute text-white bottom-10">Quem somos</p>
                </div>
    )
}