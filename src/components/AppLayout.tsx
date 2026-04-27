import { Layout, Menu, theme } from 'antd';
import type { ItemType, MenuItemGroupType, MenuItemType } from 'antd/es/menu/interface';
import { useLocation } from 'wouter';
import groups from '../data';

const { Sider, Content } = Layout;

function buildMenuItems(): ItemType[] {
  return groups.map((group): MenuItemGroupType => {
    if (!group.matches?.length) {
      const item: MenuItemGroupType = {
        type: 'group',
        label: group.name,
        children: [],
      };
      return item;
    }
    const item: MenuItemGroupType = {
      type: 'group',
      label: group.name,
      children: group.matches.map(
        (match): MenuItemType => ({
          key: `/${group.key}/${match.key}`,
          label: match.name,
        }),
      ),
    };
    return item;
  });
}

const menuItems = buildMenuItems();

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [location, navigate] = useLocation();
  const { token } = theme.useToken();

  const selectedKeys = [location];

  return (
    <Layout style={{ minHeight: '100vh', background: token.colorBgLayout }}>
      <Sider
        width={220}
        style={{
          background: token.colorBgContainer,
          borderRight: `1px solid ${token.colorBorderSecondary}`,
          position: 'fixed',
          height: '100vh',
          left: 0,
          top: 0,
          overflow: 'auto',
        }}
      >
        <div
          style={{
            padding: '16px 24px',
            fontSize: 18,
            fontWeight: 700,
            color: token.colorTextHeading,
            borderBottom: `1px solid ${token.colorBorderSecondary}`,
          }}
        >
          FrontBench
        </div>
        <Menu
          mode="inline"
          selectedKeys={selectedKeys}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
          style={{ border: 'none' }}
        />
      </Sider>
      <Layout style={{ marginLeft: 220, minHeight: '100vh', background: token.colorBgLayout }}>
        <Content
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
