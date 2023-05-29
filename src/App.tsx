import './App.css'
import '@/assets/main.scss'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from '@/components/Header'
import DayList from './components/DayList'
import Day from './components/Day'
import EmptyPage from '@/components/EmptyPage'
import CreateWord from './components/CreateWord'
import CreateDay from './components/CreateDay'

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
          <Route path="*" element={<EmptyPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
