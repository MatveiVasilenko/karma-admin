import { FC } from "react";

import classes from './boardModal.module.scss'


interface Users {
    elem: {
        id: number,
        money: string,
        status: string,
        type: string,
        created_at: string
    }
}

const Board:FC<Users>= ({elem}) => {

    return (
       <div >
           <div >{elem.id}</div>
       </div>
    )
}

export default Board