import React, { Component } from "react";
import Nav from "./Nav/Nav";

class Header extends Component {
  render() {
    return <div>  
      <Nav/>
    </div>;
  }
}

export default Header;

// import React , {useEffect,useState,useRef} from 'react'
// import {useDebounce} from 'use-debounce'
// import axios from 'axios'
// import '@tomtom-international/web-sdk-maps/dist/maps.css'
// import '@tomtom-international/web-sdk-plugin-searchbox/dist/SearchBox.css';
// import "@tomtom-international/web-sdk-maps/dist/maps.css";
// import * as ttmaps from "@tomtom-international/web-sdk-maps";
// import tt from "@tomtom-international/web-sdk-services";
// import { services } from '@tomtom-international/web-sdk-services';
// import { map, LngLat } from '@tomtom-international/web-sdk-maps'
// import './Home.css';


// const MAX_ZOOM = 17;
//  const TOMTOMAPIKEY = process.env.REACT_APP_APIKEY

// function Home() {

//   const [startLatitude, setStartLatitude] = useState("2.7505287");
//   const [startLongitude, setStartLongitude] = useState("41.6709659");
//   const [destinationLatitude, setDestinationLatitude] = useState(
//     "2.5010908655347097"
//   );
//   const [destinationLongitude, setDestinationLongitude] = useState(
//     "41.57083364442753"
//   );
//   const [result, setResult] = useState({});

//   const mapElement = useRef();
//   const [mapLongitude, setMapLongitude] = useState();
//   const [mapLatitude, setMapLatitude] = useState();
//   const [mapZoom, setMapZoom] = useState(17);
//   const [map, setMap] = useState({});
//   const [input, setInput] = useState("")
//   const [address, setAddress] = useState([])
//   const [debouncedText] = useDebounce(input, 2000); //almacenamos el valor del input

//   const [center,setCenter] = useState(["2.7505287", "41.6709659"])
// //   const getAddress = async () => {
// //     try{
// //       const  data  = await axios.get(` https://api.tomtom.com/routing/1/calculateRoute/40.41758572966489%2C-3.70375068970046%3A40.4154%2C-3.6842/json?maxAlternatives=2&language=es-ES&routeRepresentation=summaryOnly&sectionType=carTrain&routeType=eco&traffic=true&travelMode=car&key=${TOMTOMAPIKEY}`)
// //     console.log(data);
// //     const route= data.data.routes[0].summary
// //     // const lat= data.data.results[0].position.lat
// //     // const lon= data.data.results[0].position.lon
// //     // setMapLatitude(lat)
// //     // setMapLongitude(lon)
  
      
// //     // console.log(lat,lon);

// //     return data
// //   }catch(error){
// //         console.log(error);
// //     }
    
    
// // }

//   useEffect(() => {
    
//     let map = ttmaps.map({
//       key: `${TOMTOMAPIKEY}`,
//       container: mapElement.current,
//       center: center,
//       zoom: mapZoom
//     });
//     setMap(map);
//     return () => map.remove();
//   }, []);


//   const calculateRoute = () => {
//     tt.services
//       .calculateRoute({
//         key: `${TOMTOMAPIKEY}`,
//         routeType: "thrilling",
//         hilliness: "high",
//         windingness: "high",
//         locations: `${startLatitude},${startLongitude}:${destinationLatitude},${destinationLongitude}`
//       })
//       .then(function (routeData) {
//         console.log(routeData.toGeoJson());
//         const data = routeData.toGeoJson();
//         setResult(data);
//         const direction = routeData.toGeoJson().features[0].geometry.coordinates;
//         map.addLayer({
//           id: Math.random().toString(),
//           type: "line",
//           source: {
//             type: "geojson",
//             data: {
//               type: "FeatureCollection",
//               features: [
//                 {
//                   type: "Feature",
//                   geometry: {
//                     type: "LineString",
//                     properties: {},
//                     coordinates: direction
//                   }
//                 }
//               ]
//             }
//           },
//           layout: {
//             "line-cap": "round",
//             "line-join": "round"
//           },
//           paint: {
//             "line-color": "#ff0000",
//             "line-width": 2
//           }
//         });
//         map.setCenter([parseFloat(startLatitude), parseFloat(startLongitude)]);
//       })
//       .catch((err) => {console.log(err)}
//       )
  
// } 


//   return (
//     <div>
//       <div ref={mapElement} className="mapDiv"></div>
//       <div className="App">
//         <div>
//           <h3>Start Location</h3>
//           <input
//             className="input"
//             type="text"
//             placeholder="Latitude"
//             value={startLatitude}
//             onChange={(e) => {
//               setStartLatitude(e.target.value);
//             }}
//             required
//           />
//           <input
//             className="input"
//             type="text"
//             placeholder="Longitude"
//             value={startLongitude}
//             onChange={(e) => {
//               setStartLongitude(e.target.value);
//             }}
//             required
//           />
//           <h3>Destination</h3>
//           <input
//             className="input"
//             type="text"
//             placeholder="Latitude"
//             value={destinationLatitude}
//             onChange={(e) => {
//               setDestinationLatitude(e.target.value);
//             }}
//             required
//           /><input
//           className="input"
//           type="text"
//           placeholder="Longitude"
//           value={startLongitude}
//           onChange={(e) => {
//             setDestinationLongitude(e.target.value);
//           }}
//           required
//         />
//         </div>
//         <button onClick={calculateRoute}>Calculate Route</button>
//       </div>
//     </div>
//   );

//   }
 
// export default Home;

