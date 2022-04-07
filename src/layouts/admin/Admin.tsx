import { FC, useState } from "react";
import Menu from "./components/Menu/Menu";
import Header from './components/Header/Header'
import './../../styles/layouts/admin/admin.scss'


const Admin:FC = ({
    children
}) => {
    const [activeMenu, setActiveMenu] = useState<number>(0)
   
    return (
        <>
        <Header 
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
             />
        <div style={{display: 'flex', marginTop: '30px'}}>
            <div style={{width: '10%'}}>
                <Menu />
            </div>
            <div style={{width: '90%'}}>
                {children}
            </div>
        </div>
        </>
    );
}

export default Admin;
