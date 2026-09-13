import { Row, Col, Card, Divider, Progress, Button, ConfigProvider, Avatar} from 'antd'

const { Meta } = Card


import UpperJobInfo from './UpperJobInfo'
import MiddleTags from './MiddleTags'
import ButtomApplyInfo from './BottomApplyInfo'
import { useEffect, useState } from 'react';

type ApplicationInfo = {
    percentMatch: number,
    jobTitle: string, 
    companyAvatarPath: string,
    companyName: string, 
    jobLocation: string, 
    workingMode: string, 
    jobTags: string[], 
    timePosted: number, 
    numOfApplicants: number, 
    jobLink: string, 
    isHearted: boolean
};

function ApplicationCard() {
    const [applicationsInfo, setApplicationsInfo] = useState<ApplicationInfo[]>([])

    useEffect(() => {
        setApplicationsInfo([
            {
                percentMatch : 85, 
                jobTitle: "Web Application Developer", 
                companyAvatarPath: "www.abcde.xyz", 
                companyName: "backd business funding", 
                jobLocation: "Austin, Texas Matropolitan Area", 
                workingMode: "On-site", 
                jobTags: ["Full Time", "0 of 3 skills matched", "Mid-Level", "$65/yr-$70/yr"], 
                timePosted: 1789325624000,
                numOfApplicants: 25, 
                jobLink: "www.jobnova.com", 
                isHearted: false
            }
        ])
    }, [])

    return (
        <ConfigProvider
            theme={{
                components:{
                    Progress:{

                    },
                }
            }}
        >
        <>
            {applicationsInfo.map((applicationInfo) => (
                <Card 
                    key={applicationInfo.jobLink}
                    style={{ marginBottom: 16 }}
                >
                    <Row align="middle" gutter={16}>
                        <Col flex="none">
                            <UpperJobInfo 
                                percentMatch={applicationInfo.percentMatch}
                                jobTitle={applicationInfo.jobTitle}
                                jobLocation={applicationInfo.jobLocation}
                                companyAvatarPath={applicationInfo.companyAvatarPath}
                                companyName={applicationInfo.companyName}
                            />
                        {/* <Meta
                            title={applicationInfo.jobTitle}
                            // avatar={companyAvatarPath}
                            avatar={<Avatar src = {applicationInfo.companyAvatarPath} />}
                            description={`${applicationInfo.companyName} - ${applicationInfo.jobLocation}`}
                        /> */}
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            <MiddleTags jobTags = {applicationInfo.jobTags} />
                        </Col>
                    </Row>

                    <Divider/>

                    <Row>
                        <Col span={24}>
                            <ButtomApplyInfo 
                                hoursAfterJobPosted={Math.floor((Date.now() - applicationInfo.timePosted) / (1000 * 60 * 60))}
                                numofApplicants={applicationInfo.numOfApplicants}
                            />
                        </Col>
                    </Row>
                </Card>
            ))}
        </>
        </ConfigProvider>
    )
}

export default ApplicationCard