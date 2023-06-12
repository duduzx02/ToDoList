import React from 'react'

const Todo = ({todo}) => {
  return (
    <div className="todo">
    <div className="content">
      <p className='text'>{todo.text}</p>
      <p className="category">({todo.category})</p>
    </div>
    <div>
      <button>✅</button>
      <button>❌</button>
    </div>
  </div>
  )
}

export default Todo