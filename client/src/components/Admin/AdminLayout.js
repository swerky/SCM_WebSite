import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  CalendarOutlined
} from '@ant-design/icons';
const { Header, Content, Sider } = Layout;
import './AdminLayout.less';

const AdminLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="layoutAdmin">
      <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <UserOutlined/>
            <span>Membres</span>
          </Menu.Item>
          <Menu.Item key="2">
            <CalendarOutlined />
            <span>Evenements</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '16px 16px' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;