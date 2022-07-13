import { createContext, useContext, useReducer } from 'react'
const TaskContext = createContext();
const TaskContextDispacher = createContext();
const initalState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case 'addList':
      return state;
    default:
      return state;
  }
}
const Provider = ({ children }) => {
  const [Task, dispatch] = useReducer(reducer, initalState);
  return (
    <TaskContext.Provider value={Task}>
      <TaskContextDispacher.Provider value={dispatch}>
        {children}
      </TaskContextDispacher.Provider>
    </TaskContext.Provider>
  )
}

export default Provider
export const useTask = () => useContext(TaskContext);
export const useTaskAction = () => useContext(TaskContextDispacher);