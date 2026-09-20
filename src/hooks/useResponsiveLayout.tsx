import { Grid } from 'antd'

const { useBreakpoint } = Grid

export type LeftSiderMode = 'expanded' | 'rail' | 'hidden';

export interface ResponsiveLayout {
    leftSiderMode: LeftSiderMode
    showRightSider: boolean
    isPhone: boolean
}

/**
 * The single place that turns viewport width into layout structure.
 *
 *   >= xl (1200)   left sider + content + right sider
 *   lg   (992)     left sider + content
 *   md   (768)     icon rail  + content
 *   <  md          content only
 *
 * Components take the result as props and never check the breakpoint
 * themselves, so the thresholds cannot drift apart.
 */
export function useResponsiveLayout(): ResponsiveLayout {
    const screens = useBreakpoint()

    // The screen map is empty until antd's layout effect measures, so only an
    // explicit false narrows the layout; an unknown breakpoint counts as wide.
    const atLeast = (breakpoint: 'md' | 'lg' | 'xl') => screens[breakpoint] !== false

    let leftSiderMode: LeftSiderMode = 'hidden';
    if (atLeast('lg')) {
        leftSiderMode = 'expanded'
    } else if (atLeast('md')) {
        leftSiderMode = 'rail'
    }

    return {
        leftSiderMode,
        showRightSider: atLeast('xl'),
        isPhone: !atLeast('md'),
    }
}
