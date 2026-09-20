## Intro

This repo is an attempt to rebuild similiar frontend design from JobNova.com. The repo contains the basic looking of the job recommendation page.

## Project Structure
```text
.
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── favicon.svg
│   └── icons.svg
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── Utils
│   │   └── mockingData.tsx
│   ├── assets
│   ├── components
│   │   ├── BottomFooter
│   │   │   └── BottomFooter.tsx
│   │   ├── CenterContent
│   │   │   ├── CenterContent.tsx
│   │   │   ├── JobCard
│   │   │   │   ├── BottomApplyInfo.tsx
│   │   │   │   ├── JobCard.tsx
│   │   │   │   ├── MiddleTags.tsx
│   │   │   │   ├── Phone
│   │   │   │   │   ├── BottomApplyInfoPhone.tsx
│   │   │   │   │   └── UpperJobInfoPhone.tsx
│   │   │   │   └── UpperJobCard.tsx
│   │   │   └── JobInfo
│   │   │       ├── JobInfo.tsx
│   │   │       └── JobInfoHead.tsx
│   │   ├── LeftSideBar
│   │   │   └── LeftSideBar.tsx
│   │   ├── RightSideBar
│   │   │   └── RightSideBar.tsx
│   │   ├── TopBar
│   │   │   └── TopBar.tsx
│   │   └── TopCenterMiscBar
│   │       └── TopCenterMiscBar.tsx
│   ├── hooks
│   │   └── useResponsiveLayout.tsx
│   ├── index.css
│   ├── main.tsx
│   └── theme
│       ├── colors.tsx
│       └── layout.tsx
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

16 directories, 33 files
```

Use npm install to install dependencies from package-lock json
```
npm install
```

Use npm run dev to run locally

```
npm run dev
```