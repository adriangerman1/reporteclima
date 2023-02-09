import React, {useState} from "react"
import Form from './Form';
import Card from "./Card";


const Busquedad = () =>{

    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=c36c7db30c4955c6b6412166ae2ff14c&lang=es"

    let ciudadUrl = "&q="

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=c36c7db30c4955c6b6412166ae2ff14c&lang=es"

    const [weather, setWeather] = useState([])

    const [forecast, setForecast] = useState([])

    const [loading, setLoading] = useState(false)

    const [show, setShow] = useState(false)

    const [location, setLocation] = useState("")

    const getLocation = async(loc)  =>{

        setLoading(true)
        setLocation(loc)

        // weather

        urlWeather = urlWeather + ciudadUrl + loc;
        
        await fetch(urlWeather).then ((res) =>{
            if(!res.ok) throw {res}
            return res.json()
        }).then((weatherData) =>{
            console.log(weatherData)
            setWeather(weatherData)
        }).catch(error =>{
            console.log(error)
            setLoading(false)
            setShow(false)
        });


        //forecast

        urlForecast = urlForecast + ciudadUrl + loc

        await fetch(urlForecast).then ((res) =>{
            if(!res.ok) throw {res}
            return res.json()
        }).then((foreCastData) =>{
            console.log(foreCastData)
            setForecast(foreCastData)

            setLoading(false)
            setShow(true)

        }).catch(error =>{
            console.log(error)
            setLoading(false)
            setShow(false)
        });
    }

    return (

        <React.Fragment>

            <Form newLocation ={getLocation}/>
            <Card showData={show} loadingData={loading} weather={weather} forecast={forecast}/>

        </React.Fragment>
    )
}

export default Busquedad

