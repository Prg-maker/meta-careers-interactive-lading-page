import { MagnifyingGlass } from "phosphor-react";
import LogoImg from "../assets/logo.png";

export function Header(){
  return(
    <header className="w-full grid grid-rows-4 grid-cols-4 md:flex  md:flex-row md:justify-between pt-4 px-16 ">
        <div>
          <img src={LogoImg} alt="meta logo" />
        </div>

        <div className=" flex items-center text-base font-normal      md:gap-7 gap-4 ">
          <a href="">
            <p  className="hover:underline ">Jobs</p>
          </a>

          <a href="">
            <p className="hover:underline truncate" >Areas of Work</p>
          </a>

          <a href="">
            <p className="hover:underline">Locations</p>
          </a>

          <a href="">
            <p className="hover:underline">Career</p>
          </a>

          <a href="">
            <p className="hover:underline">Programs</p>
          </a>

          <a href="">
            <p className="hover:underline truncate">How We Work</p>
          </a>

          <a href="">
            <p className="hover:underline">Blog</p>
          </a>

          <button>
            <MagnifyingGlass size={24} weight="regular" />
          </button>

          <div className="md:w-[2px] rounded md:h-7 flex items-center   bg-[#67788A] "/>

          <select className="bg-white text-[#67788A]" name="" id="">
            <option value="login" >
              <a href="/">
                login
              </a>
            </option>

            <option value="register" >
              <a href="/">
              register
              </a>
            </option>
          </select>

        </div>

       
        
      </header>
  )
}