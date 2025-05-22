export default function CardModalPass({ onClose }){
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#ffffff5e] bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl border-tranparent w-[350px] relative ">

          <button
           className="absolute top-2 right-3 text-gray-400 hover:text-black text-xl"
          >
          </button>
  
          <h2 className="text-xl font-bold text-center mb-1">Esqueceu sua senha?</h2>
          <p className="text-center text-sm text-gray-600 mb-5">
            Lembra da sua senha?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Faça login aqui
            </a>
          </p>
  
          <label htmlFor="email" className="block font-semibold mb-1">
            Endereço de email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-900"
            placeholder="seu@email.com"
          />
  
          <button
            className="w-full bg-green-900 text-white font-semibold py-2 rounded-md transition cursor-pointer"
          >
            Redefinir senha
          </button>
          <button
            onClick={onClose}
            className=" w-full cursor-pointer underline"
          >
            Cancelar</button>
        </div>
      </div>
    )
}
