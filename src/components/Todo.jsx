import React from 'react'

const Todo = ({todo, removeTodo}) => {
  return (
    <div className="todo">
    <div className="content">
      <p className='text'>{todo.text}</p>
      <p className="category">({todo.category})</p>
    </div>
    <div>
      <button className='complete'>✅</button>
      <button className='remove' onClick={() => removeTodo(todo.id)}>❌</button>
    </div>
  </div>
  )
}

export default Todo