// import db from '@/db/data.json'
import {useParams} from 'react-router-dom'
import Word from './Word'
// import { useEffect, useState } from 'react'
import useFetch from '@/hooks/useFetch';

interface Words{
  id: number ;
  day: number| string;
  eng: string;
  kor: string;
  isDone: boolean;
}
// interface Props{
//   word:Words
// }
export default function Day(){
  const {day} = useParams()
  const words:Words[] =  useFetch(`http://localhost:3001/words?day=${day}`)
  // const [words,setWords] = useState<Words[]>(useFetch(`http://localhost:3001/words?day=${day}`))
  

  // const [words,setWord] = useState<Words[]>([])
  // const call = async()=>{
  //   const data = await fetch(`http://localhost:3001/words?day=${day}`)
  //   const res = await data.json()
  //   setWord(res)
  // }
  // useEffect(()=>{
  //   call()
  // },[day])
 
  return(
    <>
      <table>
        <tbody>
          {words.map(word=>(
            <Word word={word} key={word.id}/>
          ))}
        </tbody>
      </table>
    </>
  )
}