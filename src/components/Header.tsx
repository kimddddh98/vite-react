import {Link, useLocation,} from 'react-router-dom'

export default function Header(){
  // const 
  // console.log(useParams())
  const path = useLocation().pathname

  console.log(path)
  return(
    <>
      <header>
        <div className="header">
          <h1>
            <Link to="/">토익 영단어(고급)</Link>
          </h1>


        </div>
        <div className="header">
          <h1>
            <Link to="/todo">투두리스트</Link>
          </h1>

        </div>

      </header>
      <div className="menu">
        {path==='/'?
        (<>
          <Link to='create_word'>단어추가</Link>
          <Link to='create_day'>day추가</Link>
        </>)
        :(<>
        <Link to='create_todo'>투두추가</Link>
        <Link to='create_date'>일정</Link>
        </>)}
      
      </div>

    </>
  )
}