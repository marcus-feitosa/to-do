import styles from './App.module.css'
import "./global.css"

import { Header } from './components/Header'
import { AddTaskBar } from './components/AddTaskBar'

export function App() {
 
  return (
    <>
    <Header />
    <AddTaskBar/>
    </>
  )
}

