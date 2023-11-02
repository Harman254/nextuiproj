import { WeatherData } from '@/types'
import React from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";


type Props = {
    data: WeatherData
}

const CurrentWeather: React.FC<Props>  = ({ data}) => {
  const currentWeather = data?.current;
  return (
    <Card className='w-1/2 h-full flex flex-col'>
    <CardHeader>Current Weather</CardHeader>
    <CardBody>
      <p>Temperature: {currentWeather.temp_c}°C ({currentWeather.temp_f}°F)</p>
      <p>Feels Like: {currentWeather.feelslike_c}°C ({currentWeather.feelslike_f}°F)</p>
      <p>Condition: {currentWeather.condition.text}</p>
      <p>Wind: {currentWeather.wind_dir} at {currentWeather.wind_kph} km/h</p>
      <p>Pressure: {currentWeather.pressure_mb} mb</p>
      <p>Precipitation: {currentWeather.precip_mm} mm</p>
      <p>Humidity: {currentWeather.humidity}%</p>
      <p>Cloud Cover: {currentWeather.cloud}%</p>
      <p>Visibility: {currentWeather.vis_km} km ({currentWeather.vis_miles} miles)</p>
      <p>UV Index: {currentWeather.uv}</p>
    </CardBody>
  </Card>
  )
}

export default CurrentWeather