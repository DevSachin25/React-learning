function TodoItems() {
  return (
    <div>
      <div class="row todo-btn ">
        <div class="col-6">Buy milk </div>
        <div class="col-4">12/03/26</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger btn-cont">
            Delete
          </button>
        </div>
      </div>
      <div class="row todo-btn ">
        <div class="col-6">Go to College </div>
        <div class="col-4">12/03/26</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger btn-cont">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;
