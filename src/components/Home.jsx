import { NavLink } from "react-router-dom"
export default function Home() {
  return (
    <>
      <section className="bg-home-mobile bg-no-repeat bg-center bg-cover md:bg-home-tablet lg:bg-home-desktop relative flex flex-col justify-around p-6 text-center flex-grow md:pt-[200px] lg:flex-row lg:p-[165px] lg:items-end lg:justify-between">
        <div className="flex flex-col gap-4 md:gap-6  lg:text-start">
          <h2 className="uppercase tracking-[2.7px] font-barlow text-mainColor md:tracking-[3.375px] md:text-xl lg:text-[28px] lg:tracking-[4.725px]">So, you want to travel to</h2>
          <h1 className="font-bellefair text-[80px] leading-[100px] text-mainLight md:text-[150px] md:leading-[150px]">SPACE</h1>
          <p className="max-w-xs mx-auto font-barlow text-mainColor text-[15px] leading-6 tracking-[1px] md:leading-7 md:max-w-sm lg:leading-8 lg:text-lg lg:mx-0">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <button className="relative mx-auto bg-mainLight w-[150px] h-[150px] rounded-full  before:content-[''] before:absolute before:top-0 before:left-0 before:rounded-full before:w-full before:h-full before:bg-mainLight before:bg-opacity-10 before:transition-transform hover:before:scale-[150%] md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] lg:mx-0 ">
          <NavLink className="absolute top-0 h-full w-full flex justify-center items-center text-mainDark font-bellefair uppercase text-xl tracking-[1.25px] md:text-[32px] md:tracking-[2px]" to="destination">Explore</NavLink>
          </button>
      </section>
    </>
  )
}