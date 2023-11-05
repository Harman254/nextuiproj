
import React from 'react'
import Search from './search'
import SearchContent from './SearchContent'
import { WeatherData } from '@/types'
import Overview from './Overview'

type HeroProps = {
  data: WeatherData

}

//! harrman you changed this to a server component

const Hero: React.FC<HeroProps> = ({ data }) => {
  console.log(data)


  return (
    <div className='h-screen container'>
      <Search />
      <div className='h-2/3 justify-center items-center'>
        {data ? (<SearchContent data={data}/>): <Overview />}
      </div>
    </div>
  )
}

export default Hero