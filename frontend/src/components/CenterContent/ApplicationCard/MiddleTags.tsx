import { Button, Col, Flex, Row } from 'antd'
import CenterContext from '../CenterContent';

interface MiddleTagsProps {
    jobTags: string[];
}

function MiddleTags({jobTags} : MiddleTagsProps) {
    return (
        <Row justify="start" align="middle">
            <Flex gap={8}>
            {
                jobTags.map((jobTag) => (
                    <Col key={jobTag}>
                            <Button 
                                variant="outlined"
                                shape="round"
                                size="medium"
                            >
                                {jobTag}
                            </Button>
                    </Col>
                ))
            }
            </Flex>
        </Row>
    )
}

export default MiddleTags