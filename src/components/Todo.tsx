import useFetch from '@/hooks/useFetch'
import TodoList from './TodoList'

interface TypeTodo{
  id: number
  name:string
  isDone:false
}

export default function Todo(){
  const todoList:TypeTodo[] = useFetch('http://localhost:3002/todo')
  
  return(
    <>
      <ul>
        {todoList.map(todo=>(
          <TodoList key={todo.id} todo={todo}></TodoList>
        ))}
      </ul>
    </>
  )
}