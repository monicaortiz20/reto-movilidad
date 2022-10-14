import React , {useState,useEffect}from 'react'
import axios from 'axios'
import { useDebounce } from 'use-debounce';
import './Profile.css'


const Profile = () => {
    const [input, setInput] = useState("")
    const [address,setAddress]= useState([])
    const [debouncedText] = useDebounce(input, 2000); //almacenamos el valor del input

    useEffect( () => {
       getAddress()
    },[debouncedText])

    const TOMTOMAPIKEY = process.env.REACT_APP_APIKEY
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

  return (
        <div>
            <input type="text" placeholder='search address' onChange={(e) => handleChange(e)} value={input}/>
            <button className='button' onClick={getAddress}>Search</button>
        </div>
    )
}


export default Profile