const sidebar = require('./auto-sidebar-generator');

module.exports = {
  title: 'Today Sohyeon Learned💡',
  description: 'Personal Wiki (Today I Learned)',
  email: 'shjang113@gmail.com',
  base: "/TIL/",
  head: [
    ['link', { rel: 'icon', href: `/images/logo-144.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  plugins: [
    '@vuepress/back-to-top',
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }]
  ],
  themeConfig: {
    sidebar: [
      sidebar.getSidebarGroup('/goals/', '🎯 목표', true),
      sidebar.getSidebarGroup('/SpringBoot/', '🐶 Spring Boot', true),
      sidebar.getSidebarGroup('/Python/','🐻 Python', true),
      sidebar.getSidebarGroup('/SWEA/', '🐱 SWEA', true),
      sidebar.getSidebarGroup('/Programmers', '🐤 프로그래머스', true)
    ],
    nav: [
      { text: 'GitHub', link: 'https://github.com/shjang1013/TIL' }
    ],
    smoothScroll: true,
    lastUpdated: 'Last Updated'
  }
}
