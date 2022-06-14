import { defineConfig } from 'vitepress'


export default defineConfig({
    title: 'VitePress',
    description: 'Just playing around.',
    appearance: false, // 是否开启黑夜模式
    themeConfig: {
        logo: 'https://s1.ax1x.com/2022/06/13/XRUTBD.jpg',
        sidebar: {
            '/about/': [
                {
                    collapsible: true,
                    text: 'About Us',
                    items: [
                        {text: 'Me', link: '/about/me'},
                    ]
                }
            ]
        },
        nav: [
            { text: 'About Us', link: '/about/me', activeMatch: '/about/' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/gaolingyi-hadi' },
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: `Copyright © 2019-present Evan You`
        }
    }
})