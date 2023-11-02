"use client"
import React, { useState, useEffect} from 'react'
import { Input } from '@nextui-org/input'
import { Button } from "@nextui-org/button";
import qs from "query-string"
import {useRouter}  from 'next/navigation';
//@ts-ignore
import { useDebounce } from 'use-lodash-debounce'


type Props = {}

const Search = () => {
  const [value, setValue] = useState("");
  const router = useRouter()

  const debouncedValue = useDebounce(value, 300)

  useEffect(() => {
    const query = {
              city: debouncedValue,
           }
      
          const Url = qs.stringifyUrl({
             url: "/",
              query: query,
         })

         router.push(Url)

  }, [debouncedValue, router])
  return (
    <section className='w-full h-20 container flex space-x-3'>
        <Input placeholder='Search a city...' value={value} onChange={(e) => setValue(e.target.value)}  className='flex-grow text-foreground'/>
        <Button variant='ghost'>Search</Button>

    </section>
  )
}

export default Search

