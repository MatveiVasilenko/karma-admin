import { FC, } from "react";
import User from "./Board";
import classes from './boardModal.module.scss'

interface Board {
    userModal: any,
    setUserModal: any 
}


const BoardModal:FC<Board>= ({userModal, setUserModal}) => {
   
    const closeModal = () => {
        setUserModal(false)
    }
    
    return (
        <div>
            
            <div className={userModal ? [classes.modal, classes.modal__active].join(' ') : classes.modal}>
                <div className={classes.modal__window}>
                    <div className={classes.closeModal} onClick={closeModal}>X</div>
                
                </div>
              
            </div> 
        
        </div>
    )
}

export default BoardModal