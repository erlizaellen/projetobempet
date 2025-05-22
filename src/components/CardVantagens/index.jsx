import { useState } from "react"


export default function CardVantagens({ texto, titulo, className, item1, item2, item3}) {
    const [hover, setHover] = useState(false)

    return (
        <div className="w-[50%] max-md:w-full  h-full flex">
            <div
                onMouseOver={ () => setHover(true)}
                onMouseOut={() => setHover(false)}
                className={`relative hover:shadow-md overflow-hidden w-[80%]   flex flex-col ml-20 max-md:ml-2 rounded-lg mt-10 ${className}`}>
                <div className={`${hover ? "w-[90px] h-[90px]" : "w-[80px] h-[80px]"} rounded-full transition-all ease-in-out duration-300 bg-[#0000003b] absolute top-[-30px] right-[-40px]`}></div>
                <h1  className="font-bold text-[20px] ml-4 flex justify-center max-w-[60%]  mt-4 bg-amber-100 px-4 rounded-full">{titulo}</h1>
                <p className="font-sm text-[20px] ml-6 mt-3">
                    {texto}
                </p>
                <ul>
                    <li className="font-sm text-[20px] ml-6 mt-3">{item1}</li>
                    <li className="font-sm text-[20px] ml-6 mt-3">{item2}</li>
                    <li className="font-sm text-[20px] ml-6 mt-3">{item3}</li>
                </ul>
                <div className={`${hover ? "w-[80px] h-[80px]" : "w-[70px] h-[70px]"} rounded-full transition-all ease-in-out duration-300 bg-[#0000003b] absolute bottom-[-30px] left-[-40px]`}></div>
            </div>
        </div>
    )
}