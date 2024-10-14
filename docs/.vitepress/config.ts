import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: "Vue3 + TypeScript 学习文档",
    description: "详细学习 Vue3 和 TypeScript 的指南",
    themeConfig: {
        siteTitle: "刘浩的前端学习",
        logo: "/assets/logo.png",
        nav: [
            { text: "首页", link: "/" },
            { text: "学习日程表", link: "/guide/" },
            { text: "学习内容", link: "/components/"},
            { text: "所遇到的问题", link: "/faq/"},
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress"},
        ],
        sidebar: {
            "/gudie/": [
                {
                    text: "开始",
                    collapsible: true,
                    items: [
                        { text: "介绍", link: "/guide/" },                        
                    ],
                },
            ],
            "/components/": [
                {
                    text: "常用组件",
                    items: [
                        { text: "介绍", link:"/components/"},
                    ],
                },
            ],
        },
        footer: {
            message: "用心学习 Vue3 和 TypeScript！",
            copyright: "Copyright o 2024 lh",
        },
    },
});
