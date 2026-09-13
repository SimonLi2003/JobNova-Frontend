import { Avatar, Col, Flex, Progress, Row, Typography } from 'antd'

const { Title, Text } = Typography

interface UpperJobInfoProp {
    percentMatch: number;
    jobTitle: string, 
    jobLocation: string;
    companyAvatarPath: string
    companyName: string;
}

function getMatchColor(percentMatch: number): string {
    if (percentMatch >= 80) return '#52c41a';
    if (percentMatch >= 50) return '#faad14';
    return '#ff4d4f';
}

function UpperJobInfo({percentMatch, 
                    jobTitle, 
                    jobLocation,
                    companyAvatarPath,
                    companyName} : UpperJobInfoProp) {
    return (
        <Flex gap={20}>
            <Progress
                type="circle"
                percent={percentMatch}
                strokeWidth={8}
                format={(percent) => (
                    <span>
                        <strong>{percent}%</strong>
                        <br />
                        Match
                    </span>
                )}
                status="normal"
                strokeColor={getMatchColor(percentMatch)}
                style={{
                    "--percent-match": percentMatch,
                } as React.CSSProperties}
            />
            <Flex vertical gap={4}>
                <Title level={5} style={{ margin: 0 }}>
                    {jobTitle}
                </Title>

                <Flex align="center" gap={8}>
                    <Avatar src={companyAvatarPath} size={24} />
                    <Text>{companyName}</Text>
                </Flex>

                <Text type="secondary">{jobLocation}</Text>
            </Flex>
        </Flex>

    )
}

export default UpperJobInfo