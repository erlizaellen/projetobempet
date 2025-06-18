import instance from "@/api/instance";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function CardAddPet({ onClose }) {
  const [showModal, setShowModal] = useState(true);
  const modalRef = useRef(null);
  const [name, setName] = useState("");
  const [raca, setRaca] = useState("");
  const [peso, setPeso] = useState("");
  const [nascimento, setNascimento] = useState("");

  async function cadastrarPet(event) {
    console.log("Cadastrando pet...");
    event.preventDefault()
    if (!name || !raca || !peso || !nascimento) {
      return toast.error("Todos os campos precisam ser preenchidos corretamente!");
    }

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      return toast.error("O nome do pet deve conter apenas letras e espaços!");
    }

    if (!/^\d{1,2}([.,]\d{1,2})?$/.test(peso)) {
      return toast.error("Peso inválido! Use o formato de número com até 2 dígitos inteiros e 2 decimais.");
    }

    if (!/^\d{2}$/.test(nascimento)) {
      return toast.error("Idade inválida! Use o formato de anos com exatamente 2 dígitos.");
    }
    

    try {
      const response = await instance.post('/pets', {
        name: name,
        raca: raca,
        peso: peso,
        nascimento: nascimento,
      });

      const data = await response.data;
      if (data) {
        toast.success("Pet cadastrado com sucesso!");
        onClose();
      }
    } catch (error) {
      return toast.error("Erro ao cadastrar pet, verifique os campos preenchidos!");
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <div ref={modalRef} className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
        <h2 className="text-orange-700 font-bold text-xl mb-4">Adicionar Novo Pet</h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome do pet"
            className="p-2 border border-orange-300 rounded text-orange-800 outline-none"

          />
          <input
            type="text"
            value={raca}
            onChange={(e) => setRaca(e.target.value)}
            placeholder="Raça"
            className="p-2 border border-orange-300 rounded text-orange-800 outline-none"
          />
          <input
            type="text"
            value={nascimento}
            onChange={(e) => setNascimento(e.target.value)}
            placeholder="Idade"
            className="p-2 border border-orange-300 rounded text-orange-800 outline-none"
          />
          <input
            type="text"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Peso"
            className="p-2 border border-orange-300 rounded text-orange-800 outline-none"
          />
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-orange-400 text-orange-400 rounded hover:bg-orange-50"
          >
            Cancelar
          </button>
          <button
            onClick={
              cadastrarPet
            }
            className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-500"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

