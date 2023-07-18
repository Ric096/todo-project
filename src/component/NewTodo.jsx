import { TodoContext } from "../context/TodoContext";
import { useContext } from "react";



// eslint-disable-next-line react/prop-types
export function NewTodo({closeModal}) {
 
  const {todos,setTodos} = useContext(TodoContext);
  // const {todos,setTodos} = todoContext;
  
  const saveNewTodo = (e) => {
    e.preventDefault();

    let newTodo = e.target.newTodo.value;
    setTodos([newTodo,...todos]);

    const inputDOM =document.querySelector('.todo-input');
        inputDOM.value='';

  }
  

  return (

    <section className="form-section">
      <form action="post" onSubmit={(e) => saveNewTodo(e)}>

        <input className="todo-input"
          type="text" name="newTodo"
          placeholder="Agregar tarea"
          />

        <input type="submit" value="Guardar toDo" className="submit-todo"/>
      </form>
      <button onClick={closeModal}>Cerrar Ventana</button>
    </section>
  )
}
