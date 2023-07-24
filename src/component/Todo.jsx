/* eslint-disable react/prop-types */
import { useContext } from 'react';
import deleteIcon from '../assets/deleteIcon.svg';
import checkIcon from '../assets/checkIcon.svg';
import checkIconGreen from '../assets/checkIconGreen.svg'
import { TodoContext } from '../context/TodoContext';


export function Todo({ todo, index }) {


  const { todos, setTodos } = useContext(TodoContext);

  const taskCompleted = (text) => {
 
    const updatedTodos = todos.map((todo) => {
      if (todo.text === text) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
    
  };


  const deleteTodo = (text) => {
    let todosFiltered = todos.filter(todo => (todo.text !== text))
    console.log(todosFiltered);
    setTodos(todosFiltered);
  }

  return (
    <section className="todo-container" key={index}>
      
      {
        todo.completed ? (
        <img src={checkIconGreen} onClick={() => taskCompleted(todo.text)} />
        ) : (
          <img src={checkIcon} onClick={() => taskCompleted(todo.text)} />
        )

      }

      <p className={`${todo.completed ? "todo-completed" : "todo-text"}`}>{todo.text}</p>
      <img onClick={() => deleteTodo(todo.text)} src={deleteIcon} />

    </section>
  )
}