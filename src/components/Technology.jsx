import { useEffect, useState } from "react"

export default function Technology() {

  const [listTechnology,setListTechnology] = useState([])
  const [technology,setTechnology] = useState([])
  const [loading, setLoading] = useState(true);
  const [technologyTransition,setTechnologyTransition] = useState(true)

  useEffect(()=>{
    fetch("./data/data.json")
    .then(response=>
      {
        if(!response.ok) throw new Error("")
        return response.json()
      })
    .then(data=>{
      setListTechnology(data.technology)
      setTechnology(data.technology[0])
      setLoading(false);
    })
  },[])



  function changeTechnology(e){
    listTechnology.forEach(element => {
      if(element.name == e.target.dataset.attribute){
        setTechnologyTransition(false)
        
        setTimeout(()=>{
          setTechnology(element)
        },150)

        setTimeout(()=>{
          setTechnologyTransition(true)
        },150)
      }
    });
  }
  
  
  if (loading) {
    return <p>Chargement en cours...</p>;
  }
  return (
    <>
      <section className="flex flex-grow flex-col pt-[88px] bg-technology-mobile bg-no-repeat bg-center bg-cover md:bg-technology-tablet lg:bg-technology-desktop md:pt-[136px] lg:justify-between lg:pl-[167px] lg:pt-[212px] lg:pb-[100px]">
        <h2 className="text-white uppercase  tracking-[2.7px] font-barlow md:pl-10 md:text-start md:text-xl md:tracking-[3.375px] lg:text-3xl lg:tracking-[4.725px] lg:pl-0"><span className="opacity-25 mr-[18px] font-bold">
          03</span>Space launch 101
        </h2>
          {technology && 
          <div className="flex flex-col pt-8 lg:flex-row">
            <img className={`${technologyTransition?"opacity-100":"opacity-0"} opacity-0 transition-opacity order-3 hidden lg:block`} src={technology.images.portrait} alt={technology.name} />
            <img className={`${technologyTransition?"opacity-100":"opacity-0"} opacity-0 transition-opacity order-1 lg:hidden`} src={technology.images.landscape} alt={technology.name} />
            <nav className="pt-[34px] order-2 md:pt-[56px] lg:self-start lg:pt-[120px] lg:order-1">
              <ul className="flex gap-4 justify-center lg:flex-col lg:gap-8">
                  <li><button className={`font-bellefair text-mainDark w-10 h-10 rounded-full bg-white border border-white border-opacity-25 md:w-[60px] md:h-[60px] lg:h-20 lg:w-20 lg:text-[32px] hover:border-opacity-100 ${technology.name === listTechnology[0].name?"bg-white":"bg-opacity-0 text-white"}`} data-attribute="Launch vehicle" onClick={changeTechnology}>1</button></li>
                  <li><button className={`font-bellefair text-mainDark w-10 h-10 rounded-full bg-white border border-white border-opacity-25 md:w-[60px] md:h-[60px] lg:h-20 lg:w-20 lg:text-[32px] hover:border-opacity-100 ${technology.name === listTechnology[1].name?"bg-white":"bg-opacity-0 text-white"}`} data-attribute="Spaceport" onClick={changeTechnology}>2</button></li>
                  <li><button className={`font-bellefair text-mainDark w-10 h-10 rounded-full bg-white border border-white border-opacity-25 md:w-[60px] md:h-[60px] lg:h-20 lg:w-20 lg:text-[32px] hover:border-opacity-100 ${technology.name === listTechnology[2].name?"bg-white":"bg-opacity-0 text-white"}`} data-attribute="Space capsule" onClick={changeTechnology}>3</button></li>
                </ul>
            </nav>
            <div className="mx-auto flex flex-col order-3 pt-[26px] px-6 justify-center items-center max-w-lg md:pt-11 md:pb-[100px] lg:order-2 lg:items-start lg:text-start lg:max-w-xl">
              <h2 className="text-mainColor text-sm tracking-[2.362px] font-barlow uppercase md:tracking-[2.7px]">The terminology ...</h2>
              <h1 className={`${technologyTransition?"opacity-100 translate-x-0":"opacity-0 translate-x-10"} opacity-0 transition-all font-bellefair uppercase text-white text-2xl pt-[9px] md:pt-4 md:text-[40px] lg:text-[56px] lg:leading-tight`}>{technology.name}</h1>
              <p className="text-mainColor text-[15px] leading-[25px] font-barlow pt-4 md:text-base md:leading-[28px] lg:text-[18px] lg:leading-[32px]">{technology.description}</p>
            </div>
          </div>
          }
        
        
      </section>
    </>
  )
}