import React from "react";
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
} from '@ant-design/icons';
import { HotelList } from "../HotelList/HotelList";
import style from "./LayoutMain.module.css";
import { Filter } from "../Filter/Filter";

const { Header, Sider, Content } = Layout;

export const LayoutMain: React.FC = () => {
    return (
        <>
            <Layout className={style.application_layout}>
                <Sider>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: 'Hotel',
                            }
                        ]}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                        }}
                    >
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Filter label="Открыть фильтры" title="Фильтры"/>
                        <HotelList />
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}