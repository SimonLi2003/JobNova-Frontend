import { Avatar, Button, Flex, Progress, Typography } from 'antd'

const { Title, Text } = Typography

interface UpperJobInfoProp {
    percentMatch: number;
    jobTitle: string, 
    jobLocation: string;
    workingMode: string;
    companyAvatarPath: string
    companyName: string;
}

function getMatchColor(percentMatch: number): string {
    if (percentMatch >= 80) return '#52c41a';
    if (percentMatch >= 50) return '#faad14';
    return '#ff4d4f';
}

const jobTags = ["Full Time", "0 of 3 skills matched", "Mid-Level", "$65/yr-$70/yr"];

function UpperJobInfoPhone({percentMatch, 
                    jobTitle, 
                    jobLocation,
                    workingMode,
                    companyAvatarPath,
                    companyName} : UpperJobInfoProp) {
    return (
        <Flex vertical gap={16} align="center">
            <Title level={3} style={{ margin: 0 }}>
                {jobTitle}
            </Title>

            <Flex align="center"
                style={{
                    width: '100%',
                }}
            >
                <Progress
                    type="circle"
                    percent={percentMatch}
                    size={110}
                    strokeWidth={6}
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
                        flexShrink: 0,
                    } as React.CSSProperties}
                />
                <Flex vertical gap={8} align="center" style={{ flex: 1, minWidth: 0 }}>
                    <Flex align="center" gap={8} justify="center" style={{ minWidth: 0 }}>
                        <Avatar src={companyAvatarPath} size={24} style={{ flexShrink: 0 }} />
                        <Text>{companyName}</Text>
                    </Flex>
                    <Text type="secondary" style={{ textAlign: 'center' }}>{jobLocation}</Text>
                    <Text style={{ textAlign: 'center' }}>{workingMode}</Text>
                </Flex>
            </Flex>

            <Flex wrap justify="center" style={{ width: '100%' }}>
                {
                    jobTags.map((jobTag) => (
                        <Button
                            key={jobTag}
                            variant="outlined"
                            shape="round"
                            size="small"
                        >
                            {jobTag}
                        </Button>
                    ))
                }
            </Flex>
        </Flex>

    )
}

export default UpperJobInfoPhone