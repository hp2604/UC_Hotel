
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import DishManagementPage from './pages/DishManagement';
import Payment from './pages/Payment';
import Tables from './pages/Tables';
import Orders from './pages/Orders';
import MenuList from './component/MenuList';


function App() {
  
  return (
    <>
   
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/tables" element={<Tables/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/payments" element={<Payment/>}/>
        <Route path="/dish" element={<DishManagementPage/>}/>
        <Route path="/menuList" element={<MenuList />}/>
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  )
}


export default App
