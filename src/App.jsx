import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import Home from "./components/Home"
import Destination from "./components/Destination"
import Crew from "./components/Crew"
import Technology from "./components/Technology"
import './App.css'
import { useState } from "react"

function App() {

  const [showMenu,setShowMenu] = useState(false)

  return (
    <>
      <div className="relative min-h-full h-fit flex flex-col bg-mainDark">
        <BrowserRouter>
        <div className="absolute z-30 w-full p-6 md:p-0">
          <header className="flex justify-between items-center lg:pt-[40px] lg:pl-[31px]">
            <img className="md:pt-6 md:pl-10 lg:p-6" src="../static/assets/shared/logo.svg" alt="logo space tourism" />
            <div className=" hidden bg-white opacity-25 lg:h-[1px] lg:w-10 lg:block lg:grow lg:translate-x-10 lg:z-20"></div>
            <button className="md:hidden" onClick={()=>setShowMenu(true)}><img id="menu-hamburger" src="../static/assets/shared/icon-hamburger.svg" alt="logo menu" /></button>
            <nav id="navigation" className={`${showMenu?"translate-x-[0]":"translate-x-[100%]"} flex flex-col absolute transition-all duration-700 top-0 right-0 bg-white/5 backdrop-blur-2xl h-[100vh] min-w-[250px] pl-8 md:translate-x-0 md:relative md:min-w-[60%] md:h-fit lg:pl-[123px]`}>
                <button className="ml-auto m-8 flex items-center md:hidden" onClick={()=>setShowMenu(false)}><img src="../static/assets/shared/icon-close.svg" alt="logo close menu" /></button>
                <ul className="flex pt-[8vh] gap-8 flex-col text-left font-barlow text-mainLight tracking-[2.7px] md:flex-row md:items-center md:pt-0 md:h-full lg:gap-12">
                <li className="flex items-center">
                    <NavLink className={({isActive})=>`${isActive && "border-r-mainLight border-r-[3px] md:border-b-[3px] md:border-b-mainLight"} py-3 flex grow border-b-transparent hover:border-r-[3px] hover:border-r-mainLight/50 md:py-9 md:border-r-0 md:border-b-[3px] md:hover:border-b-mainLight/50 md:hover:border-r-0`} to="/"><span className="mr-[11px] font-bold md:hidden lg:block">00</span><span>HOME</span></NavLink>
                  </li>
                  <li className="flex items-center">
                    <NavLink className={({isActive})=>`${isActive && "border-r-mainLight border-r-[3px] md:border-b-[3px] md:border-b-mainLight"} py-3 flex grow border-b-transparent hover:border-r-[3px] hover:border-r-mainLight/50 md:py-9 md:border-r-0 md:border-b-[3px] md:hover:border-b-mainLight/50 md:hover:border-r-0`} to="/destination"><span className="mr-[14px] font-bold md:hidden lg:block">01</span><span>DESTINATION</span></NavLink>
                  </li>
                  <li className="flex items-center">
                    <NavLink className={({isActive})=>`${isActive && "border-r-mainLight border-r-[3px] md:border-b-[3px] md:border-b-mainLight"} py-3 flex grow border-b-transparent hover:border-r-[3px] hover:border-r-mainLight/50 md:py-9 md:border-r-0 md:border-b-[3px] md:hover:border-b-mainLight/50 md:hover:border-r-0`} to="/crew"><span className="mr-[12px] font-bold md:hidden lg:block">02</span><span>CREW</span></NavLink>
                  </li>
                  <li className="flex items-center">
                    <NavLink className={({isActive})=>`${isActive && "border-r-mainLight border-r-[3px] md:border-b-[3px] md:border-b-mainLight"} py-3 flex grow border-b-transparent hover:border-r-[3px] hover:border-r-mainLight/50 md:py-9 md:border-r-0 md:border-b-[3px] md:hover:border-b-mainLight/50 md:hover:border-r-0`} to="/technology"><span className="mr-[12px] font-bold md:hidden lg:block">03</span><span>TECHNOLOGY</span></NavLink>
                  </li>
                </ul>
              </nav>
            </header>
        </div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/destination" element={<Destination/>}/>
            <Route path="/crew" element={<Crew/>}/>
            <Route path="/technology" element={<Technology/>}/>
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
