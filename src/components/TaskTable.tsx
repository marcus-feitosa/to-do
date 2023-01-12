import styles from './TaskTable.module.css'
import {FaTrashAlt} from 'react-icons/fa'
import { Task } from './Task'
import { ChangeEvent, FormEvent, useState } from 'react';
import { AddTaskBar } from './AddTaskBar';



export function TaskTable(){
    const [tasks, setTasks] = useState([
        "Post muito legal ein"
      
    ])

    function deleteTask(taskToDelete: string){
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task !== taskToDelete;
        })
        setTasks(tasksWithoutDeletedOne);
    }
    return (
        <>
        <AddTaskBar/>
        <div className={styles.taskTable}>
            
            <div className={styles.tableStats}>
                <div className={styles.createdTasks}>
                    <span>Tarefas criadas<strong>5</strong></span>
                </div>
                <div className={styles.finishedTasks}>
                    <span>Concluidas<strong> 2 de 5</strong></span>
                </div>
            </div>

            {tasks.map(task => {
                return <Task key={task} taskContent={task} onDeleteTask={deleteTask} />
               })}
        </div>
        </>
    )
}