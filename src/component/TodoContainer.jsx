import deleteIcon from '../assets/deleteIcon.svg';
import checkIcon from '../assets/checkIcon.svg';
import { TodoContext } from '../context/TodoContext';
import { useContext } from 'react';


export function TodoContainer() {

  const { todos } = useContext(TodoContext);

  return (
    <>
      <h2>ToDos: 2 de 3 todos completados</h2>

      {
        todos >= 0 ?
        (
          <>
            <h2>No tenemos tareas disponibles</h2>
            <h3>agregalas</h3>
          </>
        )
        :
        todos.map((todo, index) => {
          return (
            <section className="todo-container" key={index}>
              <img src={checkIcon} />
              <p>{todo}</p><span><img src={deleteIcon} /></span>
            </section>
          )
        })
      }

    </>
  )
}

