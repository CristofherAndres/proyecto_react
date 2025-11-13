import { Fragment, useRef, useState } from "react"
import { TodoItem } from "./TodoItem"

const TodoList = () => {

    const [todos, setTodos] = useState([
        { id: 1, task: "Tarea 1 🏠" },
        { id: 2, task: "Tarea 2 🏠" },
        { id: 3, task: "Tarea 3 🏠" },
        { id: 4, task: "Tarea 4 🏠" },
        { id: 5, task: "Tarea 5 🏠" },
    ])

    const taskRef = useRef()

    const nuevaTarea = () => {
        const tarea = taskRef.current.value;
        alert(tarea)
    }

    return (
        <Fragment>
            <div className="container">
                <TopNav name="TodoList ✅" />

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Ingresa una tarea" ref={taskRef} />
                    <button className="btn btn-outline-primary" type="button" id="agregar" onClick={nuevaTarea} ><i className="bi bi-plus-circle-fill"></i></button>
                    <button className="btn btn-outline-danger" type="button" id="eliminar"><i className="bi bi-trash3-fill"></i></button>
                </div>



                <ul className="list-group mt-5">
                    {/* Recorrer la lista */}

                    {todos.map((todo) => (
                        <TodoItem todo={todo} key={todo.id} />
                    ))}

                </ul>


            </div>
        </Fragment>
    )
}

export default TodoList

const TopNav = (props) => {
    return (
        <div className="my-5">
            <div className="alert alert-info display-1 text-center">
                {props.name}
            </div>
        </div>
    )
}

