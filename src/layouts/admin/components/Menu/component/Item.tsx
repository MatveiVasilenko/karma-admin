import { FC } from "react"
import { Link, useLocation } from "react-router-dom"


interface Imenu  {
    elem: {
        id: number,
        title: string,
        link: string,
        img?: any,
    },
    idx: number
}
const Item:FC<Imenu>= ({elem,idx}) => {

    const { pathname } = useLocation();
    return (
        <Link style={{
            position:'relative',
            transform: `translateY(-${10 * (idx + 1)}px)`,
           
        }} className={pathname === elem.link ? "menuItem menuItem__active" : "menuItem"}   to={elem.link}>
            <div>
                <img src={elem.img} alt="" />
            </div>
           <div className="menuItem__text" >{elem.title}</div>
        </Link>  
    )
}

export default Item