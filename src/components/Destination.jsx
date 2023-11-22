import { useEffect, useState } from "react"

export default function Destination() {

  const [destinations,setDestinations] = useState([])
  const [destination,setDestination] = useState([])
  const [loading, setLoading] = useState(true);
  const [destinationTransition,setDestinationTransition] = useState(true)

  useEffect(()=>{
    fetch("./static/data.json")
    .then(response=>
      {
        if(!response.ok) throw new Error("")
        return response.json()
      })
    .then(data=>{
      setDestinations(data.destinations)
      setDestination(data.destinations[0])
      setLoading(false);
    })
  },[])



  function changeDestination(e){
    destinations.forEach(element => {
      if(element.name == e.target.dataset.attribute){
        setDestinationTransition(false)
        
        setTimeout(()=>{
          setDestination(element)
        },300)

        setTimeout(()=>{
          setDestinationTransition(true)
        },300)
      }
    });
  }
  
  
  if (loading) {
    return <p>Chargement en cours...</p>;
  }
  
  return (
    <>
      <section className="flex flex-col flex-grow pt-[89px] px-6 bg-destination-mobile bg-no-repeat bg-center bg-cover md:bg-destination-tablet lg:bg-destination-desktop  md:mx-0 md:pt-[136px] md:pl-10 lg:px-[167px] lg:pt-[212px]">
        <h2 className="text-white uppercase  tracking-[2.7px] font-barlow  md:text-start md:text-xl md:tracking-[3.375px] lg:text-3xl lg:tracking-[4.725px]"><span className="opacity-25 mr-[18px] font-bold">
          01</span>Pick your destination
        </h2>
        <div className="flex flex-col justify-center items-center pt-8 md:mx-auto md:max-w-xl md:py-[60px] lg:grid lg:grid-cols-2 lg:gap-32 lg:max-w-5xl">
          <div className="w-full flex justify-center">
            {destination && <img className={` ${destinationTransition?"opacity-100":"opacity-0"} opacity-0 transition-opacity duration-300 ease-in-out w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-full lg:h-full`} src={destination.images.webp} alt={destination.name} />}
          </div>
          <div className="pt-6 md:pt-[53px]">
            <nav className="w-fit mx-auto lg:ml-0">
              <ul className="flex gap-6">
                <li><button className={`font-barlow pb-2 text-sm tracking-[2.362px] text-mainColor uppercase md:text-base md:tracking-[2.7px] border-b-2 border-transparent hover:border-white hover:border-opacity-25 ${destination.name === destinations[0].name?"text-white border-white":""}`} data-attribute={destinations[0].name} onClick={changeDestination}>{destinations[0].name}</button></li>
                <li><button className={`font-barlow pb-2 text-sm tracking-[2.362px] text-mainColor uppercase md:text-base md:tracking-[2.7px] border-b-2 border-transparent hover:border-white hover:border-opacity-25 ${destination.name === destinations[1].name?"text-white border-white":""}`} data-attribute={destinations[1].name} onClick={changeDestination}>{destinations[1].name}</button></li>
                <li><button className={`font-barlow pb-2 text-sm tracking-[2.362px] text-mainColor uppercase md:text-base md:tracking-[2.7px] border-b-2 border-transparent hover:border-white hover:border-opacity-25 ${destination.name === destinations[2].name?"text-white border-white":""}`} data-attribute={destinations[2].name} onClick={changeDestination}>{destinations[2].name}</button></li>
                <li><button className={`font-barlow pb-2 text-sm tracking-[2.362px] text-mainColor uppercase md:text-base md:tracking-[2.7px] border-b-2 border-transparent hover:border-white hover:border-opacity-25 ${destination.name === destinations[3].name?"text-white border-white":""}`} data-attribute={destinations[3].name} onClick={changeDestination}>{destinations[3].name}</button></li>
              </ul>
            </nav>
            <h1 className={`${destinationTransition?"opacity-100 translate-y-0":"opacity-0 translate-y-10 "} opacity-0 transition-all text-[56px] font-bellefair pt-5 text-white uppercase md:text-[80px] md:pt-8 lg:text-start`}>{destination && destination.name}</h1>
            <p className="text-mainColor font-barlow leading-[25px] text-center md:leading-7 md:tracking-widest lg:text-start">{destination && destination.description}</p>
            <div className="my-8 h-[1px] w-full opacity-25 bg-white md:mt-12 md:mb-7"></div>
            <div className="flex flex-col justify-center gap-8 md:flex-row">
              <div className="flex flex-col gap-3 md:w-[216px]">
                <h2 className="text-mainColor text-sm uppercase tracking-[2.362px] font-barlow lg:text-start">AVG. Distance</h2>
                <p className="text-white font-bellefair uppercase text-[28px] lg:text-start">{destination && destination.distance}</p>
              </div>
              <div className="flex flex-col gap-3 md:w-[216px]">
                <h2 className="text-mainColor text-sm uppercase tracking-[2.362px] font-barlow lg:text-start">Est. travel time</h2>
                <p className="text-white font-bellefair uppercase text-[28px] lg:text-start">{destination && destination.travel}</p>
              </div>
            </div>
          </div>
        </div>


      </section>
      
    </>
  )
}