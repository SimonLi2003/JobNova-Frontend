import { Button, Col, ConfigProvider, Flex, Row } from 'antd'
import type { CSSProperties } from 'react'

interface BottomApplyInfoProps {
    hoursAfterJobPosted: number;
    numofApplicants: number;
}

// antd v6 buttons resolve their colors through CSS variables, and the
// :hover / :active rules read a separate -hover / -active set. Pointing
// those back at the base values freezes the button visually. This works
// for any color/variant combination, unlike the default* theme tokens
// which only apply to the default (outlined) variant.
// const infoChipStyle: CSSProperties = {
//     '--ant-btn-text-color': '#000000',
//     '--ant-btn-text-color-hover': '#000000',
//     '--ant-btn-text-color-active': '#000000',
//     '--ant-btn-bg-color-hover': 'var(--ant-btn-bg-color)',
//     '--ant-btn-bg-color-active': 'var(--ant-btn-bg-color)',
//     '--ant-btn-border-color-hover': 'var(--ant-btn-border-color)',
//     '--ant-btn-border-color-active': 'var(--ant-btn-border-color)',
//     cursor: 'default',
// } as CSSProperties;

function BottomApplyInfo({hoursAfterJobPosted, numofApplicants} : BottomApplyInfoProps) {
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
                                defaultColor: '#000000', 
                                textTextColor: '#000000', 
                                textHoverBg: '',
                                textTextActiveColor: '',
                            }
                        }
                    }}
                >
                    <Flex gap={8}>
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

                <Flex gap={8}>
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
            </Flex>

    )
}

export default BottomApplyInfo
