// Feeds the Layout.headerHeight token in App.tsx, and both siders position
// themselves against it (sticky offset and height). Keeping it here means the
// header can be resized in one place instead of three.
export const HEADER_HEIGHT = 80

// Phone screens give the header less to do and need the vertical room more,
// so the bar tightens to just clear a large button.
export const HEADER_HEIGHT_COMPACT = 56

// The fixed bottom bar only exists on phones, but its height is what the
// siders subtract from their own and what the shell reserves below the
// content, so it lives beside the header heights rather than in the footer.
export const FOOTER_HEIGHT = 50
