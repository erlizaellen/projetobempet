import PageWrapper from "@/components/PageWrapper";
import CustomInput from "@/components/CustomInput";
import { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import instance from "@/api/instance";

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState(0);
    

    function formatSenha(evento){
        let senha = evento.target.value
        let numeroFormatado = senha.replace(/\D/g, '') // Remove tudo que não for número
        numeroFormatado = numeroFormatado.substring(0, 8) // Limita a 8 Dígitos
        setSenha(numeroFormatado)
      }

      async function cadastrar(event){
        event.preventDefault()
        if(!nome || !email || !senha){
          return toast.error("Todos os campos precisam ser preenchidos corretamente!")
        }

        if(!/\S+\.\S+/.test(email)) {
            return toast.error("Seu email está inválido!")
        }

        if(senha.length < 8){
            return toast.error("Senha inválida! Sua senha precisa conter no minímo 8 digítos")
          }

          try {
                const resposta = await instance.post('/users', {
                    name: nome,
                    email: email,
                    password: senha
                })

                const data = await resposta.data
                if(data){
                    toast.success("Usuário cadastrado com sucesso!")
                }
            
        } catch (error) {
            return toast.error("Erro ao cadastrar, verifique os campos preenchidos!")
        }
      }

    return (
        <PageWrapper showButton={false}>
            <div className="w-full h-full flex gap-40 p-40 max-md:p-0 max-md:block"> 
            <ToastContainer 
            position="top-right"
            autoClose={5000}
            theme="colored"
            />
        <div className="w-[60%] flex items-center max-sm:hidden max-md:hidden">
                    <img src="/img/imagem-cadastro.svg" alt="imagem-cadstro" />
                </div>
                <div className="w-[50%] h-[70vh] rounded-xl max-md:w-full ">
                    <div className="w-full h-[10%] rounded-2xl">
                        <h1 className="font-bold text-white text-[30px] justify-center flex">Cadastre-se</h1>
                    </div>
                    <form className="w-full h-[60%] rounded-xl flex flex-col">
                        <CustomInput
                            label="Nome"
                            value={nome}
                            placeholder="Digite o seu nome"
                            type="text"
                            onChange={
                                (event) => setNome(event.target.value)
                            }
                             />

                        <CustomInput
                            label="Email"
                            value={email}
                            placeholder="Digite seu e-mail"
                            type="email"
                            onChange={
                                (event) => setEmail(event.target.value)
                            }
                        />

                        <CustomInput
                            label="Senha"
                            value={senha}
                            placeholder="Digite sua senha"
                            type="password"
                            onChange={
                                formatSenha
                            }
                        />
                        <div className="w-full h-[60%] justify-center flex-col items-center max-sm:h-[50%] flex max-md:h-auto">
                            <button 
                            onClick={cadastrar}
                            className="text-[#215f1f] font-bold text-[20px] cursor-pointer 
                            border-4 rounded-3xl w-[150px]">Cadastrar</button>
                            <p className="text-[#215f1f] text-[15px] flex flex-col items-center font-bold">Já tem uma conta?
                                <Link 
                                className="cursor-pointer" 
                                href="/login">Entrar</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </PageWrapper>
    );
}
