
import { TodoContext } from '../context/TodoContext';
import { useContext } from 'react';
import { Todo } from './Todo';


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
          todos.map((todo,index) =>{
            <Todo todo={todo}
              key={index}
               
            />  
          })
      }

    </>
  )
}

