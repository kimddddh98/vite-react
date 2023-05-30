import { useState } from 'react'
import { json } from 'stream/consumers'

interface TypeTodo{
  id: number
  name:string
  isDone:false
}
interface Props{
  todo:TypeTodo
}
export default function TodoList({todo}:Props){
  const [todoDone,setTodoDone] = useState(todo.isDone)

  function isDonePut(){
    fetch(`http://localhost:3002/todo/${todo.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'

      },
      body:JSON.stringify({
        ...todo,
        isDone:!todoDone
      })
    })
    .then(res=>{
      if(res.ok) setTodoDone(!todoDone)
    })
  }
  return(
    <>
      <li>
        {todo.name}
        <label>
          <input type="checkbox" onChange={isDonePut} checked={todoDone}/>
        </label>
      </li>
    </>
  )
}