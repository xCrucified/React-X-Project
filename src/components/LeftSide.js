import React, { useEffect, useState } from 'react';
import { HomeFilled, SearchOutlined, UsbTwoTone } from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Link, useLocation } from 'react-router-dom';

const items = [
  {
    key: "/",
    label: <Link to="/">Home</Link>,
    icon: <HomeFilled style={{'font-size': '30px'}}/>
  },
  {
    key: "/explore",
    label: <Link to="/explore">Explore</Link>,
    icon: <SearchOutlined style={{'font-size': '30px'}}/>
  },
  {
    key: "/profile",
    label: <Link to="/profile">Profile</Link>,
    icon: <UsbTwoTone style={{'font-size': '30px'}}/>
  },
]

export default function LeftSide() {
  let location = useLocation();

  const [current, setCurrent] = useState(location.pathname);

  useEffect(() => {
    if (location) {
      if (current !== location.pathname) {
        setCurrent(location.pathname);
      }
    }
  }, [location, current]);

  return (
    <div>
      <Sider  className='container'>
        <Menu theme={'dark'} mode="vertical" className='menu-style' defaultSelectedKeys={['4']} items={items} />
      </Sider>
    </div>
  );
};