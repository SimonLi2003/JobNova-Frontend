import { Button, ConfigProvider, Divider, Flex, Layout, Typography } from "antd";
import type { CSSProperties } from "react";
import { HEADER_HEIGHT } from "../../theme/layout";

const { Title, Text } = Typography
const { Sider } = Layout

const MARGIN_HEIGHT = 20;

// Inset for the panel's own contents, so the copy is not flush against the
// sider's edges. antd's reset makes every box border-box, so this eats into the
// 360px rather than widening the sider.
const PADDING = 24;

// Gap between the panel and the right edge of the viewport. It has to be a
// margin: the sider is a flex item, so "right" would only set a sticky
// threshold. As a margin it shrinks the room left for the centre column, which
// simply reflows - the cards cannot end up underneath it.
const GAP_RIGHT = 20;

const CORNER_RADIUS = 16;

// The rendered width of "• " in the body copy. This has to be an absolute
// length rather than em: em resolves against each element's own font-size, and
// the level-5 headings are larger than the Text below them, so the same em
// value would indent the two by different amounts. Nudge this if the heading
// and the copy after the bullet do not line up exactly.
const BULLET_INDENT = '12px';

// A hanging indent for the bulleted copy: the padding moves the whole block in
// by one bullet's width, and the negative text-indent pulls the first line -
// the one carrying the bullet - back out again. Wrapped lines then start level
// with the text after the bullet rather than under the bullet itself. Text
// renders a span, so it has to be a block for either property to take effect.
const bulletStyle: CSSProperties = {
    display: 'block',
    paddingInlineStart: BULLET_INDENT,
    textIndent: `-${BULLET_INDENT}`,
};

// The headings carry no bullet of their own, so they only need the padding -
// no negative indent to pull a first line back out. That lands them level with
// the copy that follows the bullet.
const bulletTitleStyle = (extra?: CSSProperties): CSSProperties => ({
    paddingInlineStart: BULLET_INDENT,
    ...extra,
});

interface RightSideBarProps {
    visible: boolean;
    bottomOffset: number;
}

function RightSideBar({ visible, bottomOffset }: RightSideBarProps) {
    if (!visible) {
        return null
    }

    return (
        <Sider 
            width={320}
            style={{
                position: "sticky",
                top: MARGIN_HEIGHT + HEADER_HEIGHT,
                height: `calc(100vh - ${MARGIN_HEIGHT + HEADER_HEIGHT + bottomOffset}px)`,
                overflow: 'auto',
                padding: PADDING,
                textAlign: 'left',
                marginInlineEnd: GAP_RIGHT,
                borderRadius: CORNER_RADIUS,
            }}
        >
            <ConfigProvider theme={{ token: { fontWeightStrong: 600 } }}>
            {/* minHeight lets the column fill the sider when the copy is short,
                and still grow past it when the copy is long. Without a height
                there is no free space, which is why justify had no effect. */}
            <Flex vertical align="flex-start" style={{ minHeight: '100%' }}>
                <Title 
                    level={4} 
                    style={{ marginTop: 0 }}
                >
                    Ace Your Interviews with AI-Powered Mock Sessions!
                </Title>
                <Text>
                    Struggling with interview nerves or unsure how to prepare? Let our cutting-edge AI mock interviews help you shine!
                </Text>
                <Divider></Divider>
                <Title 
                    level={4}
                    style={
                        bulletTitleStyle({ margin: 0 })
                    }
                >
                    Why choose our AI mock interviews?
                </Title>
                <Title level={5} style={bulletTitleStyle()}>
                    Job Specific simulations: 
                </Title>
                <Text style={bulletStyle}>
                    • Practice with questions tailored to your target role, ensuring relevance and preparation.
                </Text>
                <Title level={5} style={bulletTitleStyle()}>
                    Actionable Feedback
                </Title>
                <Text style={bulletStyle}>
                    • Get detailed analysis of your responses and practical, step-by-step improvement suggestions.
                </Text>
                <Title level={5} style={bulletTitleStyle()}>
                    Boost Success Rates
                </Title>
                <Text style={bulletStyle}>
                    • Perfect your interview skills, and increase your chances of landing your dream job you want.
                </Text>
                <ConfigProvider
                    theme={{
                        components:{
                            Button: {
                                defaultBg: '#000000',
                                defaultColor: '#ffffff',
                                defaultBorderColor: '#000000',
                                defaultHoverBg: '#000000',
                                defaultHoverColor: '#ffffff',
                                defaultHoverBorderColor: '#000000',
                                defaultActiveBg: '#000000',
                                defaultActiveColor: '#ffffff',
                                defaultActiveBorderColor: '#000000',
                            }
                        }
                    }}
                >
                    {/* Auto margins on both sides split the column's leftover
                        space evenly above and below, so the button sits centred
                        between the last paragraph and the bottom of the sider.
                        Only marginTop: auto would pin it flush to the bottom.
                        ConfigProvider renders no DOM, so the Button is a direct
                        flex child of the column and the auto margins apply. */}
                    <Button 
                        type="default" 
                        size="large"
                        shape="round"
                        style={{ width: '100%', marginBlock: 'auto' }}
                    >
                        Mock Interview
                    </Button>
                </ConfigProvider>
            </Flex>
            </ConfigProvider>
        </Sider>
    )
}   

export default RightSideBar