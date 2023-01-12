import { FaTrashAlt } from 'react-icons/fa'
import styles from './Task.module.css'

interface TaskProps{
    taskContent:string;
    onDeleteTask: (content:string) => void;
}




export function Task(props:TaskProps){

    function handleDeleteComment(){
        props.onDeleteTask(props.taskContent);
        }

    return(
        <div className={styles.tasksContent}>
                <div className={styles.tasksContentStart}>
                <input type="checkbox"/>
                <p>{props.taskContent}</p>
                </div>
                <button onClick={handleDeleteComment}><FaTrashAlt /></button>
        </div>
    )
}