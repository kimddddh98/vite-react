import {Link} from 'react-router-dom'

export default function Header(){
  return(
    <>
      <div className="header">
        <h1>
          <Link to="/">토익 영단어(고급)</Link>
        </h1>
        <div className="menu">
        
          <Link to='create_word'>단어추가</Link>
          <Link to='create_day'>day 추가</Link>
        </div>
      </div>
    </>
  )
}