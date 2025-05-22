import PageWrapper from "@/components/PageWrapper";
import CustomInput from "@/components/CustomInput";
import { useState } from "react";
import Link from "next/link";


export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState(0);

    console.log(nome)
    console.log(email)
    console.log(senha)

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await instance.post( "", {
                nome: nome,
                email: email,
                senha: senha,
            })

            toast.success("Cadastro realizado com sucesso!")
            setNome("");
            setEmail("");
            setSenha(0);

        } catch (error) {
            console.error(error)
            toast.error("Erro ao cadastrar!")
        }
    }

    return (
        <PageWrapper showButton={false}>
            <div className="w-full h-full flex gap-40 p-40 max-md:p-0">
                <div className="w-[60%] flex items-center max-md:hidden">
                    <img src="/img/imagem-cadastro.svg" alt="imagem-cadstro" />
                </div>
                <div className="w-[50%] h-[70vh] rounded-xl max-md:w-full">
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
                                (event) => setSenha(event.target.value)
                            }
                        />
                        <div className="w-full h-[60%] justify-center flex-col items-center max-sm:h-[50%] flex max-md:h-auto">
                            <button 
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
