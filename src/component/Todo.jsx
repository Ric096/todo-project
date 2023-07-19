/* eslint-disable react/prop-types */
import { useState } from "react"
import deleteIcon from '../assets/deleteIcon.svg';
import checkIcon from '../assets/checkIcon.svg';
// import checkIconGreen from '../assets/checkIconGreen.svg';

export const Todo = ({todo}) => {

	const [completed,setCompleted] = useState(false);

	const isCompleted = () => {
		setCompleted(true)
	}
  

	return (

		<section className="todo-container">
		{
			completed ? ( <img src={checkIcon} /> ) : (<img src={checkIcon} onClick={isCompleted}/>)
		}
			<p className={`${completed ? "todo-completed" : "todo-text"}`}>{todo}</p>
			<span><img src={deleteIcon} /></span>
		</section>

	)

}
