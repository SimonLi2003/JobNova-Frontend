import { ConfigProvider, Layout, Menu } from "antd";
import type { LeftSiderMode } from "../../hooks/useResponsiveLayout";
import type { MenuProps } from "antd";
import {
  UserOutlined,
} from '@ant-design/icons';
import { PURPLE } from "../../theme/colors";
import { HEADER_HEIGHT } from "../../theme/layout";
const { Sider } = Layout


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

interface LeftSideBarProps {
    mode: LeftSiderMode;
    /** Height of the fixed footer, so the menu never ends up beneath it. */
    bottomOffset: number;
}

function LeftSideBar({ mode, bottomOffset }: LeftSideBarProps) {
    if (mode === 'hidden') {
        return null
    }

    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        itemSelectedBg: PURPLE,
                        itemSelectedColor: '#ffffff',
                        itemBorderRadius: 25,
                        itemHeight:50,
                        fontSize:18
                    }
                },
            }}
        >
        <Sider 
            width={240}
            collapsedWidth={80}
            collapsed={mode === 'rail'}
            trigger={null}
            style={{
                position: "sticky",
                top: HEADER_HEIGHT,
                height: `calc(100vh - ${HEADER_HEIGHT + bottomOffset}px)`,
                overflow: 'auto',
            }}
        >
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