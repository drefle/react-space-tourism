import { useEffect, useState } from "react"

export default function Crew() {

  const [crew,setCrew] = useState([])
  const [member,setMember] = useState([])
  const [loading, setLoading] = useState(true);
  const [memberTransition,setMemberTransition] = useState(true)

  useEffect(()=>{
    fetch("/data/data.json")
    .then(response=>
      {
        if(!response.ok) throw new Error("")
        return response.json()
      })
    .then(data=>{
      setCrew(data.crew)
      setMember(data.crew[0])
      setLoading(false);
    })
  },[])



  function changeMember(e){
    crew.forEach(element => {
      if(element.name == e.target.dataset.attribute){
        setMemberTransition(false)
        
        setTimeout(()=>{
          setMember(element)
        },150)

        setTimeout(()=>{
          setMemberTransition(true)
        },150)
      }
    });
  }
  
  
  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <>
      <section className="flex flex-grow flex-col pt-[88px] bg-crew-mobile bg-no-repeat bg-center bg-cover md:bg-crew-tablet lg:bg-crew-desktop px-6 md:pt-[136px] md:pl-10 lg:justify-between lg:pl-[167px] lg:pt-[212px]">
        <h2 className="text-white uppercase  tracking-[2.7px] font-barlow  md:text-start md:text-xl md:tracking-[3.375px] lg:text-3xl lg:tracking-[4.725px]"><span className="opacity-25 mr-[18px] font-bold">
          02</span>Meet your crew
        </h2>

        <div className="w-full mx-auto pt-8 px-6 flex flex-col justify-center items-center md:pt-[60px] md:gap-10 md:max-w-lg lg:flex-row lg:max-w-none lg:px-0">
          <div className="w-full flex justify-center items-center border-b-2 border-white border-opacity-20 md:order-2 md:border-none md:h-[33rem] lg:w-1/2">
            {member && <img className={` ${memberTransition?"opacity-100":"opacity-0"} opacity-0 transition-opacity duration-300 ease-in-out w-[175px] md:bottom-0 md:h-full md:w-auto`} src={member.images.webp} alt={member.name} />}
          </div>
          <div className="flex flex-col gap-8 md:order-1 md:gap-10 lg:w-1/2">
            <nav className="pt-8 md:order-2 md:pt-0 lg:self-start lg:pt-[120px]">
              <ul className="flex gap-4 justify-center">
                  <li><button className={`w-[10px] h-[10px] rounded-full bg-white  hover:bg-opacity-25 ${member.name === crew[0].name?"bg-opacity-100":"bg-opacity-[0.17]"}`} data-attribute={crew[0].name} onClick={changeMember}></button></li>
                  <li><button className={`w-[10px] h-[10px] rounded-full bg-white hover:bg-opacity-25 ${member.name === crew[1].name?"bg-opacity-100":"bg-opacity-[0.17]"}`} data-attribute={crew[1].name} onClick={changeMember}></button></li>
                  <li><button className={`w-[10px] h-[10px] rounded-full bg-white hover:bg-opacity-25 ${member.name === crew[2].name?"bg-opacity-100":"bg-opacity-[0.17]"}`} data-attribute={crew[2].name} onClick={changeMember}></button></li>
                  <li><button className={`w-[10px] h-[10px] rounded-full bg-white hover:bg-opacity-25 ${member.name === crew[3].name?"bg-opacity-100":"bg-opacity-[0.17]"}`} data-attribute={crew[3].name} onClick={changeMember}></button></li>
                </ul>
            </nav>
              {member && 
                <div className="flex flex-col w-full gap-4 md:order-1">
                  <div className="flex flex-col gap-2 text-center lg:text-start lg:gap-[15px]">
                    <h2 className="font-bellefair uppercase text-white text-opacity-50 md:text-2xl xl:text-[32px]">{member.role}</h2>
                    <h1 className={`${memberTransition?"opacity-100 translate-y-0":"opacity-0 translate-y-10"} opacity-0 transition-all leading-none font-bellefair uppercase text-white text-2xl md:text-[40px] xl:text-[56px]`}>{member.name}</h1>
                  </div>
                  <p className="font-barlow text-mainColor leading-[25px] text-[15px] tracking-[1.5px] md:text-base md:leading-7 lg:text-start xl:text-[18px] xl:leading-8 lg:max-w-md">{member.bio}</p>
                </div>
              }
          </div>
        </div>
        
      </section>
    </>
  )
}