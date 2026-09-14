import { Row, Col, Card, Divider, Progress, Button, ConfigProvider, Avatar, Flex} from 'antd'

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
                percentMatch : 64, 
                jobTitle: "Web Application Developer", 
                companyAvatarPath: "www.abcde.xyz", 
                companyName: "Backd Business Funding", 
                jobLocation: "Austin, Texas Matropolitan Area", 
                workingMode: "On-site", 
                jobTags: ["Full Time", "0 of 3 skills matched", "Mid-Level", "$65/yr-$70/yr"], 
                timePosted: 1789325624000,
                numOfApplicants: 25, 
                jobLink: "www.bbf.com", 
                isHearted: false
            }, 
            {
                percentMatch : 93, 
                jobTitle: "Software Engineering, Network Infrastructure", 
                companyAvatarPath: "www.abcde.xyz", 
                companyName: "Cursor AI", 
                jobLocation: "Sunnyvale, CA", 
                workingMode: "On-site", 
                jobTags: ["Full Time", "5+ years exp", "Mid-Level", "$161k/yr-$239k/yr"], 
                timePosted: 1789318624000,
                numOfApplicants: 25, 
                jobLink: "www.cursorai.com", 
                isHearted: true
            }, 
            {
                percentMatch : 82, 
                jobTitle: "Full-Stack Software Engineer (Web Developer)", 
                companyAvatarPath: "www.abcde.xyz", 
                companyName: "Simons Foundation", 
                jobLocation: "New York, NY", 
                workingMode: "On-site", 
                jobTags: ["Full Time", "5+ years exp", "Mid-Level", "$125k/yr-$140k/yr"], 
                timePosted: 1789318624000,
                numOfApplicants: 25, 
                jobLink: "www.cursorai.com", 
                isHearted: false
            }
        ])
    }, [])

    return (
        <ConfigProvider
            theme={{
                components:{
                    Divider: {
                        lineWidth: 1,
                    }
                }
            }}
        >
            <>
                {applicationsInfo.map((applicationInfo) => (
                    <Card 
                        key={applicationInfo.jobLink}
                        style={{ marginBottom: 16 }}
                    >
                        <Flex vertical gap={20}>
                            <UpperJobInfo 
                                percentMatch={applicationInfo.percentMatch}
                                jobTitle={applicationInfo.jobTitle}
                                jobLocation={applicationInfo.jobLocation}
                                companyAvatarPath={applicationInfo.companyAvatarPath}
                                companyName={applicationInfo.companyName}
                            />
                            <MiddleTags jobTags = {applicationInfo.jobTags} />
                            {/* The parent Flex applies gap={20} between every
                                child. A negative margin here claws some of it
                                back so only the divider sits tighter. The
                                effective space is gap + this margin. */}
                            <Divider style={{ margin: '-8px 0' }} />
                            <ButtomApplyInfo 
                                hoursAfterJobPosted={Math.floor((Date.now() - applicationInfo.timePosted) / (1000 * 60 * 60))}
                                numofApplicants={applicationInfo.numOfApplicants}
                            />
                        </Flex>
                    </Card>
                ))}
            </>
        </ ConfigProvider>
    )
}

export default ApplicationCard