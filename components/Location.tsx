import { WeatherData } from '@/types'
import React from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";



type Props = {
    data: WeatherData
}

const Location: React.FC<Props>  = ({ data}) => {
  const location = data?.location;
  return (
     <Card className="w-1/2 h-full flex p-3 shadow-md">
            <CardHeader>
                <h1 className="font-bold text-2xl">Location</h1>
                <p className="text-2xl font-bold text-center text-foreground tracking-tight">{location.name}</p>
            </CardHeader>
            <CardBody>
                <h4 className="text-xl">Timezone: {location.tz_id}</h4>
                <p className="text-lg font-semibold">Region: {location.region}</p>
                <p className="text-lg font-semibold">Country: {location.country}</p>
                <div className="flex flex-col items-center space-y-2 w-full p-2">
                    <h2 className="text-xl text-center">Coordinates</h2>
                    <p className="text-xl">Latitude: {location.lat}</p>
                    <p className="text-xl">Longitude: {location.lon}</p>
                </div>
            </CardBody>
            <CardFooter>Local time in {location.name}: {location.localtime}</CardFooter>
        </Card>
  )
}

export default Location


