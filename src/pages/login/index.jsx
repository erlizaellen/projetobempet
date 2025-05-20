import PageWrapper from "@/components/PageWrapper";

export default function Login() {
  return (
    <PageWrapper>

      <div className="w-full h-full flex">

        {/* Container da direita com imagem */}
        <div className="w-[50%] flex items-center justify-center ml-20 ">
          <img src="/img/loginfoto.png" alt="desenho" />
        </div>

        {/* Container da esquerda */}
        <div className="w-[600px] h-[100vh] flex flex-col mt-8 ml-10 rounded-xl p-8">
          <div className="w-full h-[100px] flex items-center justify-center mb-8">
            <h1 className="font-bold text-[30px] text-white">Login</h1>
          </div>

          {/* Formulário de login */}
          <form className="flex flex-col gap-8">
            <div>
              <label
                htmlFor="email"
                className="font-bold text-[20px] text-white"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                className="w-[90%] h-[30px] bg-white p-5 m-2 rounded-3xl"
              />
            </div>

            {/* Campo de senha */}
            <div>
              <label
                htmlFor="senha"
                className="font-bold text-[20px] text-white"
              >
                Senha
              </label>
              <input
                id="senha"
                type="password"
                placeholder="Digite sua senha"
                className="w-[90%] h-[30px] bg-white p-5 m-2 rounded-3xl"
              />
            </div>

            {/* Botão de login */}
            <div className="w-full h-[40%] justify-center flex-col items-center flex">
              <button
                type="submit"
                className="text-white font-bold text-[20px] cursor-pointer  border-4 rounded-3xl w-[150px]"
              >
                Entrar
              </button>
              <p className="text-white text-[15px] flex flex-col items-center cursor-pointer">
                Esqueceu sua senha?
              </p>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}
