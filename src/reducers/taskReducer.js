var _ = require('lodash');

const initialState = {
  tasks: []
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const max = _.maxBy(state.tasks, t => {
        return t.id;
      });

      const id = max ? max.id + 1 : 0;

      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id,
            name: action.name,
            effort: action.effort
          }
        ]
      };
    case 'DELETE_TASK':
      const tasks = state.tasks.filter(task => task.id !== action.id);
      return {
        ...state,
        tasks
      };

    default:
      return state;
  }
};

export default taskReducer;
