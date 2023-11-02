import { WeatherData } from '@/types'
import React from 'react'
import Location from './Location'
import CurrentWeather from './CurrentWeather'

type Props = {
  data: WeatherData
}

const SearchContent: React.FC<Props> = ({ data }) => {
  //@ts-ignore

  if(data?.error){
		return <div className="flex items-center justify-center"><p>no location found</p></div>
	}

  return (
    <div className='flex p-4 gap-4'>

      <Location data={data} />
      <CurrentWeather data={data} />
    </div>

  )
}

export default SearchContent