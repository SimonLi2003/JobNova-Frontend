import { Row, Col, Card, Divider, Progress, Button, ConfigProvider, Avatar, Flex} from 'antd'

const { Meta } = Card


import UpperJobInfo from './UpperJobInfo'
import MiddleTags from './MiddleTags'
import BottomApplyInfo from './BottomApplyInfo'
import { useEffect, useState } from 'react';
import UpperJobInfoPhone from './Phone/UpperJobInfoPhone';
import BottomApplyInfoPhone from './Phone/BottomApplyInfoPhone';

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

interface ApplcicationCardProps {
    isPhone: boolean;
}

function ApplicationCard({ isPhone } : ApplcicationCardProps) {
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
                        hoverable
                        onClick={() => window.open(applicationInfo.jobLink, "_blank")}
                    >
                        {isPhone && (
                            <Flex vertical gap={20}>
                                <UpperJobInfoPhone 
                                    percentMatch={applicationInfo.percentMatch}
                                    jobTitle={applicationInfo.jobTitle}
                                    jobLocation={applicationInfo.jobLocation}
                                    workingMode={applicationInfo.workingMode}
                                    companyAvatarPath={applicationInfo.companyAvatarPath}
                                    companyName={applicationInfo.companyName}
                                />
                                <Divider style={{ margin: '-8px 0' }} />
                                <BottomApplyInfoPhone 
                                    hoursAfterJobPosted={Math.floor((Date.now() - applicationInfo.timePosted) / (1000 * 60 * 60))}
                                    numofApplicants={applicationInfo.numOfApplicants}
                                />
                        </Flex>
                        )}                    

                        {!isPhone && (
                            <Flex vertical gap={20}>
                                <UpperJobInfo 
                                    percentMatch={applicationInfo.percentMatch}
                                    jobTitle={applicationInfo.jobTitle}
                                    jobLocation={applicationInfo.jobLocation}
                                    workingMode={applicationInfo.workingMode}
                                    companyAvatarPath={applicationInfo.companyAvatarPath}
                                    companyName={applicationInfo.companyName}
                                />
                                <MiddleTags jobTags = {applicationInfo.jobTags} />
                                <Divider style={{ margin: '-8px 0' }} />
                                <BottomApplyInfo 
                                    hoursAfterJobPosted={Math.floor((Date.now() - applicationInfo.timePosted) / (1000 * 60 * 60))}
                                    numofApplicants={applicationInfo.numOfApplicants}
                                />
                        </Flex>
                        )}
                    </Card>
                ))}
            </>
        </ ConfigProvider>
    )
}

export default ApplicationCard