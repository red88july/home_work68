const TodoForm = () => {
  return (
    <div className="ms-5 mt-5">
      <form className="d-flex flex-column justify-content-start border border-3 border-success-subtle rounded-2 p-2 w-25">
        <label htmlFor="input-task" className="mb-1 form-label">Input task</label>
        <input id="input-task" className="form-control mb-2" type="text" required autoFocus/>
        <button type="submit" className="btn btn-success p-3">Add task</button>
      </form>
    </div>
  );
};

export default TodoForm;