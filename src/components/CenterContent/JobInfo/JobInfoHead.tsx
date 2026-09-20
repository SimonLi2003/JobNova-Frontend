import { Avatar, Flex, Progress, Typography } from "antd";
const { Title, Text } = Typography;

interface JobInfoHeadProps {
    jobTitle: string;
    companyName: string;
    jobLocation: string;
    workingMode: string;
    percentMatch: number;
    companyAvatarPath: string;
}

function getMatchColor(percentMatch: number): string {
    if (percentMatch >= 80) return '#52c41a';
    if (percentMatch >= 50) return '#faad14';
    return '#ff4d4f';
}

function JobInfoHead({ jobTitle, 
                        companyName, 
                        jobLocation, 
                        workingMode, 
                        percentMatch, 
                        companyAvatarPath} : JobInfoHeadProps) {
        return(
            <Flex justify="space-between">
                <Flex>
                    <Avatar></Avatar>
                    <Flex vertical gap={10} align="flex-start" justify="space-between">
                        <Title level={2} style={{ margin: 0 }}>
                            {jobTitle}
                        </Title>

                        <Flex align="center" gap={8}  justify="flex-start">
                            <Avatar src={companyAvatarPath} size={24} />
                            <Text>{companyName}</Text>
                        </Flex>

                        <Flex gap={20}>
                            <Text type="secondary">{jobLocation}</Text>
                            <Text>{workingMode}</Text>
                        </Flex>
                    </Flex>
                    
                </Flex>
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
            </Flex>
        );
}

export default JobInfoHead;