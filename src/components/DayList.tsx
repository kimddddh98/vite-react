// import db from '@/db/data.json'
import useFetch from '@/hooks/useFetch'
import {Link} from 'react-router-dom'
interface Days{
  id:number,
  day:number
}
export default function DayList(){
  const days:Days[]= useFetch('http://localhost:3001/days')
  
  
  
  return(
    <>
      {days.length===0&&<span>loading..</span>}
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