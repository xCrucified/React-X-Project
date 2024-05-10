import React from 'react'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

export default function RightSide() {
    return (
        <>
        <div className='input-search'>
            <Search placeholder="Search" onSearch styles/>
        </div>
        </>
    );
}
