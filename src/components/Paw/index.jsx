import { useState } from "react";
import { TbPawFilled } from "react-icons/tb";
import CardModalQuem from "../CardModalQuem";

export default function Paw({}) {
  const [cardModalQuem, setCardModalQuem] = useState(false);

  return (
    <div
    onClick={() => setCardModalQuem(true)}
    className=" flex flex-col items-center justify-center relative  rounded-full cursor-pointer">
      <TbPawFilled className="text-[#215f1f] w-[180px] h-[180px]" />
      <p className="font-bold absolute text-white bottom-10">Quem somos</p>
      {cardModalQuem && (
        <CardModalQuem onClose={() => setCardModalQuem(false)} />
      )}
    </div>
  );
}
