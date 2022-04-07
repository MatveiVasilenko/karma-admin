import { FC, useEffect, useState } from "react";
import logoPng from './../../../../images/header/logo/logo.png'
import { useNavigate, useLocation } from 'react-router-dom';

interface Iclasses  {
    // classes: any;
    activeMenu: number;
    setActiveMenu: any;
}

const Header:FC<Iclasses>= ({activeMenu, setActiveMenu}) => {
    const { pathname } = useLocation();
    const navigate = useNavigate ();

    console.log(pathname)
    const menu = [
        {
            id: 0,
            title: 'Дашборд',
            link: '/dashboard',
        },
        {
            id: 1,
            title: 'Ордера',
            link: '/orders',
        },
        {
            id: 2,
            title: 'Партнеры',
            link: '/partners',
        }   
    ]
    console.log(activeMenu)
    return (
        <div className="header">
            <div className="header__logo">
                <img src={logoPng} alt="" />
            </div>
            <div className="header__menuBlock">
                <div className="header__menu">
                {menu.map((elem, idx) => {
                    return (
                        <div key={`${elem.id + idx}`}  className="header__menu" >
                           <div className={pathname === elem.link ?
                            "header__menuItem header__menuItemActive" : "header__menuItem"}
                            onClick={() => {
                                navigate(`${elem.link}`)
                            }}
                                >{elem.title}</div>
                        </div>  
                        
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Header