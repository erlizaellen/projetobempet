
export default function CardVantagens({ texto, titulo, className }) {
    return (
        <div className="w-[50%] h-full flex">
            <div className={`w-[80%] h-[150px] flex flex-col ml-20 bg-[#ffc0cb] rounded-lg mt-10 ${className}`}>
                <h1  className="font-bold text-[20px] ml-6 mt-4">{titulo}</h1>
                <p className="font-sm text-[20px] ml-6 mt-3">
                    {texto}
                </p>
            </div>
        </div>
    )
}