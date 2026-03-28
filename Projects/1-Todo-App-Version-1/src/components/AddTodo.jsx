function AddTodo() {
  return (
    <div class="row todo-btn ">
      <div class="col-6">
        <input type="text" placeholder="Enter Your Task" />
      </div>
      <div class="col-4">
        <input type="date" />
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success btn-cont">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
