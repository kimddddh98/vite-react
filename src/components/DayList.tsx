// import db from '@/db/data.json'
import useFetch from '@/hooks/useFetch'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
interface Days{
  id:number,
  day:number
}
export default function DayList(){
  // const [days,setDb] = useState<Days[]>([])
  const days:Days[]= useFetch('http://localhost:3001/days')

  // useEffect(()=>{
  //   fetch('http://localhost:3001/days')
  //   .then(res=>res.json())
  //   .then(data=>setDb(data))
  // },[])
  return(
    <>
      <ul className="list_day">
        {
          days.map(day=>(
            <li key={day.id}>
              <Link to={`/day/${day.day}`}></Link>
              Day:{day.day}
              </li>
          ))
        }
      </ul>
    </>
  )
}