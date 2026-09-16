import { Layout } from 'antd'
import { FOOTER_HEIGHT } from '../../theme/layout'
const { Footer } = Layout

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
                justifyContent: 'center',
            }}
        >
            here is a footer
        </Footer>
    )
}

export default BottomFooter
