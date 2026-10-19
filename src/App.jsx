import { useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';



function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit = () => {
    
  }

  const handleDelete = () => {
    
  }

  const handleAdd = () => {
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo("")
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    const updatedTodos = todos.map(item => {
      if(item.id === e.target.name){
        item.isCompleted = !item.isCompleted
      }
      return item
    })
    setTodos(updatedTodos)
  }

  return (
    <>
      <Navbar/>
        <div className="container mx-auto my-5 rounded-xl p-4 bg-violet-200 min-h-[80vh]">
          <div className="addTodo my-5">
            <h2 className="text-lg font-bold">Add a Todo</h2>
            <input onChange={handleChange} value={todo} type="text" className='bg-white w-1/2'/>
          <button onClick={handleAdd} className='bg-violet-500 text-white px-3 py-1 mx-4 hover:font-bold rounded-md hover:bg-violet-900 
          transition-all'>Add</button>
          </div>

            <h2 className='text-lg font-bold'>Your Todos</h2>
          <div className="todos">
            {todos.map(item => {
              
            return <div key={item.todo} className="todo flex w-1/2 justify-between my-3 bg-white p-3 rounded-md">
              <input onChange={handleCheckbox} name={item.id} type="checkbox" checked={item.isCompleted}/>
              <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
              <div className="buttons">
                <button onClick={handleEdit} className='bg-violet-500 text-white px-3 py-1 mx-1 hover:font-bold rounded-md hover:bg-violet-900'>Edit</button>
                <button onClick={handleDelete} className='bg-violet-500 text-white px-3 py-1 mx-1 hover:font-bold rounded-md hover:bg-violet-900'>Delete</button>
              </div>
            </div>
            })}
          </div>

        </div>
    </>
  )
}

export default App
