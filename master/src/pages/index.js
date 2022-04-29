import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, TeamOutlined } from '@ant-design/icons';
import { history, useDispatch } from 'umi'

const { Header, Content } = Layout;

export default (props) => {

  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e.key === "home") {
      dispatch({
        type: 'home/updateState',
        payload: {
          isMicroApp: false
        }
      })
    }
    history.push("/" + e.key);
  }
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" onClick={handleClick}>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="users" icon={<TeamOutlined />}>
            Users
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        {props.children}
      </Content>
    </Layout>
  );
}
