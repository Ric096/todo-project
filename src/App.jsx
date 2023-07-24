import { useContext, useState } from 'react';
import './App.css'
import { NewTodo } from './component/NewTodo'
import { TodoContainer } from './component/TodoContainer'
import { TodoContext } from './context/TodoContext';


function App() {

  const [modalActive,setModalActive] = useState(false);

  const {todos} = useContext(TodoContext);
  console.log(todos)

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
          <button className='modal-btn' onClick={openModal}><img  style={{backgroundColor:"black"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVNJREFUSEvllb1KxEAUhb9TiZVWIggWImihL2Bhbecb+ASWLrqVK4i/2+kr2GprL/gCYieCIIiFoJ2VR0YS2Iwxf7upHAghyeR8c8+9d0a0PNSyPiMD2D4FXiX1BxedAdheB46AxYLIvoANSRfpHNtnwGby3BmExIBnYKam+BRwB4R7OrqSwkKzFtn2z0upknW2JyW9254HboDphLAt6WQogO0tIFwrkh5tzwG3wL6k8zSU2KJKEdjeAQ4TkRdgVdKD7QlJH0VJLgXY7gIHUZ4CZFnSW5y/WhEktoRyjEdfUievOCoDqorbXpN0XSsHtnvAbtnKgzhwJWm8MsB2EA6AUltsfwJjg2VealHaG5F6rud5fdQE0JO0l5fQUQAy+0wMaQQo2Jd+ffofgCdgto4tOXPvJS391QfhwDkGFhpCwrkQquwyF9BQtPC3SgfLMODWAd/cY8gZtixanwAAAABJRU5ErkJggg=="/></button>
        )
        :
        (<NewTodo  closeModal={closeModal}/>)
      }  
    
    </main>

  )
}

export default App
