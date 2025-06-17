import CardModalPass from "@/components/CardModalPass";
import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import instance from "@/api/instance";

export default function Login() {
  const [cardModalPass, setCardModalPass] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  async function handleLogin(event) {
    event.preventDefault();

    if (!email || !senha) {
      return toast.error("Preencher todos os campos!");
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return toast.error("E-mail inválido");
    }

    if (senha.length < 8) {
      return toast.error("Senha inválida. Mínimo 8 caracteres");
    }

    try {
      const response = await instance.post("/loginn", {
        email: email,
        password: senha,
      });

      const data =  response.data;

      console.log(response);

      // Salvar o token no localStorage
      localStorage.setItem("token", data.token);

      toast.success("Login realizado com sucesso!");

      // Redirecionar para a rota privada
      router.push("/page-usuario");
    } catch (error) {
      if (error.response && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Erro ao realizar login");
      }
    }
  }

  return (
    <PageWrapper>
      <ToastContainer position="top-right" autoClose={5000} theme="colored" />

      <div className="w-full h-full flex">
        {/* Imagem da direita */}
        <div className="w-[50%] flex items-center justify-center ml-20 max-md:hidden">
          <img src="/img/loginfoto.png" alt="desenho" />
        </div>

        {/* Formulário da esquerda */}
        <div className="w-[600px] h-[100%] flex flex-col mt-8 ml-10 rounded-xl p-8 max-md:w-full max-md:ml-0 max-md:mt-0">
          <div className="w-full h-[100px] flex items-center justify-center mb-8">
            <h1 className="font-bold text-[30px] text-white">Login</h1>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-8">
            <div>
              <label htmlFor="email" className="font-bold text-[20px] text-white">
                E-mail
              </label>
              <input
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                className="w-[90%] h-[30px] bg-white p-5 m-2 rounded-3xl"
              />
            </div>

            <div>
              <label htmlFor="senha" className="font-bold text-[20px] text-white">
                Senha
              </label>
              <input
                onChange={(event) => setSenha(event.target.value)}
                value={senha}
                id="senha"
                type="password"
                placeholder="Digite sua senha"
                className="w-[90%] h-[30px] bg-white p-5 m-2 rounded-3xl"
              />
            </div>

            <div className="w-full h-[40%] justify-center flex-col items-center flex">
              <button
                type="submit"
                className="text-[#215f1f] font-bold text-[20px] cursor-pointer border-4 rounded-3xl w-[150px]"
              >
                Entrar
              </button>
              <p
                onClick={() => setCardModalPass(true)}
                className="text-[#215f1f] text-[15px] mt-4 flex flex-col items-center cursor-pointer underline"
              >
                Esqueceu sua senha?
              </p>
              <Link
                href="/cadastro"
                className="text-[#215f1f] text-[15px] mt-3 cursor-pointer underline"
              >
                Já possui cadastro?
              </Link>
            </div>
          </form>
        </div>

        {cardModalPass && <CardModalPass onClose={() => setCardModalPass(false)} />}
      </div>
    </PageWrapper>
  );
}
