import styles from './TaskTable.module.css'

import { Task } from './Task'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { EmptyScreen } from './EmptyScreen';



export function TaskTable(){
    

    const [newTaskText, setNewTaskText] = useState('')

    const [newCheck, setNewCheck] = useState(true);

    const [newTasks, setNewTasks] = useState(['Texto']);

    function deleteTask(taskToDelete: string){
        const tasksWithoutDeletedOne = newTasks.filter(task => {
            return task !== taskToDelete;
        })
        setNewTasks(tasksWithoutDeletedOne);
    }
   
    function handleCreateNewTask(event: FormEvent){
        event.preventDefault()
        
        setNewTasks([...newTasks, newTaskText]);
        setNewTaskText('');
    }
    
    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
         setNewTaskText(event.target.value);
    }

    function handleChecked(){
        setNewCheck(!newCheck);

        console.log(newCheck);
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
                    <span>Tarefas criadas<strong>{newTasks.length}</strong></span>
                </div>
                <div className={styles.finishedTasks}>
                    <span>Concluidas<strong> 2 de 5</strong></span>
                </div>
            </div>

            
            {newTasks.map(task => { if(newTasks.length==0){
                return<EmptyScreen/>
            }else{
                return <Task className={newCheck ? styles.incompleteTask: styles.completedTask } isChecked={newCheck} key={task} taskContent={task} onDeleteTask={deleteTask} onCheck={handleChecked}/>
            }
               })}
        </div>
        </>
    )
}