// import './App.css'
// import '@/assets/main.scss'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from '@/components/Header'
import DayList from './components/DayList'
import Day from './components/Day'
import EmptyPage from '@/components/EmptyPage'
import CreateWord from './components/CreateWord'
import CreateDay from './components/CreateDay'
import Todo from './components/Todo'
import CreateTodo from './components/CreateTodo'
import CreateDate from './components/CreateDate'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<DayList />}>
          </Route>
          <Route path='/day/:day' element={<Day/>}> 
          </Route>
          <Route path='/create_word' element={<CreateWord/>}/>
          <Route path='/create_day' element={<CreateDay/>}/>
          
          <Route path='/todo' element={<Todo/>}/>
          <Route path='/create_todo' element={<CreateTodo/>}/>
          <Route path='/create_date' element={<CreateDate/>}/>
          <Route path="*" element={<EmptyPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
