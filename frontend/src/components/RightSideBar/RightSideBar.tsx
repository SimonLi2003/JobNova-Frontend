import { Layout } from "antd";
import { HEADER_HEIGHT } from "../../theme/layout";

const { Sider } = Layout

const MARGIN_HEIGHT = 20;

interface RightSideBarProps {
    visible: boolean;
    bottomOffset: number;
}

function RightSideBar({ visible, bottomOffset }: RightSideBarProps) {
    if (!visible) {
        return null
    }

    return (
        <Sider 
            width={360}
            style={{
                position: "sticky",
                top: MARGIN_HEIGHT + HEADER_HEIGHT,
                height: `calc(100vh - ${MARGIN_HEIGHT + HEADER_HEIGHT + bottomOffset}px)`,
                overflow: 'auto',
            }}
        >
            here is a sider
        </Sider>
    )
}   

export default RightSideBar