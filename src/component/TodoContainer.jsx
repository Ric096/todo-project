
import { TodoContext } from '../context/TodoContext';
import { useContext } from 'react';
import { Todo } from './Todo';

function Counter() {
  return (
    <>
      <h2>No tenemos tareas disponibles</h2>
      <h3>agregalas</h3>
    </>
  )
}

export function TodoContainer() {

  const { todos } = useContext(TodoContext);

  const todoCompleted = todos.filter(todo => ( todo.completed !== false ));

  return (
    <>

    {
      todos.length > 0 ? 
      <h2>ToDos: {todoCompleted.length} de {todos.length} todos completados</h2>
      : ''
    }

      {
        todos <= 0 ? <Counter /> : (
          todos.map((todo, index) => (
  
            <Todo key={index} todo={todo}/>

          ))
        )
      }

    </>
  )
}

