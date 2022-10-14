import { useEffect, useState, useRef } from 'react'
import '../Home/Routing.css'
import * as ttmaps from '@tomtom-international/web-sdk-maps'
import * as tt from '@tomtom-international/web-sdk-services'

import '@tomtom-international/web-sdk-maps/dist/maps.css'

const TOMTOMAPIKEY = process.env.REACT_APP_APIKEY

const Routing = () => {
    const mapElement = useRef();
    const [startLatitude, setStartLatitude] = useState('2.7505287');
    const [startLongitude, setStartLongitude] = useState('41.6709659');
    const [destinationLatitude, setDestinationLatitude] = useState(
      '2.5010908655347097'
    );
    const [destinationLongitude, setDestinationLongitude] = useState(
      '41.57083364442753'
    );
    const [result, setResult] = useState({});
    const [mapZoom, setMapZoom] = useState(17);
    const [map, setMap] = useState({});


    useEffect(() => {
        let map = ttmaps.map({
          key: TOMTOMAPIKEY,
          container: mapElement.current,
          center: [2.75044, 41.67096],
          zoom: mapZoom
        });
        setMap(map);
        return () => map.remove();
      }, []);



const calculateRoute = () => {
    tt.services
      .calculateRoute({
        key: TOMTOMAPIKEY,
        routeType: "thrilling",
        hilliness: "high",
        windingness: "high",
        locations: `${startLatitude},${startLongitude}:${destinationLatitude},${destinationLongitude}`,
      })
    //   .go()
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
            "line-color": "blue",
            "line-width": 4
          }
        });
        map.setCenter([parseFloat(startLatitude), parseFloat(startLongitude)]);
    })
      .catch((err) => { console.log(err)}
      )

}


const resultList = result.features ? (
    <div className="col-xs-12 col-md-4 col" key={result.id}>
      <div className="box">
        <div className="result">
          <h4>
            Distance in KM{" "}
            {result.features[0].properties.summary.lengthInMeters / 1000}
          </h4>
          <h4>
            Time Estimate for Journey
            {` ${
              result.features[0].properties.summary.travelTimeInSeconds / 60
            } minutes`}
          </h4>
        </div>
      </div>
    </div>
  ) : (
    <h4>Add location to get route details</h4>
  );  


  tt.services
  .calculateRoute({
     key: TOMTOMAPIKEY,
     routeType: "thrilling",
     hilliness: "high",
     vehicleLoadType: "USHazmatClass7",
     windingness: "high",
     locations: `${startLatitude},${startLongitude}:${destinationLatitude},${destinationLongitude}`
   });


   const routeUp = () => {
    tt.services
  .calculateReachableRange({
     key: TOMTOMAPIKEY,
     versionNumber: 1,
     timeBudgetInSec: 1000,
     origin: [parseFloat(2.7505287), parseFloat(41.6709659)],
   })
//    .go()
    .then((routeData) => {
     const data = routeData.toGeoJson();
     console.log(data);
   }).catch(err => console.log(err))
   }

    // const mapElement = useRef()
    // const [map, setMap] = useState({})
    // const [longitude, setLongitude] = useState(-3.70256)
    // const [latitude, setLatitude] = useState(40.4165)

    // //FUNCIÓN PARA CONVERTIR EN PUNTOS
    // const converToPoints = (lngLat) => {
    //     return {
    //         point:{
    //             latitude:lngLat.lat,
    //             longitude: lngLat.lng
    //         }
    //     }
    // }

    // //PINTAMOS LA RUTA
    // const drawRoute = (geoJson, map) => {
    //     if(map.getLayer('route')) {
    //         map.removelayer('route')
    //         map.removeSource('route')
    //     }
    //     map.addLayer({
    //         id: 'route',
    //         type: 'line',
    //         source: {
    //             type: geoJson,
    //             data: geoJson
    //         },
    //         paint: {
    //             'line-color': 'blue',
    //             'line-width': 5
    //         }
    //     })
    // }

    // //FUNCIÓN para markers de destino, cada vez que pinchemos en un punto del mapa, se pinta
    // const addDeliveryMarker = (lngLat, map) => {
    //    const element = document.createElement('div')
    //    element.className = "marker-delivery"
    //    new tt.Marker({
    //     element : element
    //    })
    //    .setLngLat(lngLat)
    //    .addTo(map)
    // }

    // useEffect(() => {
    //     //variable de origen para el routing
    //     const origin = {
    //         lng : longitude,
    //         lat: latitude
    //     }

    //     //array de destinos vacío
    //     const destinations = []

    //     let map = tt.map({
    //         key: process.env.REACT_APP_APIKEY,
    //         container:mapElement.current,
    //         stylesVisibility:{
    //             trafficFlow:true,
    //             trafficIncidents:true
    //         },
    //         center:[longitude, latitude], 
    //         zoom: 14
    //     })
        
    //     setMap(map)

    //     //marker:
    //     const addMarker = ()=> {
            
    //         // const popUpOffset = {
    //         //     bottom: [0, -30]
    //         // }
    //         // const popUp = new tt.Popup({offset: popUpOffset }).setHTML('Hey, baby!')

    //         const element = document.createElement('div')
    //         element.className = 'marker'

    //         const marker = new tt.Marker({
    //             draggable:true,
    //             element:element,
    //         })
    //         .setLngLat([longitude, latitude])
    //         .addTo(map)
            
    //         //cuando movamos el marker, va a coger la nueva lat y long del marker
    //         // marker.on('dragend', (e) => {
    //         //     const lngLat = marker.getLngLat()
    //         //     setLatitude(lngLat.lat)
    //         //     setLongitude(lngLat.lng)
    //         // })

    //         // marker.setPopup(popUp).togglePopup()
    //     }
    //     addMarker()

    //     const sortDestinations = (locations) => {
    //         const pointsForDestinations = locations.map((destination) => {
    //             return converToPoints(destination)
    //         })

    //         const callParameters = {
    //             key: process.env.REACT_APP_APIKEY,
    //             destinations: pointsForDestinations,
    //             origin:[converToPoints(origin)]
    //         }

    //         return new Promise ((resolve,reject) => {
    //         ttapi.services
    //         .matrixRouting(callParameters)
    //         .then((matrixAPIResults) => {
    //            const results =  matrixAPIResults.matrix[0]
    //            const resultsArray = results.map((result, index)=> {
    //             return {
    //                 location: locations[index],
    //                 drivingtime: result.response.routeSummary.travelTimeInSeconds,
    //             }
    //            })

    //            resultsArray.sort((a,b) => {
    //             return a.drivingtime - b.drivingtime
    //            })
    //            const sortedLocations = resultsArray.map((result) => {
    //             return result.location
    //            })
    //            resolve(sortedLocations) //ordenados de menor a mayor distancia en el array
    //             })
    //         })

    //     }

    //     const recalculateRoutes = () => {
    //         sortDestinations(destinations).then((sorted) => {
    //             sorted.unshift(origin)

    //             ttapi.services
    //             .calculateRoute({
    //                 key: process.env.REACT_APP_APIKEY,
    //                 locations: sorted
    //             })
    //             .then((routeData) => {
    //                const geoJson = routeData.toGeoJson() //convertimos a GEOJSON
    //                drawRoute(geoJson, map)
    //             })
    //         })
    //     }

    //     //cada vez que clickemos en el mapa, tenemos un nuevo destino en el array de destinos creado arriba
    //     map.on('click', (e) => {
    //         destinations.push(e.lngLat)
    //         addDeliveryMarker(e.lngLat, map) //función para añadir puntos del mapa, destinos
    //         recalculateRoutes()
    //     })

    //     return () => map.remove();

    // },[longitude, latitude])


    return (
        <>
        <div ref={mapElement} style={{height: '30rem'}}></div>
        <div className="App">
            <div>
                <h3>Start Location</h3>
                    <input
                    className="input"
                    type="text"
                    placeholder="Latitude"
                    value={startLatitude}
                    onChange={(e) => {
                        setStartLatitude(e.target.value);
                    }}
                    required
                    />
                    <input
                    className="input"
                    type="text"
                    placeholder="Longitude"
                    value={startLongitude}
                    onChange={(e) => {
                        setStartLongitude(e.target.value);
                    }}
                    required
                    />
                <h3>Destination</h3>
                    <input
                    className="input"
                    type="text"
                    placeholder="Latitude"
                    value={destinationLatitude}
                    onChange={(e) => {
                        setDestinationLatitude(e.target.value);
                    }}
                    required
                    />
                <input
                    className="input"
                    type="text"
                    placeholder="Longitude"
                    value={destinationLongitude}
                    onChange={(e) => {
                        setDestinationLongitude(e.target.value);
                    }}
                    required
                    />

                    <button onClick={calculateRoute}>Calculate route</button>
                </div>
        </div>
        
        </>
    )
}

export default Routing;


