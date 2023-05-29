import {useParams} from 'react-router-dom'
import Word from './Word'
import useFetch from '@/hooks/useFetch';

interface Words{
  id: number ;
  day: number| string;
  eng: string;
  kor: string;
  isDone: boolean;
}

export default function Day(){
  const {day} = useParams()
  const words:Words[] =  useFetch(`http://localhost:3001/words?day=${day}`)

  
  return(
    <>
      {words.length===0&&<span>loading...</span>}
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