import { ConfigProvider, Layout } from 'antd'
import TopBar from './components/TopBar/TopBar'
import LeftSideBar from './components/LeftSideBar/LeftSideBar'
import RightSideBar from './components/RightSideBar/RightSideBar'
import CenterContent from './components/CenterContent/CenterContent'
import BottomFooter from './components/BottomFooter/BottomFooter'
import { useResponsiveLayout } from './hooks/useResponsiveLayout'
import { FOOTER_HEIGHT, HEADER_HEIGHT, HEADER_HEIGHT_COMPACT } from './theme/layout'

function App() {
  const { leftSiderMode, showRightSider, isPhone } = useResponsiveLayout()
  const showFooter = isPhone
  const bottomOffset = showFooter ? FOOTER_HEIGHT : 0

  return (
    <ConfigProvider
      theme={{
        components:{
          Layout: {
            headerBg: '#ffffff',
            headerHeight: isPhone ? HEADER_HEIGHT_COMPACT : HEADER_HEIGHT,
            siderBg: '#ffffff',
          }
        }
      }}
    >
      <Layout>
        <TopBar isPhone={isPhone} />
        <Layout hasSider={true} style={{ gap: 16, paddingBottom: bottomOffset }}>
              <LeftSideBar mode={leftSiderMode} bottomOffset={bottomOffset} />
              <CenterContent isPhone={isPhone}/>
              <RightSideBar visible={showRightSider} bottomOffset={bottomOffset} />
        </Layout>
        {showFooter && <BottomFooter />}
      </Layout>
    </ConfigProvider>
  )
}

export default App
