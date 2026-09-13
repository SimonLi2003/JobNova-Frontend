import { Layout } from "antd";

const { Sider } = Layout
  
function RightSideBar() {
    return (
        <Sider 
            width={240}
            style={{ marginTop: 16 }}
        >
            here is a sider
        </Sider>
    )
}   

export default RightSideBar