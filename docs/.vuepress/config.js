module.exports = {
  title: 'Today Sohyeon Learned',
  description: 'Personal Wiki (Today I Learned)',
  email: 'shjang113@gmail.com",
  base: "/TIL/",
  head: [
    ['link', { rel: 'icon', href: '/images/logo-144.png' }],
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
    nav: [
      { text: 'Home', link:'/' },
      { text: 'GitHub', link: 'https://github.com/shjang1013/TIL' }
    ]
  }
}
}
