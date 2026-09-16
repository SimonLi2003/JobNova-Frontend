import { Button, ConfigProvider, Flex } from 'antd'

interface BottomApplyInfoPhoneProps {
    hoursAfterJobPosted: number;
    numofApplicants: number;
}

function BottomApplyInfoPhone({hoursAfterJobPosted, numofApplicants} : BottomApplyInfoPhoneProps) {
    return (


            <Flex justify="space-between" align="center">
                <ConfigProvider
                    theme={{
                        components:{
                            Button: {
                                defaultBg: '#eaddf0', 
                                defaultHoverBorderColor: '#e1acff',
                                defaultHoverBg: '#e1acff',
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
                    <Flex gap={4}>
                        <Button                           
                            shape="round"
                            size="medium"
                        >        
                            Apply
                        </Button>
                        <Button                           
                            shape="round"
                            size="medium"
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

export default BottomApplyInfoPhone
