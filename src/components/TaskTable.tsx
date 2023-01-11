import styles from './TaskTable.module.css'
import {FaTrashAlt} from 'react-icons/fa'

export function TaskTable(){
    return (
        <div className={styles.taskTable}>

            <div className={styles.tableStats}>
                <div className={styles.createdTasks}>
                    <span>Tarefas criadas<strong>5</strong></span>
                </div>
                <div className={styles.finishedTasks}>
                    <span>Concluidas<strong> 2 de 5</strong></span>
                </div>
            </div>


            <div className={styles.tasksContent}>
                <div className={styles.tasksContentStart}>
                <input type="checkbox"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <button><FaTrashAlt /></button>
            </div>

            
            <div className={styles.tasksContent}>
                <div className={styles.tasksContentStart}>
                <input type="checkbox"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <button><FaTrashAlt /></button>
            </div>

            
            <div className={styles.tasksContent}>
                <div className={styles.tasksContentStart}>
                <input type="checkbox"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <button><FaTrashAlt /></button>
            </div>
        </div>
    )
}