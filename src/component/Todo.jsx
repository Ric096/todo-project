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

    <img  
      src={todo.completed ? checkIconGreen : checkIcon}
      onClick={() => taskCompleted(todo.text)}
      alt='Toggle Complete'
    />      
  
    <p className={`todo-text ${todo.completed ? "todo-completed" : ""}`}>{todo.text}</p>
    <img className='delete-todo' onClick={() => deleteTodo(todo.text)} src={deleteIcon} />

    </section>
  )
}