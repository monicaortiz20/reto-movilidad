import React, { useEffect, useState, useRef, useContext } from 'react'
import axios from 'axios'
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import '@tomtom-international/web-sdk-plugin-searchbox/dist/SearchBox.css';
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as ttmaps from "@tomtom-international/web-sdk-maps";
import tt, { LngLat, setLngLat } from "@tomtom-international/web-sdk-services";
import { useDebounce } from 'use-debounce'
import './Home.css';
import { authContext } from '../../../context/authContext';
import { debounce } from 'debounce';
import fetchToCurl from 'fetch-to-curl';
import tren from '../../../assets/vectors/train.png' 
import coche from '../../../assets/vectors/car.png'
import metro from '../../../assets/vectors/metro.png'
import bus from '../../../assets/vectors/bus.png'
import moto from '../../../assets/vectors/moto.png'
import bici from '../../../assets/vectors/bici.png'
import leaf from '../../../assets/vectors/hoja.png'
import exclamacion from '../../../assets/vectors/icons8-atención-50.png'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import "swiper/css/effect-cube";



// import required modules
import { EffectCube } from 'swiper'

// import { data } from 'autoprefixer';
const TOMTOMAPIKEY = process.env.REACT_APP_APIKEY
const CARBONAPI = process.env.REACT_APP_APIKEY_CARBONAPI

function Home() {
  //Context
  const { userName, setUserName } = useContext(authContext)
  // console.log('esto es el userName:', userName)
  const { userGoogle, setUserGoogle } = useContext(authContext)
  //Estado para peticion a api propia
  const [distance, setDistance] = useState();
  const [routeTime, setRouteTime] = useState();

  const [trenEmision, setTrenEmision] = useState();
  const [metroEmision, setMetroEmision] = useState();
  const [motoEmision, setMotoEmision] = useState();
  const [busEmision, setBusEmision] = useState();
  const [cocheEmision, setCocheEmision] = useState();
  //  const [painted,setPainted]= useState(false)
  console.log('esto es cocheEmision', cocheEmision)
  const [showSidebar, setShowSidebar] = useState(false)

  
  //States
  const [startLatitude, setStartLatitude] = useState("");
  const [startLongitude, setStartLongitude] = useState("");
  const [destinationLatitude, setDestinationLatitude] = useState("");
  const [destinationLongitude, setDestinationLongitude] = useState("");
  const [result, setResult] = useState({});
  const mapElement = useRef();
  const [mapZoom, setMapZoom] = useState(14);
  const [map, setMap] = useState({});
  const [input, setInput] = useState("")
  const [input2, setInput2] = useState("")
  const [debouncedText] = useDebounce(input, 1000);
  const [debouncedText2] = useDebounce(input2, 1000);
  const [center, setCenter] = useState(["-3.6886008", "40.4069749"])
  
  useEffect(() => {
    let map = ttmaps.map({
      key: `${TOMTOMAPIKEY}`,
      container: mapElement.current,
      center: center,
      zoom: mapZoom
    });
    setMap(map);
    if( debouncedText.length > 0  && debouncedText2.length > 0 ){
      getAddress()
      getAddress2()

    }
    return () => map
  }, [debouncedText, debouncedText2]);


  const getAddress = async () => {
    try {
      const data = await axios.get(` https://api.tomtom.com/search/2/geocode/${debouncedText}.json?storeResult=false&typeahead=true&limit=1&countrySet=ES&lat=40.4165&lon=-3.70256&view=Unified&key=${TOMTOMAPIKEY}`)
      const lat = data.data.results[0].position.lat.toString()
      const lon = data.data.results[0].position.lon.toString()
      setStartLatitude(lon)
      setStartLongitude(lat)
      return data
    } catch (error) {
      console.log(error);
    }
  }

  const getAddress2 = async () => {
    try {
      const data2 = await axios.get(` https://api.tomtom.com/search/2/geocode/${debouncedText2}.json?storeResult=false&typeahead=true&limit=1&countrySet=ES&lat=40.4165&lon=-3.70256&view=Unified&key=${TOMTOMAPIKEY}`)
      const lat = data2.data.results[0].position.lat.toString()
      const lon = data2.data.results[0].position.lon.toString()
      setDestinationLatitude(lon)
      setDestinationLongitude(lat)
      return data2
    } catch (error) {
      console.log(error);
    }
  }

  const getPolution = async () => {
    console.log('esto es distance', distance);

  //fetch for car polutions 
    const url = `https://app.trycarbonapi.com/api/carTravel?distance=${distance}&vehicle=MediumPetrolCar`;
    const options = {
      body: {
        "distance": distance,
        "vehicle": "MediumPetrolCar"
      },
      headers: {
        Authorization: `Bearer ${CARBONAPI}`
      },
      method: 'post'
    };
    let request = await fetch(url, options)
    let response = await request.json();

    //fetch for motorbike
    const urlMotorbike = `https://app.trycarbonapi.com/api/motorBike?distance=${distance}&type=MediumMotorBike`;
    const options2 = {
      body: {
        "distance": distance,
        "type": "MediumMotorBike"
      },
      headers: {
        Authorization: `Bearer ${CARBONAPI}`
      },
      method: 'post'
    };
    let request2 = await fetch(urlMotorbike, options2)
    let response2 = await request2.json();
    console.log(response2,"soy la moto")

  //fetch for public transports 
//************TRAIN*************
  const urlTrain= `https://app.trycarbonapi.com/api/publicTransit?distance=${distance}&type=NationalTrain`;
    const options3 = {
      body: {
        "distance": distance,
        "type": "NationalTrain"
      },
      headers: {
        Authorization: `Bearer ${CARBONAPI}`
      },
      method: 'post'
    };
    let request3 = await fetch(urlTrain, options3)
    let response3 = await request3.json();
    console.log("soy el tren",response3)
//*************BUS****
const urlBus= `https://app.trycarbonapi.com/api/publicTransit?distance=${distance}&type=ClassicBus`;
const options4 = {
  body: {
    "distance": distance,
    "type": "ClassicBus"
  },
  headers: {
    Authorization: `Bearer ${CARBONAPI}`
  },
  method: 'post'
};
let request4 = await fetch(urlBus, options4)
let response4 = await request4.json();

//Subway*************
const urlSubway= `https://app.trycarbonapi.com/api/publicTransit?distance=${distance}&type=Subway`;
const options5 = {
  body: {
    "distance": distance,
    "type": "Subway"
  },
  headers: {
    Authorization: `Bearer ${CARBONAPI}`
  },
  method: 'post'
};
let request5 = await fetch(urlSubway, options5)
let response5 = await request5.json();


// request
const coche = response.carbon.slice(0,5)
setCocheEmision(coche)
const moto = response2.carbon.slice(0,5)
setMotoEmision(moto)
const tren = response3.carbon.slice(0,5)
setTrenEmision(tren)
const bus = response4.carbon.slice(0,5)
setBusEmision(bus)
console.log(bus);
const metro = response5.carbon.slice(0,5)
setMetroEmision(metro)


   
    console.log('esto es emisionessss', trenEmision, metroEmision, motoEmision, busEmision, cocheEmision)
  }


  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleChange2 = (e) => {
    setInput2(e.target.value)
  }
  const calculateRoute = () => {
    tt.services
      .calculateRoute({
        key: `${TOMTOMAPIKEY}`,
        routeType: "eco",
        locations: `${startLatitude},${startLongitude}:${destinationLatitude},${destinationLongitude}`,
      })
      .then(function (routeData) {
        const data = routeData.toGeoJson();
        setResult(data);

        const direction = routeData.toGeoJson().features[0].geometry.coordinates;
        const distance = data.features[0].properties.summary.lengthInMeters
        const distanceKm = distance / 1000;
        const routeTime = data.features[0].properties.summary.travelTimeInSeconds/60
        const routeRound= Math.ceil(routeTime)
        setDistance(distanceKm);
        setRouteTime(routeRound)

        map.addLayer({
          id: Math.random().toString(),
          type: "line",
          source: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    properties: {},
                    coordinates: direction,
                  },
                },
              ],
            },
          },
          layout: {
            "line-cap": "round",
            "line-join": "round",
          },
          paint: {
            "line-color": "#B4C43B",
            "line-width": 6,
          },
        });
        map.setCenter([parseFloat(startLatitude), parseFloat(startLongitude)]);
        map.on("data", () => {
          let div = document.createElement("div");
          div.innerHTML = "<p>You´re here!</p>";
          let popup = new ttmaps.Popup({
            offset: 35,
          }).setDOMContent(div);
          const element = document.createElement("div");
          element.className = "marker";
          let marker = new ttmaps.Marker({
            width: 32,
            height: 32,
            anchor: "bottom",
            color: "#B4C43B",
          })
            .setLngLat([Number(startLatitude), Number(startLongitude)])
            .setPopup(popup);
          marker.addTo(map);
          // MarkerDestination:
          map.on("data", () => {
            let div2 = document.createElement("div");
            div2.innerHTML = "<p>This is your destiny!</p>";
            let popup2 = new ttmaps.Popup({
              offset: 35,
            }).setDOMContent(div2);
            const element = document.createElement("div");
            element.className = "marker";
            let markerDestination = new ttmaps.Marker({
              width: 32,
              height: 32,
              anchor: "bottom",
              color: "#B4C43B",
            })
              .setLngLat([
                Number(destinationLatitude),
                Number(destinationLongitude),
              ])
              .setPopup(popup2);
            markerDestination.addTo(map);
            markerDestination.off("remove", () => calculateRoute());
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const toggleBar = () =>{
    showSidebar
      ? setShowSidebar(false)
      : setShowSidebar(true)
  }

  const callInstructions= ()=> { getPolution(); calculateRoute();    toggleBar();}

  return (
    <>
    <div className='homeContainer'>
    <div ref={mapElement}  className="mapDiv">
    </div>
    <div className="controllsDiv">
        <div className='searchBox '>
          <section className="userWhere flex flex-col">
            {({userName} || { userGoogle }) ? <h5 className="userName">¡Hola <span className='text-greenSearch'>Reducer</span>!</h5>
              : <h5 className="userName">¡Bienvenido!</h5>}
            <h4 className="whereTo">¿A dónde vas?</h4>
            <section className="sectionInputs">
              <label htmlFor="origin"></label>
              <input
                className="originInput"
                type="text"
                name="origin"
                value={input}
                placeholder="Introduce tu origen"
                onChange={(e) => handleChange(e)}
              />
              <hr className="hr" />
            </section>
            <section className="sectionInputs">
              <label htmlFor="destination"></label>
              <input
                className="destinyInput"
                type="text"
                name="destination"
                value={input2}
                placeholder="Introduce tu destino"
                onChange={(e) => handleChange2(e)}
              />
              <hr className="hr" />
            </section>
            <button className='buttonSearch' onClick={callInstructions}>Buscar</button>
          </section>
        </div>
        <div id="infoRuta" className={`${showSidebar ? '-translate-x-0' : 'translate-x-[400px] lg:translate-x-[600px]' }`}>
            <div className='swiperContainer'> {/* este div necesita altura y anchura definidas para que swiper se alimente */}
              <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                modules={[EffectCube]}
                className='swiperParams '
              >
                <SwiperSlide className='sliderSwipe'>
                  {/* SLIDE 1 */}
                  <div className='mitadSuperior '>
                    <span className='distanceTransport '>
                      <span className='flex gap-2'>Distancia:
                        <p>{distance}km</p>
                      </span>
                      <span className='flex gap-2'>
                        <img src={tren} alt="tren" className='h-7 iconosTransporte' />
                        {routeTime} min
                      </span>
                    </span>
                    <span className='emisionContainer'>
                      <img src={leaf} id="hoja" alt="leaf" />
                      Ruta mas ecológica, {trenEmision} kg C02 de emisión total
                    </span>
                    <hr className='hr ' />
                  </div>
                  <div className='mitadInferior'>
                    <span className=' distanceImg'>
                      <p>Distancia: {distance}km</p>
                      <span className='flex gap-2'>
                        <img src={coche} className="iconosTransporte  w-8 h-8" alt="coche " />{routeTime} min
                      </span>
                    </span>
                    <span className='emisionContainer'>
                      <img src={exclamacion} id="exclamation" alt="!" />
                      {cocheEmision} kg C02 de emisión total
                    </span>
                  </div>
                </SwiperSlide>
                {/* slide 2 */}
                <SwiperSlide className='sliderSwipe'>
                  <div className='mitadSuperior'>
                    <span className='distanceTransport'>
                      <span className='flex gap-2'>Distancia:
                        <p>{distance}km</p>
                      </span>
                      <span className='flex gap-2'>
                        <img src={metro} alt="tren" className='h-7 iconosTransporte' />
                        {routeTime} min
                      </span>
                    </span>
                    <span className='emisionContainer'>
                      {/* <img src={exclamacion} id="exclamation" alt="!" /> */}
                      {metroEmision} kg C02 emisión total
                    </span>
                    <hr className='hr' />
                  </div>
                  <div className='mitadInferior'>
                    <span className=' distanceImg'>
                      <p>Distancia: {distance}km</p>
                      <span className='flex gap-2'>
                        <img src={bus} className="iconosTransporte" alt="bus" />{routeTime} min
                      </span>
                    </span>
                    <span className='emisionContainer'>
                      {/* <img src={exclamacion} id="exclamation" alt="!" /> */}
                      {busEmision} kg C02 emisión total
                    </span>
                            </div>
                </SwiperSlide>
                {/* SLIDE 3 */}
                <SwiperSlide className='sliderSwipe'>
                  <div className='mitadSuperior'>
                    <span className='distanceTransport'>
                      <span className='flex gap-2'>Distancia:
                        <p>{distance}km</p>
                      </span>
                      <span className='flex gap-2'>
                        <img src={bici} alt="bici" className='h-7 iconosTransporte' />
                        {routeTime} min
                      </span>
                    </span>
                    <span className='emisionContainer'>
                      <img src={leaf} id="hoja" alt="leaf" />
                      Ruta mas ecológica, 0 kg C02 de emisión total
                    </span>
                    <hr className='hr ' />
                  </div>
                  <div className='mitadInferior'>
                    <span className=' distanceImg'>
                      <p>Distancia: {distance}km</p>
                      <span className='flex gap-2'>
                        <img src={moto} className="iconosTransporte w-8 h-8" alt="moto" />{routeTime} min
                      </span>
                    </span>
                    <span className='emisionContainer'>
                      {/* <img src={exclamacion} id="exclamation" alt="!" /> */}
                      {motoEmision} kg C02 emisión total
                    </span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <button className='bg-greenSearch w-full lg:w-4/6 h-[40px] text-black rounded-lg py-1 ' id="volver" onClick={toggleBar} >Volver atrás</button>
      </div>
</div>
</div>
</>
  )
}
export default Home;