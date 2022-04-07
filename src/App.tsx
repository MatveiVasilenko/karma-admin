import React from 'react';
import './styles/main/App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './routes/main/Main';
import Auth from './routes/auth/Auth';
import AdminMain from './routes/admin/AdminMain';
import Orders from './routes/orders/Orders';
import Partners from './routes/partner/Partners';
import DashBoard from './routes/dashboard/DashBoard';

function App() {
    return (
        <div style={{background:"#F7F6FF"}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />}/>
                    <Route path='login' element={<Auth />}/>
                    <Route path="/admin" element={<AdminMain />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                </Routes>
            </BrowserRouter>
        </div>
  );
}

export default App;
