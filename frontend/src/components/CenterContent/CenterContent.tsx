import { Col, Layout, Row } from 'antd';
import ApplicationCard from './ApplicationCard/ApplicationCard'
const { Content } = Layout

function CenterContext() {
    return (
        <Content style={{ marginTop: 16 }}>
            <Row gutter={[0, 10]}>
                <Col span={24}>
                    <ApplicationCard />
                </Col>               
            </Row>
        </Content>
    )
}

export default CenterContext