import { useState } from "react"

export default function CardVantagens({ texto, titulo, className }) {
    const [hover, setHover] = useState(false)

    return (
        <div className="w-[50%] h-full flex">
            <div
                onMouseOver={ () => setHover(true)}
                onMouseOut={() => setHover(false)}
                className={`relative hover:shadow-md overflow-hidden w-[80%] h-[150px] flex flex-col ml-20 bg-[#ffc0cb] rounded-lg mt-10 ${className}`}>
                <div className={`${hover ? "w-[90px] h-[90px]" : "w-[80px] h-[80px]"} rounded-full transition-all ease-in-out duration-300 bg-[#0000003b] absolute top-[-30px] right-[-40px]`}></div>
                <h1  className="font-bold text-[20px] ml-4 flex justify-center  mt-4 bg-amber-100 w-[40%] rounded-full">{titulo}</h1>
                <p className="font-sm text-[20px] ml-6 mt-3">
                    {texto}
                </p>
                <div className={`${hover ? "w-[80px] h-[80px]" : "w-[70px] h-[70px]"} rounded-full transition-all ease-in-out duration-300 bg-[#0000003b] absolute bottom-[-30px] left-[-40px]`}></div>
            </div>
        </div>
    )
}