import { useEffect, useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import CardAddPet from "@/components/CardAddPet";
import { useRouter } from "next/router";
import instance from "@/api/instance";
import { toast ,ToastContainer } from "react-toastify";



export default function PageUsuario() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [user, setUser] = useState({})
  const [pets, setPets] = useState([])
  const [phone, setPhone] = useState('')
  const router = useRouter();
  const { id } = router.query;



  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.warn("Token não encontrado. Redirecionando para login.");
      router.push("/login");
      return;
    }

    async function getUserData() {
      const response = await instance.get("/userprofile")
      setUser(response.data)
    }

    async function getPetsUser() {
      const response = await instance.get("/userpets")
      setPets(response.data)
    }

    getUserData()
    getPetsUser()
  }, [id, router]);

  async function updateUser() {
    try {
      const res = await instance.put(`/users/${user.id}`, {
        telefone: phone
      })
      
      toast.success("Telefone atualizado com sucesso!");
    } catch (error) {
      console.log(error)
      return toast.error("pedo");
    }
  }

  return (
    <PageWrapper>
      <ToastContainer position="top-right" autoClose={5000} theme="colored" />
      
      <div className="w-full h-[350px] flex flex-col items-center justify-center max-md:hidden">
       
        <h1 className="text-[40px] font-bold text-green-900">
          Bem vindo ao seu perfil!
        </h1>
        <p className="text-[20px] font-bold text-green-900">
          Aqui você pode atualizar suas informações pessoais
        </p>
      </div>

      {/* Dados do Usuário */}
      <div className="w-full flex flex-col bg-green-100 rounded-xl p-6 mt-10 shadow-md">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-green-900 font-bold text-xl">Dados do Usuário</p>
            <p className="text-green-800">Informações do tutor:</p>
          </div>
          <button
            onClick={updateUser}
            className="bg-white border border-green-700 text-green-700 px-4 py-1 rounded hover:bg-green-50">
            Editar
          </button>
        </div>

        <div className="flex items-center mb-6">
          <div className="w-[50px] h-[50px] rounded-full bg-gray-300 mr-4"></div>
          <div className="flex flex-col">
            <p className="text-green-900 font-bold text-lg">{user.name}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col bg-green-50 p-4 rounded w-full">
            <label className="text-sm mb-1 text-green-700">Email</label>
            <p
              className="p-2 rounded border border-green-300 outline-none"
            >
              {user.email}
            </p>
          </div>

          <div className="flex flex-col bg-green-50 p-4 rounded w-full">
            <label className="mb-2 text-green-700">Telefone</label>
            <input
              type="telefone"
              placeholder={user.telefone}
              onChange={
                (ev) => setPhone(ev.target.value)
              }
              className="p-2 rounded border border-green-300 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Meus Pets */}
      <div className="w-full flex flex-col bg-orange-100 rounded-xl p-6 mt-10 shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-orange-700 font-bold text-xl">Meus Pets</p>
            <p className="text-orange-600">Informações dos seus amiguinhos:</p>
          </div>
          <button
            onClick={() => setMostrarModal(true)}
            className="bg-white border border-orange-500 text-orange-500 px-4 py-1 rounded hover:bg-orange-50">
            + Adicionar Pet
          </button>
        </div>

        {/* Pet exemplo */}
        {/* {pets.map((pet) => { */}
          {/* return ( */}
            <div className="bg-white rounded-lg p-4 flex gap-6 w-full items-start">
             <img className="w-[300px] h-auto object-cover rounded" src="https://http.cat/images/400.jpg" alt="" />
            <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-4">
            <input
             type="text"
             placeholder="Nome do pet"
             className="p-2 border border-orange-300 rounded text-orange-800 outline-none w-full"/>

            <input
             type="text"
             placeholder="Raça"
             className="p-2 border border-orange-300 rounded text-orange-800 outline-none w-full"/>
             </div>

           <div className="flex gap-4">
           <div className="bg-orange-50 rounded p-3 flex-1 flex flex-col">
          <label className="text-sm text-orange-600 mb-1">Idade</label>
          <input
            type="text"
            placeholder="Ex: 3 anos"
            className="p-2 border border-orange-300 rounded text-orange-800 outline-none w-full"/>
       </div>
         <div className="bg-orange-50 rounded p-3 flex-1 flex flex-col">
         <label className="text-sm text-orange-600 mb-1">Peso</label>
       <input
          type="text"
          placeholder="Ex: 30kg"
          className="p-2 border border-orange-300 rounded text-orange-800 outline-none w-full"
        />
      </div>
    </div>
    <div className="flex gap-2">
      <button className="bg-white border border-orange-400 text-orange-400 p-1 rounded hover:bg-orange-50">
        Editar
      </button>
      <button className="bg-white border border-red-400 text-red-400 p-1 rounded hover:bg-red-50">
        Excluir
      </button>
    </div>
  </div>
 </div>      
  </div>
      {/* Modal para adicionar pet */}
      {mostrarModal && <CardAddPet onClose={() => setMostrarModal(false)} />}
    </PageWrapper>
  );
}
