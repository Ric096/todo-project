/* eslint-disable react/prop-types */
import { createContext,useState } from "react";

// Creamos el contexto 
export const TodoContext = createContext();

export function TodoProvider({children}) {
    
    const [todos,setTodos] = useState([]);

    return(
        <TodoContext.Provider value={{todos,setTodos}}>
            {children}
        </TodoContext.Provider>
    )
}