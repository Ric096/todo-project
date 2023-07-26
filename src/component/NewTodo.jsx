import { TodoContext } from "../context/TodoContext";
import { useContext } from "react";



// eslint-disable-next-line react/prop-types
export function NewTodo({modalActive,closeModal}) {
 
  const {todos,setTodos} = useContext(TodoContext);

  console.log(modalActive)
  
  const saveNewTodo = (e) => {
    e.preventDefault();

    let newTodo = {
      text: e.target.newTodo.value,
      completed: false
    }

    setTodos([...todos,newTodo]);
    console.log(todos)
    const inputDOM =document.querySelector('.todo-input');
        inputDOM.value='';

  }
  

  return (

    <div className="bg-modal">

    <section className={`form-section ${modalActive ? "visible" : ""}` }>
      <form action="post" onSubmit={(e) => saveNewTodo(e)}>

        <input className="todo-input"
          type="text" name="newTodo"
          placeholder="Agregar tarea"
          />

        <input type="submit" value="Guardar toDo" className="submit-todo"/>
      </form>
      <button className="btn-close" onClick={closeModal}>
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>

      </button>
    </section>

    </div>
  )
}
