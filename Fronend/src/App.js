import { Routes, Route, Link, useLocation } from 'react-router-dom';
// import './css/Mains.css';
import Main from './pages/trangChu'
import Home from './pages/HomePage/HomePage'
import DMXe from './pages/danhMucXe'
import Admin from './pages/Admin'
import LienHe from './pages/lienHe'
import DSCuaHang from './pages/danhSachCuaHang'
// import DangKy from './pages/Register'
// import DangNhap from './pages/Login'
import DSXe from './pages/xe'
import CTXe from './pages/ChiTietXe'
import PrivateRoute from './components/PrivateRoute'
import HeaderComponent from './components/HeaderCompoent/HeaderComponent';
import FooterComponent from './components/FooterComponent';
// import Profile from './pages/Profile';
import { useEffect } from 'react';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query'


function App() {
   // useEffect(() => {
     //   fetchApi()
      //}, [])
        const fetchApi = async () => {
        const res = await axios.get('http://localhost:3001/api/product/get-all')
        return res.data
      }
      const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })
      console.log('query', query)
      if (useLocation().pathname.includes("/admin"))
      return (<Admin/>)
    return (
        <>
            {/*phần bao quanh toàn bộ trang chủ*/}
            <div id="trangchu">
                <HeaderComponent/>

                <Routes>
                    <Route path="/" element={<Home/>} />

                    <Route path="/dmxe" element={<DMXe/>} />
                    <Route path="/lienhe" element={<LienHe/>} />
                    <Route path="/dscuahang" element={<DSCuaHang/>} />
                    <Route path="/dsxe" element={<DSXe/>} />        
                    <Route path="/ctxe" element={<CTXe/>} />                    
                    {/* <Route path="/dangky" element={<DangKy/>} />                    
                    <Route path="/dangnhap" element={<DangNhap/>} />    */}
                    <Route element={<PrivateRoute />}>
                    {/* <Route path='/profile' element={<Profile />} /> */}
                    <Route path="/admin" element={<Admin/>} /> 
        </Route>              
                </Routes>
                <FooterComponent/>
            </div>
        </>
    );
}

export default App;
