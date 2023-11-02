import { WeatherData } from '@/types'
import React from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

type Props = {
    data: WeatherData
}

const Location: React.FC<Props>  = ({ data}) => {
  const location = data?.location;
  return (
    <Card className='w-1/2 h-full flex p-3 shadow-md'>
      <CardHeader>{location.name}</CardHeader>
      <CardBody>
        <p >Region: {location.region}</p>
        <p>Country: {location.country}</p>
        <p>Local Time: {location.localtime}</p>
      </CardBody>
      <CardFooter>Coordinates: {location.lat}, {location.lon}</CardFooter>
    </Card>
  )
}

export default Location