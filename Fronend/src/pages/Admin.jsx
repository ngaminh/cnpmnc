import { Flex, Menu } from "antd";
import React, { useState } from "react";
import { getItem } from '.././utils';
import { AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import HeaderComponent from '../components/HeaderComponent';
import AdminUser from '../components/Admin/AdminUser'
import AdminProduct from '../components/Admin/AdminProduct'


const Admin = () => {
    const items = [
        getItem('Người dùng', 'users', <UserOutlined />),
        getItem('Sản phẩm', 'products', <AppstoreOutlined />),
      ];

        const [ keySelected, setKeySelected] = useState('') 
        
        const renderPage = (key) => {
            switch (key) {
                case 'users':
                  return (
                    <AdminUser />
                  )
                case 'products':
                  return (
                    <AdminProduct />
                  )
                  default:
                return <></>    
            } 
        }


        const handleOnClick = ({ key }) => {
            setKeySelected(key)
        }
        console.log('keySelected', keySelected)
        return (
            <>
                <HeaderComponent/>
            <div style={{ display: 'flex',}}>
            <Menu
              mode="inline" 
              style={{
                width: 256,
                boxShadow: '1px 1px 2px #ccc',
                height: '100vh'
              }}
              items={items}
              onClick={handleOnClick}
            />
            <div style={ {flex: 1, padding: '15px'}} >
                {renderPage(keySelected)}
            </div>
            </div> 
            </>
          );
        };
export default Admin;