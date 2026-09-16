import { Flex, Layout } from 'antd';
import ApplicationCard from './ApplicationCard/ApplicationCard'
import TopCenterMisBar from '../TopCenterMiscBar/TopCenterMiscBar';
const { Content } = Layout

interface CenterContentProp {
    isPhone: boolean;
}

function CenterContext({ isPhone } : CenterContentProp) {
    return (
        // minWidth: 0 lets the content actually shrink. Without it the flex
        // item floors at its min-content width and pushes the shell wider
        // than the viewport instead of reflowing.
        <Content 
            style={{ marginTop: 16, minWidth: 0 }}
        >
            <Flex vertical gap={16}>
                <Flex>
                    <TopCenterMisBar isPhone={isPhone} />
                </Flex>
                <Flex vertical gap={10}>
                    <ApplicationCard isPhone={isPhone}/>
                </Flex>
            </Flex>
        </Content>
    )
}

export default CenterContext
