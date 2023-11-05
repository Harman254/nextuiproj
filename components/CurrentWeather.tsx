"use client"
import { WeatherData } from '@/types'
import Image from 'next/image'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { BsThermometerHigh } from 'react-icons/bs'


type Props = {
  data: WeatherData
}

const CurrentWeather: React.FC<Props> = ({ data }) => {
  const currentWeather = data?.current;
  console.log(currentWeather.condition)
  return (
    <Card className='w-1/2 h-full flex flex-col'>
      <CardHeader className='text-center font-bold text-2xl text-danger-foreground'>Current Weather</CardHeader>
      <CardBody>
        <div className=' flex flex-col h-1/2 justify-center items-center'>
          <h2>Current conditions</h2>
          <div className='flex justify-normal'>
            <h2>{currentWeather.condition.text}</h2>

            <Image width={64} height={64} className='rounded-full' objectFit='contain' objectPosition='center'
              src={`https:${currentWeather.condition.icon}`} alt={currentWeather.condition.text} />
          </div>
        </div>


        <p className='text-lg font-semibold'>Temperature<BsThermometerHigh size={24}/>: {currentWeather.temp_c}°C</p>
        <p className='text-lg font-semibold'>Feels Like: {currentWeather.feelslike_c}°C </p>
        <p className='text-lg font-semibold'>Condition: {currentWeather.condition.text}</p>
        <p className='text-lg font-semibold'>Wind: {currentWeather.wind_dir} at {currentWeather.wind_kph} km/h</p>
        <p className='text-lg font-semibold'>Pressure: {currentWeather.pressure_mb} mb</p>
        <p className='text-lg font-semibold'>Precipitation: {currentWeather.precip_mm} mm</p>
        <p className='text-lg font-semibold'>Humidity: {currentWeather.humidity}%</p>
        <p className='text-lg font-semibold'>Cloud Cover: {currentWeather.cloud}%</p>
        <p className='text-lg font-semibold'>Visibility: {currentWeather.vis_km} km ({currentWeather.vis_miles} miles)</p>
        <p className='text-lg font-semibold'>UV Index: {currentWeather.uv}</p>
      </CardBody>
    </Card>
  )
}

export default CurrentWeather