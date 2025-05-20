import PageWrapper from "@/components/PageWrapper";
export default function Cadastro() {
  return (
    <PageWrapper>
      <div className="w-full h-full flex gap-40 p-40 max-md:p-0">
            <div className="w-[50%] h-[70vh] rounded-xl max-md:hidden">
          <img className="size-160" src="/img/imagem-cadastro.svg" alt="" />
            </div>
            <div className="w-[50%] h-[70vh] rounded-xl max-md:w-full">
          <div className="w-full h-[10%] rounded-2xl">
            <h1 className="font-bold text-white text-[30px] justify-center flex">Cadastre-se</h1>
          </div>
            <div className="w-full h-[60%] rounded-xl flex flex-col">
            <label className="text-white font-bold text-[20px] p-4">Nome</label>
            <input
              placeholder="Digite o seu nome"
              type="text"
              className="w-[90%] h-[30px] bg-white p-5 m-2 rounded-3xl"
            />
            <label className="text-white font-bold text-[20px] p-4">Email</label>
            <input
              placeholder="Digite seu e-mail"
              type="email"
              className="w-[90%] h-[30px] bg-white p-5 m-2 rounded-3xl"
            />
            <label className="text-white font-bold text-[20px] p-4">Senha</label>
            <input
              placeholder="Digite sua senha"
              type="password"
              className="w-[90%] h-[30px] bg-white p-5 m-2 rounded-3xl"
            />
          </div>
            <div className="w-full h-[60%] justify-center flex-col items-center flex max-md:h-auto">
            <button className="text-white max-md:text-[#215f1f] font-bold text-[20px] cursor-pointer 
             border-4 rounded-3xl w-[150px]">Cadastrar</button>
        <p className="text-white text-[15px] flex flex-col items-center max-md:text-[#215f1f] max-md:font-bold">Já tem uma conta?
              <a className="cursor-pointer" href="">Entrar</a>
            </p>
          </div>
        </div>
            </div>
    </PageWrapper>
  );
}
