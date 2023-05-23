import { useState } from 'react';

interface Word{
  id: number ;
  day: number| string;
  eng: string;
  kor: string;
  isDone: boolean;
}
interface Props{
  word:Word
}
const Word = ({word}:Props)=>{
  const [isShow,setIsShow] = useState(false)
  const [isDone,setIsDone] = useState(word.isDone)
  return(
    <>
      <tr className={isDone?'off':''}>
        <td><input type="checkbox" checked={isDone} onChange={()=>setIsDone(!isDone)} /></td>
        <td>{word.eng}</td>
        <td>{isShow&&word.kor}</td>
        <td>
          <button onClick={()=>setIsShow(!isShow)}>
            뜻 {isShow?'숨기기':'보기'}
            </button>
          <button className='btn_del'>삭제</button>
        </td>
      </tr>
    </>
  )
} 
export default Word