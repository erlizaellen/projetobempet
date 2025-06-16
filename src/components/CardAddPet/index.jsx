import { useEffect, useRef } from "react";

export default function CardAddPet({ onClose }) {
  const modalRef = useRef(null);


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
            placeholder="Nome do pet"
            className="p-2 border border-orange-300 rounded text-orange-800 outline-none"
          />
          <input
            type="text"
            placeholder="Raça"
            className="p-2 border border-orange-300 rounded text-orange-800 outline-none"
          />
          <input
            type="text"
            placeholder="Idade"
            className="p-2 border border-orange-300 rounded text-orange-800 outline-none"
          />
          <input
            type="text"
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
            onClick={() => {
              alert("Pet salvo! (teste)");
              onClose();
            }}
            className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-500"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
