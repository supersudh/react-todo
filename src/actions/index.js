export function addTodo(todo) {
  console.log("AM HERE")
  return {
    type: 'ADD_TODO',
    payload: todo
  };
}

export function markTodoDone(todo) {
  return {
    type: 'MARK_DONE',
    payload: todo
  };
}

export function markTodoIncomplete(todo) {
  return {
    type: 'MARK_INCOMPLETE',
    payload: todo
  };
}
