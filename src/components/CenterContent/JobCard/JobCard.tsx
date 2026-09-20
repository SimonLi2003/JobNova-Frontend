import { Card, Divider, ConfigProvider, Flex} from 'antd'

import UpperJobInfo from './UpperJobCard'
import MiddleTags from './MiddleTags'
import BottomApplyInfo from './BottomApplyInfo'
import { useEffect, useState } from 'react';
import UpperJobInfoPhone from './Phone/UpperJobInfoPhone';
import BottomApplyInfoPhone from './Phone/BottomApplyInfoPhone';
import { MOCK_JOB_CARD_DATA } from '../../../Utils/mockingData';

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

interface JobCardProps {
    isPhone: boolean;
    setCardSelected: (jobLink: string | null) => void;
}

function JobCard({ isPhone, setCardSelected } : JobCardProps) {
    const [applicationsInfo, setApplicationsInfo] = useState<ApplicationInfo[]>(MOCK_JOB_CARD_DATA)

    useEffect(() => {
        setApplicationsInfo(MOCK_JOB_CARD_DATA)
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
                        size={isPhone ? "small" : "default"}
                        onClick={() => setCardSelected(applicationInfo.jobLink)}
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

export default JobCard