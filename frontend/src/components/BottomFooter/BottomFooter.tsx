import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import type { CSSProperties } from 'react'
import { FOOTER_HEIGHT } from '../../theme/layout'
const { Footer } = Layout

// antd's own { type: 'divider' } draws a horizontal rule for vertical and inline
// menus; in a horizontal one it collapses to an invisible zero-width flex child.
// A leading border on each item after the first gives the separator instead.
const separator: CSSProperties = {
    borderInlineStart: '1px solid rgba(5, 5, 5, 0.06)',
}

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
