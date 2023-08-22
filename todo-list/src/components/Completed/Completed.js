import React from 'react'
import {Link} from 'react-router-dom'
import TodoList from '../ToDo/TodoList'
import CompeletedList from '../Todo/CompeletedList'

function Completed({tasks, task, filter,setFilter}) {

  return (
    <div>
    
        <Link to="/Todo"> back </Link>

<CompeletedList />
    </div>
  )
}

export default Completed