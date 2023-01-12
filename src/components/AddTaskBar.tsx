import styles from './AddTaskBar.module.css' 
import {FaPlusCircle} from 'react-icons/fa'
import { ChangeEvent, FormEvent, useState } from 'react';



export function AddTaskBar(){

    
    return(
        <div className={styles.divForm}>
            <form className={styles.form}>
                <textarea
                name="task" 
              
                placeholder="Adicione uma nova tarefa">
                </textarea>
                <button type='submit'>
                    Criar
                    <FaPlusCircle/>
                </button>
            </form>
        </div>
    )
}