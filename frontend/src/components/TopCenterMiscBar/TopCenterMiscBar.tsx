import { Button, ConfigProvider, Flex } from "antd";
import { PURPLE } from "../../theme/colors";

interface TopCenterMisBarProp {
    isPhone: boolean;
}

function TopCenterMisBar({ isPhone } : TopCenterMisBarProp) {
    return (
        <Flex
            justify="space-between"
            align="center"
            style={{
                width: "100%"
            }}
        >
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            defaultBg: PURPLE,
                            defaultColor: '#ffffff',
                            defaultHoverBg: PURPLE,
                            defaultHoverColor: '#ffffff',
                            defaultHoverBorderColor: '',
                            defaultActiveBg: PURPLE,
                            defaultActiveColor: '#ffffff',
                            defaultActiveBorderColor: '',
                        }
                    }
                }}
            >
                <Button
                    shape="round"
                    size={isPhone ? "medium" : "large"}
                    style={{
                        width: "80%", 
                    }}
                >
                    {isPhone ? "Preference" : "Change Job Preference"}
                </Button>
            </ConfigProvider>

            <Button
                shape="round"
                size={isPhone ? "medium" : "large"}
                style={{
                    width: "18%"
                }}
            >
                {isPhone ? "Top" : "Top Matched"}
            </Button>
        </Flex>
    )
}

export default TopCenterMisBar