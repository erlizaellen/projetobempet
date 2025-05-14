import PageWrapper from "@/components/PageWrapper";


export default function Login() {
    return(
        <PageWrapper>
      <div className="w-full h-full flex">
  {/* Container da esquerda */}
  <div className="w-[600px] h-[90vh] flex flex-col mt-8 ml-10 rounded-xl p-8">
    <div className="w-full h-[100px] flex items-center justify-center mb-8">
      <h1 className="font-bold text-[40px] text-[#215f1f]">LOGIN</h1>
    </div>

    {/* Formulário de login */}
    <form className="flex flex-col gap-8">
      <div>
        <label htmlFor="email" className="font-bold text-[20px] text-[#215f1f]">E-mail</label>
        <input   
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          className="w-full p-3 mt-2 border bg-[#efe7d2] border-gray-300 rounded-lg focus:outline-none focus:ring-[#215f1f] focus:border-[#215f1f]"/>
      </div>

      {/* Campo de senha */}
      <div>
        <label htmlFor="senha" className="font-bold text-[20px] text-[#215f1f]">Senha</label>
        <input
          id="senha"
          type="password"
          placeholder="Digite sua senha"
          className="w-full p-3 mt-2 border bg-[#efe7d2] border-gray-300 rounded-lg focus:outline-none focus:ring-[#215f1f] focus:border-[#215f1f]"/>
      </div>

      {/* Botão de login */}
      <div>
        <button
          type="submit"
          className="w-full p-3 mt-4 bg-[#215f1f] text-white font-bold rounded-lg hover:bg-[#1a4f1a] focus:outline-none focus:ring-2 focus:ring-[#215f1f]">Entrar</button>
      </div>

      <p className="text-center mt-3 text-[20px] text-[#215f1f] cursor-pointer hover:text-[#1a4f1a]">Esqueceu sua senha?</p>
    </form>
  </div>
  
  {/* Container da direita com imagem */}
  <div className="w-[50%] h-[90vh] flex items-center justify-center ml-20 ">
    <img
     src="/img/loginfoto.png" alt="desenho"/>
  </div>
</div>

  </PageWrapper>
    )
}