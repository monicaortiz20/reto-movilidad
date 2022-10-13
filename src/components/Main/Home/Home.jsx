import './Home.css';
import React , {useEffect,useState,useRef} from 'react'
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import * as tt from "@tomtom-international/web-sdk-maps";
import '@tomtom-international/web-sdk-plugin-searchbox/dist/SearchBox.css';


const MAX_ZOOM = 17;
 const TOMTOMAPIKEY = process.env.REACT_APP_APIKEY

function Home() {
  const mapElement = useRef();
  const [mapLongitude, setMapLongitude] = useState(-121.91599);
  const [mapLatitude, setMapLatitude] = useState(37.36765);
  const [mapZoom, setMapZoom] = useState(13);
  const [map, setMap] = useState({});

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

  useEffect(() => {
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
  }, []);

  return (
    <div >
      <nav  style={{ backgroundColor: "#4287f5" }}>
        <p>TomTom Maps + React = 😃</p>
      </nav>
      <div >
        <section>
          <h4>Map Controls</h4>
          <section>
            <label htmlFor="longitude">Longitude</label>
            <input
              type="text"
              name="longitude"
              value={mapLongitude}
              onChange={(e) => setMapLongitude(e.target.value)}
            />
          </section>
          <section>
            <label htmlFor="latitude">Latitude</label>
            <input
              type="text"
              name="latitude"
              value={mapLatitude}
              onChange={(e) => setMapLatitude(e.target.value)}
            />
          </section>
          <section>
            <p>Zoom</p>

            <button  onClick={decreaseZoom}>
              -
            </button>
            <div className="mapZoomDisplay">{mapZoom}</div>
            <button onClick={increaseZoom}>
              +
            </button>
          </section>
          <section>
            <p className="updateButton"></p>
            <button  onClick={updateMap}>
              Update Map
            </button>
          </section>
        </section>
        <section >
          <div ref={mapElement} className="mapDiv" />
        </section>
      </div>
    </div>
  );
}
 
export default Home;
