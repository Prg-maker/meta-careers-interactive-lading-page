import { ArrowCircleRight } from "phosphor-react";
import PeronImage from "../assets/HeroImage.png";

export function MainSection(){
  return(
    <main className="flex items-center   mt-[100px]">

      <section className="flex items-center">

        <img  className=" mr-[180px]" src={PeronImage} alt="peron image" />

        <div>
          <h1 className="font-extrabold text-5xl  text-[#444444] mb-6">The Future of work</h1>
          <span className="font-extrabold text-[#444444]  ">
            What is the future of work? To find out, look no further <br/> than your
            own home. Connect with colleagues from <br/> across the globe while doing
            work that matters.
          </span>

          <a href="" className="mt-6 flex items-center gap-[10px] text-[#444444]">
            <ArrowCircleRight size={32} weight="light" />
            See remote jobs
          </a>
        </div>
      
      </section>

    </main>
  )
}