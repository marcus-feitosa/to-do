import styles from './App.module.css'
import "./global.css"

import { Header } from './components/Header'
import { AddTaskBar } from './components/AddTaskBar'
import { Task } from './components/Task'
import { TaskTable } from './components/TaskTable'

export function App() {
 
  return (
    <>
    <Header />
    <AddTaskBar/>
    <TaskTable />
    </>
  )
}

