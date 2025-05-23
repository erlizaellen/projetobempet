import { useEffect, useRef } from "react";

export default function CardModalQuem({ onClose }) {
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
    <div
      
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#ffffff5e] bg-opacity-50"
     >
      <div className="bg-white p-6 rounded-lg shadow-xl  w-[400px] relative "
       ref={modalRef}
       
      >
       
        <h1>Quem Somos</h1>
        <p >
          {" "}
          No Bem Pet, acreditamos que cuidar do seu melhor amigo não precisa ser
          caro ou complicado. Nossa missão é aproximar tutores de pets das
          melhores clínicas veterinárias, com valores acessíveis e benefícios
          exclusivos, como descontos e planos promocionais. Criamos um ambiente
          simples, confiável e focado em bem-estar animal, onde você encontra
          profissionais de qualidade, perto de você e que cabem no seu bolso.
          Reunimos serviços essenciais para garantir saúde e felicidade ao seu
          pet, com economia e praticidade. Se você é tutor de um cão, gato ou
          outro pet querido, o Bem Pet é para você. Aqui, cuidar faz bem — pro
          pet e pro seu bolso! 💚
        
        </p>
        
      </div>
    </div>
  );
}
