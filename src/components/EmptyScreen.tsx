import styles from './EmptyScreen.module.css';
import {HiOutlineClipboardList} from 'react-icons/hi'

export function EmptyScreen(){

    return(
    <div className={styles.empty}>
        <HiOutlineClipboardList size={56}/>
        <div className={styles.text}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    </div>
    )

}