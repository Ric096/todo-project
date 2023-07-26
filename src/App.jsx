import { useState } from 'react';
import './App.css'
import { NewTodo } from './component/NewTodo'
import { TodoContainer } from './component/TodoContainer'
import addTodo from './assets/addTodo.svg'


function App() {

  const [modalActive,setModalActive] = useState(false);


  const openModal = () => {
    setModalActive(true);
  }
  
  const closeModal = () => {
    setModalActive(false);
  }

  return (

    <main>
      <h1>Lista de ToDos</h1>
      <TodoContainer />
      
      {
        !modalActive ? 
        (
          <button className='modal-btn' onClick={openModal}>
            <img  src={addTodo}/>
          </button>
        )
        :
        (<NewTodo  
            modalActive={modalActive}
            closeModal={closeModal}
          />)
      }  
    
    </main>

  )
}

export default App
