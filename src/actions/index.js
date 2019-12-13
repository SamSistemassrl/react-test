const ADD_TASK = 'ADD_TASK';
export const addTask = (name, effort) => ({
  type: ADD_TASK,
  name,
  effort
});

const DELETE_TASK = 'DELETE_TASK';
export const deleteTask = id => ({
  type: DELETE_TASK,
  id
});
