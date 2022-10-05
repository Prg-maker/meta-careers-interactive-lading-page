import { MagnifyingGlass } from "phosphor-react";
import { Header } from "./components/Header";
import { MainSection } from "./components/MainSection";

import "./index.css";

function App() {
  return (
    <div className="bg-white flex flex-col justify-center items-center">
      <Header />
      <MainSection/>

      <footer className="flex bg-white w-[920px]  items-center mt-24 h-[89px] rounded-[50px]  shadow-lg shadow-cyan-500/50  ">

        <div className="flex flex-col ml-5 justify-center ">

          <strong className="font-sans font-normal text-[#232323] ">FindOpen Jobs</strong>
          <span  className="font-sans font-bold">Search by job title/ref. code</span>

        </div>

        <div className="h-1/2 ml-[198px] bg-[#65798A] w-[2px] rounded "/>

        <div className="flex flex-col ml-5 justify">
          <strong>Located in</strong>
          <span>Office, data center, or remote locations</span>
        </div>


        <div className="cursor-pointer ml-[140px] bg-[#E9EBEE] rounded-full p-1 items-center justify-center ">
          <MagnifyingGlass size={32} weight="light" color="#65798A" />
        </div>
      </footer>

    </div>
  );
}

export default App;
