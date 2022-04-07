import { FC, } from "react"
import Item from "./component/Item"
import dashSvg from './../../../../images/menu/dash.svg'
import ordersSvg from './../../../../images/menu/orders.svg'
import partnersSvg from './../../../../images/menu/partners.svg'


interface Iclasses {
    // classes: any;
}

const Menu:FC<Iclasses>= ({
    // classes
}) => {

    const menu = [
        {
            id: 0,
            title: 'Дашборд',
            link: '/dashboard',
            img: dashSvg
        },
        {
            id: 1,
            title: 'Ордера',
            link: '/orders',
            img: ordersSvg
        },
        {
            id: 2,
            title: 'Партнеры',
            link: '/partners',
            img: partnersSvg
        },
        {
            id: 3,
            title: 'fgddfd',
            link: '/link3'
        }      
    ]
    
    return (
        <div>
           {menu.map((elem, idx) => {
               return (
                <Item 
                   key={idx} 
                   elem={elem} 
                   idx={idx}
                />
               )
           })}
        </div>
    )
}
export default Menu