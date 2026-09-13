import { ConfigProvider, Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import {
  UserOutlined,
} from '@ant-design/icons';
const Sider = Layout.Sider

type MenuItem = Required<MenuProps>['items'][number];

const menuItems: MenuItem[] = [
    {key: 0, label: 'Jobs', icon: <UserOutlined />},
    {key: 1, label: 'AI Mock Interview', icon: <UserOutlined />},
    {key: 2, label: 'Resume' , icon: <UserOutlined />},
    {type: "divider"},
    {key: 3, label: 'Profile' , icon: <UserOutlined />},
    {key: 4, label: 'Setting' , icon: <UserOutlined />},
    {type: "divider"},
    {key: 5, label: 'Subscription' , icon: <UserOutlined />},
    {key: 6, label: 'Extra Credits' , icon: <UserOutlined />},
]

function LeftSideBar() {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        itemSelectedBg: '#a355d4',
                        itemSelectedColor: '#ffffff',
                        itemBorderRadius: 25,
                        itemHeight:50,
                        fontSize:18
                    }
                },
            }}
        >
        <Sider width={240}>
            <Menu 
                items={menuItems} 
                mode="inline" 
                defaultSelectedKeys = {['0']}
                style={{ 
                    textAlign: 'left', 
                    fontWeight: 500
                }}
            />
        </Sider>
        </ConfigProvider>
    )
}

export default LeftSideBar;