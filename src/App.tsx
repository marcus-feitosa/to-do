import styles from './App.module.css'
import "./global.css"

import { Header } from './components/Header'

import { TaskTable } from './components/TaskTable'

export function App() {
 
  return (
    <>
    <Header />
    
    <TaskTable />
    </>
  )
}

