import React from 'react';
import { Layout as AntdLayout, theme } from 'antd';
import { Outlet } from "react-router-dom";
import RightSide from '../RightSide';
import LeftSide from '../LeftSide';
import Home from './home';

const { Content } = AntdLayout;

export default function Layout() {

    return (
        <AntdLayout className='Layout'>
            <div className='left-side'>
                <LeftSide/>
            </div>
            <Content className='main'>
                <div>
                    <Home/>
                </div>
            </Content>
            <div className='right-side'>
                <RightSide/>
            </div>
        </AntdLayout>
    )
}
