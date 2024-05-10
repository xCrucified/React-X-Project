import { Button } from 'antd'
import { Input } from "antd";
import { SettingOutlined } from '@ant-design/icons';

import React from 'react'
import Posts from '../Posts';

export default function Home() {
    return (
        <>
            <div className="post-header">
                <Button type="secondary">For you</Button>
                <Button type="secondary">Following</Button>
                <Button
                    type="secondary"
                    icon={<SettingOutlined />}>
                </Button>
            </div>
            <hr></hr>
            <div className="push-post">
                <div>
                    <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"></img>
                </div>
                <div>
                    <Input type="text"></Input>
                </div>
            </div>
            <hr></hr>
            <Posts />
        </>
    )
}
