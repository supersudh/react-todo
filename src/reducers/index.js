import { combineReducers } from 'redux';

const initialState = {
  activeTodos:[],
  completedTodos:[]
};
const todoReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        activeTodos: state.activeTodos.concat(action.payload)
      };
    case 'MARK_DONE':
      return {
        ...state,
        completedTodos: state.completedTodos.concat(action.payload),
        activeTodos: state.activeTodos.filter(t => t.id !== action.payload.id)
      };
    case 'MARK_INCOMPLETE':
      return {
        ...state,
        activeTodos: state.activeTodos.concat(action.payload),
        completedTodos: state.completedTodos.filter(t => t.id !== action.payload.id)
      };
    default:
      return state;
  }
}

export default combineReducers(
  {
    todo: todoReducer
  }
);