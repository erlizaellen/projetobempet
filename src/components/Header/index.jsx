import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { TiThMenu } from "react-icons/ti";

export default function Header({}) {
  return (
    <div className="w-full h-[80px] flex flex-col ">
      <div className="w-full h-[80px] bg-[#5bf356c2] flex justify-between p-6 items-center">
        <div className="w-[15%]">
          <div className="w-[90px] h-[70px] ml-8 cursor-pointer">
            <img
              src="/bempetlogo.png"
              onClick={() => (window.location.href = "/")}
              alt=""
            />
          </div>
        </div>
        <div className="w-[25%] h-[70px] max-md:hidden  items-center flex gap-2 justify-center  ">
          <div className="w-[10%]  ">
            <HiMagnifyingGlass className="w-[40px] h-[30px] " />
          </div>
          <input className="w-[450px] h-[40px] rounded-md hover:bg-[#d8e4dbc9] bg-[#d7e6d780] justify-center items-center" />
        </div>
        <div className="max-md:hidden w-[60%] h-[70px] flex items-center justify-end  gap-8 mr-20">
          <button
            onClick={() => (window.location.href = "/login")}
            className="cursor-pointer w-[120px] h-[50px]  rounded-md hover:bg-[#7ecb7c] text-[20px] font-bold text-[#215f1f]"
          >
            Login
          </button>
          <button
            onClick={() => (window.location.href = "/cadastro")}
            className="cursor-pointer w-[120px] h-[50px]  rounded-md hover:bg-[#7ecb7c] text-[20px] font-bold text-[#215f1f]"
          >
            Cadastro
          </button>
          <button
            onClick={() => (window.location.href = "/assinatura")}
            className="cursor-pointer w-[120px] h-[50px]  rounded-md hover:bg-[#7ecb7c] text-[20px] font-bold text-[#215f1f]"
          >
            Assinatura
          </button>
          <button
            onClick={() => (window.location.href = "/vantagens")}
            className="cursor-pointer w-[120px] h-[50px]  rounded-md hover:bg-[#7ecb7c] text-[20px] font-bold text-[#215f1f]"
          >
            Vantagens
          </button>
        </div>
        <div className="max-md:flex items-center justify-center hidden">
          <Menu>
            <MenuButton>
              <TiThMenu />
            </MenuButton>
            <MenuItems anchor="bottom" className="w-[80px] h-auto">
              <MenuItem>
                <a className="block data-focus:bg-blue-100" href="/login">
               Login
                </a>
              </MenuItem>
              <MenuItem>
                <a className="block data-focus:bg-blue-100" href="/cadastro">
                  Cadastro
                </a>
              </MenuItem>
              <MenuItem>
                <a className="block data-focus:bg-blue-100" href="/assinatura">
                  Assinatura
                </a>
              </MenuItem>
              <MenuItem>
                <a className="block data-focus:bg-blue-100" href="/vantagens">
                  Vantagens
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
}
