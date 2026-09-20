import { Button, ConfigProvider, Flex } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { PURPLE } from "../../theme/colors";

interface TopCenterMisBarProp {
    isPhone: boolean;
    cardSelected: string | null;
    setCardSelected: React.Dispatch<React.SetStateAction<string | null>>;
}

function TopCenterMisBar({ isPhone, cardSelected, setCardSelected } : TopCenterMisBarProp) {
    return (
        <Flex
            justify="space-between"
            align="center"
            style={{
                width: "100%"
            }}
        >
            { cardSelected === null &&
                <>
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
                </>
            }

            {cardSelected !== null && (
                <Button
                    shape="round"
                    size={isPhone ? "medium" : "large"}
                    onClick={() => setCardSelected(null)}
                    icon={<ArrowLeftOutlined />}
                />
            )}
        </Flex>
    )
}

export default TopCenterMisBar