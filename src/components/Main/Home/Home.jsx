import React , {useEffect,useState,useRef} from 'react'
import {useDebounce} from 'use-debounce'
import axios from 'axios'
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import '@tomtom-international/web-sdk-plugin-searchbox/dist/SearchBox.css';
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as ttmaps from "@tomtom-international/web-sdk-maps";
import tt, { LngLat,setLngLat } from "@tomtom-international/web-sdk-services";
import './Home.css';

 const TOMTOMAPIKEY = process.env.REACT_APP_APIKEY

function Home() {

  const [startLatitude, setStartLatitude] = useState("");
  const [startLongitude, setStartLongitude] = useState("");
  const [destinationLatitude, setDestinationLatitude] = useState("");
  const [destinationLongitude, setDestinationLongitude] = useState("");
  const [result, setResult] = useState({});
  const mapElement = useRef();
  const [mapZoom, setMapZoom] = useState(15);
  const [map, setMap] = useState({});
  const [input, setInput] = useState("")
  const [input2, setInput2] = useState("")
  const [debouncedText] = useDebounce(input, 2000); //almacenamos el valor del input
  const  [debouncedText2]=  useDebounce(input2, 2000);
  const [center,setCenter] = useState(["-3.6886008", "40.4069749"])
  const [LngLat,setLngLat]=(startLatitude,startLongitude)

  const prueba = [40.4069749,-3.6886008]

  const getAddress = async () => {
    try{
      const  data  = await axios.get(` https://api.tomtom.com/search/2/geocode/${input}.json?storeResult=false&typeahead=true&limit=1&countrySet=ES&lat=40.4165&lon=-3.70256&view=Unified&key=${TOMTOMAPIKEY}`)
      const lat= data.data.results[0].position.lat.toString()
      const lon= data.data.results[0].position.lon.toString()

      console.log('esto lat y lon', lat, lon)

      setStartLatitude(lon)
      setStartLongitude(lat)
     
   
    return data
  }catch(error){
        console.log(error);
    }
}
const getAddress2 = async () => {
  try{
    const  data2  = await axios.get(` https://api.tomtom.com/search/2/geocode/${input2}.json?storeResult=false&typeahead=true&limit=1&countrySet=ES&lat=40.4165&lon=-3.70256&view=Unified&key=${TOMTOMAPIKEY}`)

    const lat= data2.data.results[0].position.lat.toString()
    const lon= data2.data.results[0].position.lon.toString()

    setDestinationLatitude(lon)
    setDestinationLongitude(lat)

  return data2
}catch(error){
      console.log(error);
  }
}




  useEffect(() => {
    getAddress()
    getAddress2()
    
    let map = ttmaps.map({
      key: `${TOMTOMAPIKEY}`,
      container: mapElement.current,
      center: center,
      zoom: mapZoom
    });
   
    setMap(map);
    map.on("render",() => {
      let div = document.createElement('div')
      div.innerHTML ='<p>Im here!</p>'
      let popUp = new ttmaps.Popup({
        closeButton: false,
        offset: 50,
        anchor: 'bottom'
      }).setDOMContent(div)
      const markerStart = new ttmaps.Marker({
        width: 22,
        height:22,
      })
      markerStart.addTo(map)
      .setLngLat([Number(startLatitude),Number(startLongitude)]).setPopup(popUp)
      
      console.log('esto es el markerStart', markerStart)
    })
    
    return () => map.remove() 
    
  }, [debouncedText, debouncedText2]);

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleChange2 = (e) => {
    setInput2(e.target.value)
  }

    //   //marker:
    //  const addMarker = ()=> {      
    //     // const popUpOffset = {
    //     //     bottom: [0, -30]
    //     // }
    //     // const popUp = new tt.Popup({offset: popUpOffset }).setHTML('Hey, baby

    //     const element = document.createElement('div')
    //     element.className = 'marker'
    //     const marker = new ttmaps.Marker({
    //         draggable:true,
    //         element:element,
    //     })
    //     .setLngLat([startLongitude,startLatitude])
    //     .addTo(map)      

    //     //cuando movamos el marker, va a coger la nueva lat y long del marker
    //     // marker.on('dragend', (e) => {
    //     //     const lngLat = marker.getLngLat()
    //     //     setLatitude(lngLat.lat)
    //     //     setLongitude(lngLat.lng)
    //     //
    //     // marker.setPopup(popUp).togglePopup()
    //  }
    // addmarker()
  
  const calculateRoute = () => {
    tt.services
      .calculateRoute({
        key: `${TOMTOMAPIKEY}`,
        routeType: "eco",
        // hilliness: "high",
        // windingness: "high",
        locations: `${startLatitude},${startLongitude}:${destinationLatitude},${destinationLongitude}`
      })
      .then(function (routeData) {
        console.log(routeData.toGeoJson());
        const data = routeData.toGeoJson();
        setResult(data);
        const direction = routeData.toGeoJson().features[0].geometry.coordinates;
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
                    coordinates: direction
                  }
                }
              ]
            }
          },
          layout: {
            "line-cap": "round",
            "line-join": "round"
          },
          paint: {
            "line-color": "#52b788",
            "line-width": 6
          }
        });
        map.setCenter([parseFloat(startLatitude), parseFloat(startLongitude)]);
      })
      .catch((err) => {console.log(err)}
      )
}
  return (
    <div>
      <div ref={mapElement} className="mapDiv"></div>
      <div className="App">
        <div >
          {/* <nav style={{ backgroundColor: "#4287F5" }}>
          </nav> */}
          <div>
            <section>
              <h4>¿A dónde vas?</h4>
              <section>
                <label htmlFor="origin"></label>
                <input
                  type="text"
                  name="origin"
                  value={input}
                  placeholder="Introduce tu origen"
                  onChange={(e) => handleChange(e)}
                />
              </section>
              <section>
                <label htmlFor="destination"></label>
                <input
                  type="text"
                  name="destination"
                  value={input2}
                  placeholder="Introduce tu destino"
                  onChange={(e) => handleChange2(e)}
                />
              </section>
              </section>
          </div>
          <button onClick={calculateRoute}>Buscar</button>
        </div>
      </div>
    </div>
  )
  }
export default Home;
