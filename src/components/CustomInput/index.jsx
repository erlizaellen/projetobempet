export default function CustomInput({label, placeholder, type, onChange}){
    return (
        <div className="flex flex-col w-full gap-2">
            <label className="text-white font-bold text-[20px] p-4">{label}</label>
            <input
                className="w-[90%] h-[30px] bg-white p-5 m-2 rounded-3xl"
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}