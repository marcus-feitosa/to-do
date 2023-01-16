import { FaTrashAlt } from 'react-icons/fa'
import styles from './Task.module.css'

interface TaskProps{
    taskContent:string;
    isChecked:boolean;
    className:string;
    onDeleteTask: (content:string) => void;
    onCheck: () => void;
}




export function Task(props:TaskProps){

    function handleDeleteComment(){
        props.onDeleteTask(props.taskContent);
        }

    function handleCheck(){
            props.onCheck();
            }

    return(
        <div className={styles.tasksContent}>
                <div className={styles.tasksContentStart}>
                <input onChange={handleCheck} type="checkbox"/>
                <p className={props.className}>{props.taskContent}</p>
                </div>
                <button onClick={handleDeleteComment}><FaTrashAlt /></button>
        </div>
    )
}