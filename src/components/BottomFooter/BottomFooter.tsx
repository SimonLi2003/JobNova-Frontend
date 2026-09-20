import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { FOOTER_HEIGHT } from '../../theme/layout'
const { Footer } = Layout

const menuItems: MenuProps['items'] = [
    { key: 'Jobs', label: 'Jobs' },
    { key: 'AI Mock Interview', label: 'AI Mock Interview'},
    { key: 'Me', label: 'Me'},
]

function BottomFooter() {
    return (
        <Footer
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                height: FOOTER_HEIGHT,
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                padding: 0,
            }}
        >
            <Menu mode="horizontal"
                items={menuItems}
                defaultSelectedKeys={['Jobs']}
                disabledOverflow
                style={{
                    flex: 1,
                    minWidth: 0,
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    borderBottom: 'none',
                    lineHeight: `${FOOTER_HEIGHT}px`,
                }}
            />
        </Footer>
    )
}

export default BottomFooter
