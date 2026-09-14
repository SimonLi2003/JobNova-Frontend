import { ConfigProvider, Layout } from 'antd'
import TopBar from './components/TopBar/TopBar'
import LeftSideBar from './components/LeftSideBar/LeftSideBar'
import RightSideBar from './components/RightSideBar/RightSideBar'
import CenterContent from './components/CenterContent/CenterContent'

function App() {

  return (
    <ConfigProvider
      theme={{
        components:{
          Layout: {
            headerBg: '#ffffff',
            headerHeight: 80,
            siderBg: '#ffffff',
          }
        }
      }}
    >
      <Layout>
        <TopBar />
        <Layout hasSider={true} style={{ gap: 16 }}>
              <LeftSideBar />
              <CenterContent />
              <RightSideBar />
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default App
