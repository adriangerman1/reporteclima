import Spinner from "./Spinner"

const Card= ({loadingData, showData, weather, forecast}) =>{

    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth() + 1;
    let year = today.getFullYear()
    let date = day + "/" + month + "/" + year;

    let url = ""
    let iconUrl=""

    let iconUrl3 = ""
    let iconUrl6 = ""
    let iconUrl9 = ""

    let forecastDate3= ""
    let forecastDate6= ""
    let forecastDate9= ""


    if(loadingData){
        return <Spinner/>
    }

    if(showData){
        url="http://openweathermap.org/img/w/"

        iconUrl= url + weather.weather[0].icon + ".png"

        iconUrl3= url + forecast.list[1].weather[0].icon + ".png"
        iconUrl6= url + forecast.list[2].weather[0].icon + ".png"
        iconUrl9= url + forecast.list[3].weather[0].icon + ".png"

        forecastDate3= forecast.list[1].dt_txt.substring(8,10) + "/" + forecast.list[1].dt_txt.substring(5,7) + "/" + forecast.list[1].dt_txt.substring(0,4) + " " + forecast.list[1].dt_txt.substring(11, 13)
        forecastDate6= forecast.list[2].dt_txt.substring(8,10) + "/" + forecast.list[2].dt_txt.substring(5,7) + "/" + forecast.list[2].dt_txt.substring(0,4) + " " + forecast.list[2].dt_txt.substring(11, 13)
        forecastDate9= forecast.list[3].dt_txt.substring(8,10) + "/" + forecast.list[3].dt_txt.substring(5,7) + "/" + forecast.list[3].dt_txt.substring(0,4) + " " + forecast.list[3].dt_txt.substring(11, 13)

    }

    return(

        <div className="mt-5">

            {
                showData === true ? (

                    <div className=" container">

                        <div className="card mb-3 mx-auto bg-dark text-light">

                            <div className="row g-0">

                                <div className="card1 col-md-4">

                                    <h2 className="card-temp">{(weather.main.temp -273.15).toFixed(1)} °C</h2>
                                    <h3 className="card-title text-center">{weather.name}</h3>
                                    <p className="card-date text-center">{date}</p>
                                    <p className="card-desc text-center">{weather.weather[0].description}</p>
                                    <p className="card-desc text-center"> <img className="cardIcon" src={iconUrl} alt="icono"/></p>
                                    

                                </div>

                                <div className="card2 col-md-8">

                                    <div className="card-body text-start mt-2">

                                        <h5 className="card-text p-1">temperatura maxima: {(weather.main.temp_max - 273.15).toFixed(1)} °C</h5>
                                        <h5 className="card-text p-1">temperatura minima: {(weather.main.temp_min - 273.15).toFixed(1)} °C</h5>
                                        <h5 className="card-text p-1">sensacion termica: {(weather.main.feels_like - 273.15).toFixed(1)} °C</h5>
                                        <h5 className="card-text p-1">humedad: {weather.main.humidity} % </h5>
                                        <h5 className="card-text p-1">Velocidad del viento: {(weather.wind.speed * 3.6).toFixed(1)} km/h </h5>
                                        
                                    </div>

                                    <hr />

                                    <div className="row mt-4">

                                        <h3 className="text-center">Proximas horas</h3>
                                        
                                        <div className="col">

                                            <p className="fecha text-center">{forecastDate3} hs</p>
                                            <p className="temp text-center">{(forecast.list[1].main.temp -273.15).toFixed(1)} °C</p>
                                            <p className="description text-center">{forecast.list[1].weather[0].description}</p>
                                            <p className="text-center text-capitalize"><img src={iconUrl3} alt="icon" /></p>

                                        </div> 

                                        <div className="col">

                                            <p className="fecha text-center">{forecastDate6} hs</p>
                                            <p className="temp text-center">{(forecast.list[2].main.temp -273.15).toFixed(1)} °C</p>
                                            <p className="description text-center">{forecast.list[2].weather[0].description}</p>
                                            <p className="text-center text-capitalize" ><img src={iconUrl6} alt="icon" /></p>

                                        </div> 

                                        <div className="col">

                                            <p className="fecha text-center">{forecastDate9} hs</p>
                                            <p className="temp text-center">{(forecast.list[3].main.temp -273.15).toFixed(1)} °C</p>
                                            <p className="description text-center">{forecast.list[3].weather[0].description}</p>
                                            <p className="text-center text-capitalize"><img src={iconUrl9} alt="icon" /></p>

                                        </div> 

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                ):(
                    <div className="container">

                        <h2 className="text-light text-center">Porfavor ingrese una Ciudad</h2> 

                    </div>
                    

                )
            }

        </div>
        
    )

}

export default Card