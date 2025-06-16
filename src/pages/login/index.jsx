
import CardModalPass from "@/components/CardModalPass";
import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {
   const [cardModalPass, setCardModalPass] = useState(false);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState ("");

  function handleLogin(event){
    event.preventDefault()
   if(!email || !senha){
        return toast.error("Preencher todos os campos!")
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
        return toast.error("e-mail inválido");
    }

    if (senha.length < 8) {
         return toast.error("Senha inválida mínimo 8 caracteres");
    }

    toast.success("Login realizado com sucesso!");

    }

  return(

    <PageWrapper>
      <ToastContainer 
        position="top-right" 
        autoClose={5000}
        theme="colored"
       />

      <div className="w-full h-full flex">
        {/* Container da direita com imagem */}
        <div className="w-[50%] flex items-center justify-center ml-20 max-md:hidden">
          <img src="/img/loginfoto.png" alt="desenho" />
        </div>

        {/* Container da esquerda */}
        <div className="w-[600px] h-[100%] flex flex-col mt-8 ml-10 rounded-xl p-8 max-md:w-full max-md:ml-0 max-md:mt-0">
          <div className="w-full h-[100px] flex items-center justify-center mb-8">
            <h1 className="font-bold text-[30px] text-white">Login</h1>
          </div>

          {/* Formulário de login */}
          <form
          onSubmit={handleLogin}
          className="flex flex-col gap-8">
            <div>
              <label
                htmlFor="email"
                className="font-bold text-[20px] text-white"
              >
                E-mail
              </label>
              <input
                onChange={(event)=> setEmail(event.target.value)}
                value={email}
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
                onChange={(event)=> setSenha(event.target.value)}
                value={senha}
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
                className="text-[#215f1f] font-bold text-[20px] cursor-pointer  border-4 rounded-3xl w-[150px]"
              >
                Entrar
              </button>
              <p 
                 onClick={() => setCardModalPass(true)}
                className="text-[#215f1f] text-[15px]  mt-4 flex flex-col items-center cursor-pointer underline">
                Esqueceu sua senha?
              </p>
              <Link href="/cadastro" className="text-[#215f1f] text-[15px] mt-3 cursor-pointer underline">Já possui cadastro?</Link>
            </div>
           
          </form>
        </div>

        {cardModalPass && <CardModalPass onClose={() => setCardModalPass(false)}/>}
      </div>
    </PageWrapper >
  );
}
