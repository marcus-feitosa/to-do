import { FaTrashAlt } from 'react-icons/fa'
import styles from './Task.module.css'
import { Tasks } from './TaskTable'

interface TaskProps{
    taskProps: Tasks;
    onDeleteTask: (task: Tasks) => void;
    onCheck: (task: Tasks) => void;
}




export function Task({ taskProps, onDeleteTask, onCheck }: TaskProps){

    function handleDoneTask() {
        const onDone = taskProps.done ? false : true
    
        const newTaskProps = { ...taskProps, done: onDone }
        onCheck(newTaskProps)
      }
    
      function handleDeleteTask() {
        onDeleteTask(taskProps)
      }

    return(
        <div className={styles.tasksContent}>
                <div className={styles.tasksContentStart}>
                <input onChange={handleDoneTask} type="checkbox"/>
                <p className={taskProps.done ? styles.completedTask:styles.incompleteTask}>{taskProps.content}</p>
                </div>
                <button onClick={handleDeleteTask}><FaTrashAlt /></button>
        </div>
    )
}