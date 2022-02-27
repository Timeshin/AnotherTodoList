import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTodos } from "./services/services";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import TodoList from "./components/TodoList/TodoList";
import CompletedList from "./components/CompletedList/CompletedList";

import "./app.scss"

function App() {
  const { loading } = useSelector(store => store.todoState)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  console.log("test")
  console.log("HELLO3")
  return (
    <>
      <Header/>
      <div className="wrapper">
        <Sidebar/>
        <div className="wrapper-content">
          <div className="to-do-list-wrapper">
            {
              loading ? <h1>Loading...</h1> : <TodoList/> 
            }
          </div>
          <div className="to-do-list-completed">
            <CompletedList/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
