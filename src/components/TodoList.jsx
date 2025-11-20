import { Fragment, useRef, useState } from "react"
import { TodoItem } from "./TodoItem"
import uuid4 from "uuid4"

const TodoList = () => {

    const [todos, setTodos] = useState([
    ])

    const cambiarEstado = (id) => {
        const newTodos = [...todos] //Investigar que significa usar ...
        const todo = newTodos.find((todo) => todo.id === id)
        todo.completed = !todo.completed
        setTodos(newTodos)
    }

    const eliminarTareas = () => {
        const newTodos = todos.filter((todo) => !todo.completed)
        setTodos(newTodos)
    }

    const taskRef = useRef()

    const nuevaTarea = () => {
        const tarea = taskRef.current.value.trim();
        taskRef.current.value = null

        if (tarea === '') return

        setTodos((prevTodos) => {
            const newTask = {
                id: uuid4(),
                task: tarea,
                completed: false,
            }
            return [...prevTodos, newTask]
        })

    }

    const ResumenTareas = () => {
        const cantTareas = contadorTareas();

        if (cantTareas === 0) {
            return (
                <div className="alert alert-success mt-3 text-center">
                    Felicidades no tienes tareas pendientes 😊
                </div>
            )
        }

        if (cantTareas === 1) {
            return (
                <div className="alert alert-info mt-3 text-center">
                    Solo te queda 1 tarea 👌
                </div>
            )
        }

        if (cantTareas < 5) {
            return (
                <div className="alert alert-warning mt-3 text-center">
                    Te quedan {cantTareas} pendientes 😅
                </div>
            )
        }

        return (
            <div className="alert alert-danger mt-3 text-center">
                ¡Urgente! Te quedan {cantTareas} pendientes 😯😬
            </div>
        )

    }

    const contadorTareas = () => {
        return todos.filter((todo) => !todo.completed).length
    }

    return (
        <Fragment>
            <div className="container">
                <TopNav name="TodoList ✅" />

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Ingresa una tarea" ref={taskRef} />
                    <button className="btn btn-outline-primary" type="button" id="agregar" onClick={nuevaTarea} ><i className="bi bi-plus-circle-fill"></i></button>
                    <button className="btn btn-outline-danger" type="button" id="eliminar" onClick={eliminarTareas}><i className="bi bi-trash3-fill"></i></button>
                </div>



                <ul className="list-group mt-5">
                    {/* Recorrer la lista */}

                    {todos.map((todo) => (
                        <TodoItem todo={todo} key={todo.id} cambiarEstado={cambiarEstado} />
                    ))}

                </ul>

                <ResumenTareas />


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

