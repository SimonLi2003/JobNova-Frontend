import { Button, Col, ConfigProvider, Divider, Layout, Row } from "antd";
import { useState } from "react";
const { Header } = Layout;

function TopBar() {
    const [selected, setSelected] = useState("matched");

    return (
        <ConfigProvider
            theme={{
                components:{
                    Button:{
                        defaultBorderColor: '#a355d4',
                        defaultActiveBorderColor: '#a355d4',
                        defaultHoverBorderColor: '#a355d4',
                        defaultHoverColor: '#000000',
                        defaultActiveColor: '#000000',
                        defaultColor: '#000000',
                        textTextColor:'#808080',
                        textTextHoverColor:'#000000',
                        fontWeight: 500,
                        paddingInlineLG:32,
                    },
                    Divider:{
                        verticalMarginInline: 16,
                    }, 
                }
            }}
        >
            <Header>
                <Row align={"middle"}
                    style={{
                        height: '100%'
                    }}
                >
                    <Col offset={6}>
                        <Button
                            type={selected === "matched" ? "default" : "text"}
                            shape="round"
                            size="large"
                            onClick={() => setSelected("matched")}
                        >
                            Matched
                        </Button>
                    </Col>

                    <Divider orientation="vertical" style={{ height: '50%' }}/>  

                    <Col>
                        <Button
                            type={selected === "liked" ? "default" : "text"}
                            shape="round"
                            size="large"
                            onClick={() => setSelected("liked")}
                        >
                            Liked
                        </Button>
                    </Col>

                    <Divider orientation="vertical" style={{ height: '50%' }}/>  

                    <Col>
                        <Button
                            type={selected === "applied" ? "default" : "text"}
                            shape="round"
                            size="large"
                            onClick={() => setSelected("applied")}
                        >
                            Applied
                        </Button>
                    </Col>
                </Row>
            </Header>
        </ConfigProvider>

    )
}

export default TopBar;