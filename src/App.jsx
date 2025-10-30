const App = () => {
  return (
    <div className="container">
      <TopNav name="Mi primer App" />

      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Ingresa una tarea" />
        <button class="btn btn-outline-primary" type="button" id="agregar"><i class="bi bi-plus-circle-fill"></i></button>
        <button class="btn btn-outline-danger" type="button" id="eliminar"><i class="bi bi-trash3-fill"></i></button>
      </div>

    </div>
  )
}

export default App

const TopNav = (props) => {
  return (
    <div className="my-5">
      <div className="alert alert-info display-1 text-center">
        {props.name}
      </div>
    </div>
  )
}

