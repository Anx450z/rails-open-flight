import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Airlines = () => {

  const [airlines, setAirlines] = useState<any>([])

  useEffect(() =>{
    // get all of th our airlines from api
    //  Update airlines in our state

    axios.get('/api/v1/airlines.json')
    .then(res => {
      setAirlines(res.data.data)
      console.log(airlines)
    })
    .catch(res => console.log(res.data))
  },[airlines.length])
  
  return (
    <>
    <div>
      
    </div>
    <div>Airlines Page from react</div>
    <ul>
        {
          airlines.map((airline: { attributes: { name: string; id: number} }) => (
            <li key={airline.attributes.id}>{airline.attributes.name}</li>
          ))
        }
    </ul>
    </>

  )
}

export default Airlines