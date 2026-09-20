import { Button, ConfigProvider, Flex } from 'antd'

interface BottomApplyInfoProps {
    hoursAfterJobPosted: number;
    numofApplicants: number;
}


function BottomApplyInfo({hoursAfterJobPosted, numofApplicants} : BottomApplyInfoProps) {
    return (


            <Flex justify="space-between" align="center">
                <ConfigProvider
                    theme={{
                        components:{
                            Button: {
                                defaultBg: '#eaddf0', 
                                defaultHoverBorderColor: '#d9d9d9',
                                defaultHoverBg: '#eaddf0',
                                defaultHoverColor: '#000000', 
                                defaultActiveBg: '#e1acff',
                                defaultActiveBorderColor: '#e1acff',
                                defaultActiveColor: '#000000',
                                defaultColor: '#000000', 
                                textTextColor: '#000000', 
                                textHoverBg: '',
                            }
                        }
                    }}
                >
                    <Flex wrap>
                        <Button
                            type="default"
                            shape="round"
                            size="small"
                            style={{
                                cursor: 'default'
                            }}
                        >
                            {hoursAfterJobPosted} hours ago
                        </Button>
                        <Button
                            shape="round"
                            variant="text"
                            color="default"
                            size="small"
                            style={{
                                cursor: 'default'
                            }}
                        >
                            {numofApplicants} applicants
                        </Button>
                    </Flex>
                </ConfigProvider>

                <ConfigProvider
                    theme={{
                        components: {
                            Button:{
                                defaultHoverColor: '#000000',
                                defaultHoverBorderColor: '#d9d9d9',
                                defaultActiveColor: '#000000', 
                                defaultActiveBorderColor: '#d9d9d9',
                            }
                        }
                    }}
                >
                    {/* The whole card is clickable, and React's synthetic events
                        bubble, so a click on Apply would also open the job link.
                        Stopping propagation here scopes every control in this row
                        out of the card's handler, instead of repeating it on each
                        button. */}
                    <Flex gap={8} onClick={(e) => e.stopPropagation()}>
                        <Button                           
                            shape="round"
                            size="large"
                        >        
                            Apply
                        </Button>
                        <Button                           
                            shape="round"
                            size="large"
                            style={{
                                background: '#a3f321'
                            }}
                        >
                            Mock Interview
                        </Button>
                    </Flex>
                </ConfigProvider>
            </Flex>

    )
}

export default BottomApplyInfo
