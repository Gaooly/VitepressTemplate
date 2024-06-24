import { defineConfig } from 'vitepress';

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
    title: 'VitePress',
    description: 'VitePress',
    appearance:false,
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' },],
    ],
    themeConfig: {
        logo: 'https://s1.ax1x.com/2022/06/13/XRUTBD.jpg',
        nav: [
            { text: '主页', link: '/' },
            { text: '关于我', link: '/docs/about/me' },
            // { text: 'api', link: '/api-examples' },
            // { text: 'markdown', link: '/markdown-examples' },
        ],
        sidebar: {
            '/docs/about/': { base: '/', items: [{ text: '关于我', link: 'docs/about/me' }] },
        },
        // type SocialLinkIcon =| 'discord'| 'facebook'| 'github'| 'instagram'| 'linkedin'| 'mastodon'| 'npm'| 'slack'| 'twitter'| 'x'| 'youtube'| { svg: string }
        socialLinks: [{ icon: 'github', link: 'https://github.com/Gaooly' }],
    },
});
