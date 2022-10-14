import './Home.css';
import React , {useEffect,useState,useRef} from 'react'
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import * as tt from "@tomtom-international/web-sdk-maps";
import '@tomtom-international/web-sdk-plugin-searchbox/dist/SearchBox.css';
import axios from 'axios'
import {useDebounce} from 'use-debounce'


const MAX_ZOOM = 17;
 const TOMTOMAPIKEY = process.env.REACT_APP_APIKEY

function Home() {
  const mapElement = useRef();
  const [mapLongitude, setMapLongitude] = useState(-3.70256);
  const [mapLatitude, setMapLatitude] = useState(40.4165);
  const [mapZoom, setMapZoom] = useState(13);
  const [map, setMap] = useState({});
  const [input, setInput] = useState("")
    const [address,setAddress]= useState([])
    const [debouncedText] = useDebounce(input, 2000); //almacenamos el valor del input

  // const increaseZoom = () => {
  //   if (mapZoom < MAX_ZOOM) {
  //     setMapZoom(mapZoom + 1);
  //   }
  // };

  // const decreaseZoom = () => {
  //   if (mapZoom > 1) {
  //     setMapZoom(mapZoom - 1);
  //   }
  // };
  useEffect(() => {
    getAddress()
    let map = tt.map({
      /* 
      This key will API key only works on this Stackblitz. To use this code in your own project,
      sign up for an API key on the TomTom Developer Portal.
      */
      key: `${TOMTOMAPIKEY}`,
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom
    });
    setMap(map);
    return () => map.remove();
  }, [debouncedText]);


  const getAddress = async () => {
    try{
    const  data  = await axios.get(`https://api.tomtom.com/search/2/geocode/${input}.json?storeResult=false&typeahead=true&limit=1&countrySet=ES&lat=40.4165&lon=-3.70256&view=Unified&key=${TOMTOMAPIKEY}`)
    console.log(data);
    const lat= data.data.results[0].position.lat
    const lon= data.data.results[0].position.lon

    console.log(lat,lon);
    return data
    }catch(error){
        console.log(error);
    }
}

const handleChange = (e) => {
    setInput(e.target.value)
  }

  const updateMap = () => {
    map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
    map.setZoom(mapZoom);
  };

  
  return (
    <div >
      <nav  style={{ backgroundColor: "#4287f5" }}>
        <p>TomTom Maps + React = 😃</p>
      </nav>
      <div >
        <section>
          <h4>A donde quieres ir ?</h4>
          <section>
            <label htmlFor="origin"></label>
            <input
              type="text"
              name="origin"
              value={input}
              placeholder="origin"
              onChange={(e) => handleChange(e)}
            />
          </section>
          {/* <section>
            <label htmlFor="destiny"></label>
            <input
              type="text"
              name="destiny"
              value={mapLatitude}
              onChange={(e) => handleChange(e)}
            />
          </section> */}
          {/* <section>
            <p className="search"></p>
            <button  onClick={updateMap}>
              Update Map
            </button>
          </section> */}
        </section>
        <section >
          <div ref={mapElement} className="mapDiv" />
        </section>
      </div>
    </div>
  );
}
 
export default Home;
