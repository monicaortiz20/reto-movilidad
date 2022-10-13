import { useEffect, useState, useRef } from 'react'
import '../Home/Routing.css'
import * as tt from '@tomtom-international/web-sdk-maps'
import * as ttapi from '@tomtom-international/web-sdk-services'

import '@tomtom-international/web-sdk-maps/dist/maps.css'



const Routing = () => {
    const mapElement = useRef()
    const [map, setMap] = useState({})
    const [longitude, setLongitude] = useState(-3.70256)
    const [latitude, setLatitude] = useState(40.4165)

    //FUNCIÓN PARA CONVERTIR EN PUNTOS
    const converToPoints = (lngLat) => {
        return {
            point:{
                latitude:lngLat.lat,
                longitude: lngLat.lng
            }
        }
    }

    //PINTAMOS LA RUTA
    const drawRoute = (geoJson, map) => {
        if(map.getLayer('route')) {
            map.removelayer('route')
            map.removeSource('route')
        }
        map.addLayer({
            id: 'route',
            type: 'line',
            source: {
                type: geoJson,
                data: geoJson
            },
            paint: {
                'line-color': 'blue',
                'line-width': 5
            }
        })
    }

    //FUNCIÓN para markers de destino, cada vez que pinchemos en un punto del mapa, se pinta
    const addDeliveryMarker = (lngLat, map) => {
       const element = document.createElement('div')
       element.className = "marker-delivery"
       new tt.Marker({
        element : element
       })
       .setLngLat(lngLat)
       .addTo(map)
    }

    useEffect(() => {
        //variable de origen para el routing
        const origin = {
            lng : longitude,
            lat: latitude
        }

        //array de destinos vacío
        const destinations = []

        let map = tt.map({
            key: process.env.REACT_APP_APIKEY,
            container:mapElement.current,
            stylesVisibility:{
                trafficFlow:true,
                trafficIncidents:true
            },
            center:[longitude, latitude], 
            zoom: 14
        })
        
        setMap(map)

        //marker:
        const addMarker = ()=> {
            
            const popUpOffset = {
                bottom: [0, -30]
            }
            const popUp = new tt.Popup({offset: popUpOffset }).setHTML('Hey, baby!')

            const element = document.createElement('div')
            element.className = 'marker'

            const marker = new tt.Marker({
                draggable:true,
                element:element,
            })
            .setLngLat([longitude, latitude])
            .addTo(map)
            
            //cuando movamos el marker, va a coger la nueva lat y long del marker
            marker.on('dragend', (e) => {
                const lngLat = marker.getLngLat()
                setLatitude(lngLat.lat)
                setLongitude(lngLat.lng)
            })

            marker.setPopup(popUp).togglePopup()
        }
        addMarker()

        const sortDestinations = (locations) => {
            const pointsForDestinations = locations.map((destination) => {
                return converToPoints(destination)
            })

            const callParameters = {
                key: process.env.REACT_APP_APIKEY,
                destinations: pointsForDestinations,
                origin:[converToPoints(origin)]
            }

            return new Promise ((resolve,reject) => {
            ttapi.services
            .matrixRouting(callParameters)
            .then((matrixAPIResults) => {
               const results =  matrixAPIResults.matrix[0]
               const resultsArray = results.map((result, index)=> {
                return {
                    location: locations[index],
                    drivingtime: result.response.routeSummary.travelTimeInSeconds,
                }
               })

               resultsArray.sort((a,b) => {
                return a.drivingtime - b.drivingtime
               })
               const sortedLocations = resultsArray.map((result) => {
                return result.location
               })
               resolve(sortedLocations) //ordenados de menor a mayor distancia en el array
                })
            })

        }

        const recalculateRoutes = () => {
            sortDestinations(destinations).then((sorted) => {
                sorted.unshift(origin)

                ttapi.services
                .calculateRoute({
                    key: process.env.REACT_APP_APIKEY,
                    locations: sorted
                })
                .then((routeData) => {
                   const geoJson = routeData.toGeoJson() //convertimos a GEOJSON
                   drawRoute(geoJson, map)
                })
            })
        }

        //cada vez que clickemos en el mapa, tenemos un nuevo destino en el array de destinos creado arriba
        map.on('click', (e) => {
            destinations.push(e.lngLat)
            addDeliveryMarker(e.lngLat, map) //función para añadir puntos del mapa, destinos
            recalculateRoutes()
        })

        return () => map.remove();

    },[longitude, latitude])


    return (
        <>
        { map && <div className="routing">
            <div ref={mapElement} className="map"/>
            <div className='search-bar'></div>
            <h2>Where to?</h2>
            <input type="text" id="longitude" className='longitude' placeholder='Longitude' onChange={(e)=>{setLongitude (e.target.value)}} />
            <input type="text" id="latitude" className='latitude' placeholder='Latitude' onChange={(e)=>{setLatitude (e.target.value)}} />

        </div>}
        </>
    )
}