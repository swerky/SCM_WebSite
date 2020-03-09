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
    <Layout style={{ minHeight: '100%' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <span>Membres</span>
          </Menu.Item>
          <Menu.Item key="2">
            <span>Evenements</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;