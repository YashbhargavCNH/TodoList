import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {

  return (
    <>
      <Navbar/>
        <div className="container mx-auto my-5 rounded-xl p-4 bg-violet-200">
          <div className="addTodo">
            <h2 className="text-lg font-bold">Add a Todo</h2>
            <input type="text" />
          <button className='bg-violet-500 text-white px-4 py-2 rounded-md hover:bg-violet-700 transition-all'>Add</button>
          </div>
            <h2 className='text-lg font-bold'>Your Todos</h2>
          <div className="todos">
            <div className="todo">
              <h1></h1>
            </div>
          </div>

        </div>
    </>
  )
}

export default App
