import { Flex, Layout } from 'antd';
import JobCard from './JobCard/JobCard'
import TopCenterMisBar from '../TopCenterMiscBar/TopCenterMiscBar';
import JobInfo from './JobInfo/JobInfo';
import { useState } from 'react';
const { Content } = Layout

interface CenterContentProp {
    isPhone: boolean;
}

function CenterContext({ isPhone } : CenterContentProp) {

    const [cardSelected, setCardSelected] = useState<string | null>(null);

    return (
        <Content 
            style={{ marginTop: 16 }}
        >
            {cardSelected === null &&
                <Flex vertical gap={16}>
                    <Flex>
                        <TopCenterMisBar 
                            isPhone={isPhone} 
                            cardSelected={cardSelected} 
                            setCardSelected={setCardSelected} />
                    </Flex>
                    <Flex vertical gap={10}>
                        <JobCard isPhone={isPhone} setCardSelected={setCardSelected} />
                    </Flex>
                </Flex>
            }

            {cardSelected !== null &&
                <Flex vertical gap={16}>
                    <TopCenterMisBar 
                        isPhone={isPhone} 
                        cardSelected={cardSelected} 
                        setCardSelected={setCardSelected} />
                    <JobInfo />
                </Flex>
            }
        </Content>
    )
}

export default CenterContext
