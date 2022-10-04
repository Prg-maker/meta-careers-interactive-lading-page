import { Header } from "./components/Header";
import { MainSection } from "./components/MainSection";

import "./index.css";

function App() {
  return (
    <div className="bg-white flex flex-col justify-center items-center">
      <Header />
      <MainSection/>

      <footer className="flex bg-zinc-900 w-[920px] justify-between items-center mt-24 h-[89px] rounded-[50px] ">

        <div className="flex flex-col  justify-center ">

          <strong>FindOpen Jobs</strong>
          <span>Search by job title/ref. code</span>

        </div>

        <div className=""/>

        <div className="flex flex-col  justify">
          <strong>Located in</strong>
          <span>Office, data center, or remote locations</span>
        </div>
      </footer>

    </div>
  );
}

export default App;
