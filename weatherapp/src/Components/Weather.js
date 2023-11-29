import React, { useEffect, useState } from 'react'
import './style.css'
import WeatherCard from './WeatherCard'


const Weather = () => {
const[searchvalue,setsearchvalue]=useState('pune')
const[tempinfo,settempinfo]=useState([])
// get weather information
const getweatherInfo=async()=>{
    try{
let Url=`https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=2f0de490880c845b176f6c9e42023397`;
const res=await fetch(Url);
const data=await res.json()
const {temp,humidity,pressure}=data.main;
const {main:weathermood}=data.weather[0]
const {name}=data;
const {speed}=data.wind
const {country,sunset}=data.sys
const mynewweatherInfo={
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
};
settempinfo(mynewweatherInfo)

    }
    catch(error){
        console.log(error);
    }
}
useEffect(()=>{
getweatherInfo()
},[])

  return (
    <>
    <div className="wrap">
        <div className="search">
            <input type="search" 
            placeholder='search...'
            autofocus
            id="search"
            className="searchTerm"
            value={searchvalue}
            onChange={(e)=>setsearchvalue(e.target.value)}
/>
<button className='searchButton' type='button' onClick={getweatherInfo}>Search

</button>
        </div>
    </div>
<WeatherCard tempinfo={tempinfo}/>
    </>
  )
}

export default Weather