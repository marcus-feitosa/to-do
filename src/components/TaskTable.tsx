import styles from './TaskTable.module.css'

import { Task } from './Task'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { EmptyScreen } from './EmptyScreen';
import { uuid } from 'uuidv4';

export interface Tasks {
    id: string;
    done: boolean;
    content: string;
  }

export function TaskTable(){
    

    const [tasks, setTasks] = useState<Tasks[]>([])

    const [newTaskText, setNewTaskText] = useState('')

    function deleteTask(taskToDelete: Tasks) {
    const taskWhithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskToDelete.id
    })

    setTasks(taskWhithoutDeletedOne)
  }


    function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([
      {
        id: newTaskText,
        done: false,
        content: newTaskText
      },
      ...tasks
    ])

    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esta campo é obrigatório!')
  }


  function doneTask(taskToDone: Tasks) {
    const taskWhithoutUpdate = tasks.map(task => {
      if (task.id === taskToDone.id) {
        return taskToDone
      } else {
        return task
      }
    })

    setTasks(taskWhithoutUpdate)
  }

    const totalTasks = tasks.length
    const totalTasksDone = tasks.filter(
        task => task.done === true
    ).length

    return (
        <>
        <div onSubmit={handleCreateNewTask} className={styles.divForm}>
            <form  className={styles.form}>
                <input
                name="task" 
                value={newTaskText} 
                onChange={handleNewTaskChange}
                onInvalid={handleNewTaskInvalid}
                required
                placeholder="Adicione uma nova tarefa">
                </input>
                <button type='submit'>
                    Criar
                    <FaPlusCircle/>
                </button>
            </form>
        </div>


        <div className={styles.taskTable}>
            
            <div className={styles.tableStats}>
                <div className={styles.createdTasks}>
                    <span>Tarefas criadas<strong>{totalTasks}</strong></span>
                </div>
                <div className={styles.finishedTasks}>
                    <span>Concluidas<strong> {totalTasksDone} de {totalTasks}</strong></span>
                </div>
            </div>

            
        {tasks.length === 0 ? (
            <EmptyScreen/>
        ) : (
        tasks.map(task => {
          return (
            <Task
              key={task.id}
              taskProps={task}
              onCheck={doneTask}
              onDeleteTask={deleteTask}
            />
            )
         })
        )}
        </div>
        </>
    )
}

function uuidv4(): string {
    throw new Error('Function not implemented.');
}
