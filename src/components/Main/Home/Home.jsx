import React , {useEffect,useState,useRef} from 'react'
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from '@tomtom-international/web-sdk-maps';


const Home = () => {

  const mapElement = useRef();
  const [mapLongitude, setMapLongitude] = useState(-121.91599);
const [mapLatitude, setMapLatitude] = useState(37.36765);
const [mapZoom, setMapZoom] = useState(13);
const [map, setMap] = useState({});

useEffect(() => {
  let map = tt.map({
    key: "BLI5AGw3kThMYl0te2YlLtiAGW7kHZwC",
    container: mapElement.current,
    center: [mapLongitude, mapLatitude],
    zoom: mapZoom
  });
  setMap(map);
  return () => map.remove();
}, []);


const increaseZoom = () => {
  if (mapZoom < MAX_ZOOM) {
    setMapZoom(mapZoom + 1);
  }
};

const decreaseZoom = () => {
  if (mapZoom > 1) {
    setMapZoom(mapZoom - 1);
  }
};

const updateMap = () => {
  map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
  map.setZoom(mapZoom);
};
  return (
    <div>
      <input
        type="text"
        name="longitude"
        value={mapLongitude}
        onChange={(e) => setMapLongitude(e.target.value)}
      ></input>
      <div ref={mapElement} className="mapDiv"></div>
    </div>
  )
}

export default Home
