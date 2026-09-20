import { Button, ConfigProvider, Divider, Flex, Layout, Typography } from "antd";
import { useState } from "react";
import { PURPLE } from "../../theme/colors";
const { Header } = Layout;
const { Title } = Typography


interface TopBarProps {
    isPhone: boolean;
}

function TopBar({ isPhone }: TopBarProps) {
    const [selected, setSelected] = useState("matched");

    return (
        <ConfigProvider
            theme={{
                components:{
                    Button:{
                        defaultBorderColor: PURPLE,
                        defaultActiveBorderColor: PURPLE,
                        defaultHoverBorderColor: PURPLE,
                        defaultHoverColor: '#000000',
                        defaultActiveColor: '#000000',
                        defaultColor: '#000000',
                        textTextColor:'#808080',
                        textTextHoverColor:'#000000',
                        fontWeight: 500,
                        paddingInlineLG:32,
                    },
                    Divider:{
                        verticalMarginInline: isPhone ? 8 : 16,
                    }, 
                }
            }}
        >
            <Header
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 10,
                    // antd's Header pads 50px on each side. On a phone that is a
                    // quarter of the viewport, which leaves the button row too
                    // little room to fit - it then overflows the content box and
                    // reads as being shifted right, since space-evenly has no
                    // free space left to distribute.
                    paddingInline: isPhone ? 8 : undefined,
                }}
            >
                <Flex
                    align="center"
                    justify={isPhone ? "space-evenly" : "flex-start"}
                    style={{
                        height: '100%',
                        minWidth: isPhone ? 'max-content' : undefined,
                    }}
                >
                    {/* The wordmark and its spacer drop out together on phones -
                        leaving the spacer behind would give space-evenly an
                        invisible item to allocate room to. */}
                    {!isPhone && (
                        <>
                            <Title
                                level={1}
                                style={{
                                    margin: 0,
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                JobNova
                            </Title>

                            <div style={{ flex: '0 1 6%', minWidth: 0 }} />
                        </>
                    )}
                    <Button
                        type={selected === "matched" ? "default" : "text"}
                        shape="round"
                        size={isPhone ? "medium" : "large"}
                        onClick={() => setSelected("matched")}
                    >
                        Matched
                    </Button>

                    <Divider orientation="vertical" style={{ height: '50%' }}/>  

                    <Button
                        type={selected === "liked" ? "default" : "text"}
                        shape="round"
                        size={isPhone ? "medium" : "large"}
                        onClick={() => setSelected("liked")}
                    >
                        Liked
                    </Button>


                    <Divider orientation="vertical" style={{ height: '50%' }}/>  

                    <Button
                        type={selected === "applied" ? "default" : "text"}
                        shape="round"
                        size={isPhone ? "medium" : "large"}
                        onClick={() => setSelected("applied")}
                    >
                        Applied
                    </Button>
                </Flex>
            </Header>
        </ConfigProvider>

    )
}

export default TopBar;