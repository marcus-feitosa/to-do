import styles from './TaskTable.module.css'

import { Task } from './Task'
import { ChangeEvent, FormEvent, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';



export function TaskTable(){
    const [tasks, setTasks] = useState([
        "Post muito legal ein"
    ])

    const [newTaskText, setNewTaskText] = useState('')

    function deleteTask(taskToDelete: string){
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task !== taskToDelete;
        })
        setTasks(tasksWithoutDeletedOne);
    }
   
    function handleCreateNewTask(event: FormEvent){
        event.preventDefault()
        
        setTasks([...tasks, newTaskText]);
        setNewTaskText('');
    }
    
    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
         setNewTaskText(event.target.value);
    }

    return (
        <>

        <div onSubmit={handleCreateNewTask} className={styles.divForm}>
            <form  className={styles.form}>
                <textarea
                name="task" 
                value={newTaskText} 
                onChange={handleNewTaskChange}
                placeholder="Adicione uma nova tarefa">
                </textarea>
                <button type='submit'>
                    Criar
                    <FaPlusCircle/>
                </button>
            </form>
        </div>


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