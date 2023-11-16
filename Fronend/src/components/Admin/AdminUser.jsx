import React from "react";
import { PlusOutlined } from '@ant-design/icons'
import { WrapperHeader } from "./style";
import { Button } from "antd";
import TableComponent from "./TableComponent";

const AdminUser = () => {
    return(
        <div>
            <WrapperHeader>Quản lý người dùng</WrapperHeader>
            <div style={{ marginTop: '10px' }}>
            <Button style={{height: '100px', width: '100px', borderRadius: '6px', borderStyle: 'dashed' }}>
                <PlusOutlined style={{ fontSize: '60px' }} />
            </Button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <TableComponent />
            </div>
        </div>
    )
}

export default AdminUser