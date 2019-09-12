module.exports = {
    title: '高雄市災害情資網操作手冊',
    description: '高雄市災害情資網操作手冊',
    base: '/eocdss_manual/',
    repo: 'https://github.com/nukdpc/eocdss_manual',
    themeConfig: {
      sidebarDepth: 0,
      sidebar: [
        {
          title: '情資網基本介紹',
          path: '/',
          collapsable: false,
          children: [
            '/基本介紹/進入方法',
            '/基本介紹/進入畫面及登入方式',
            '/基本介紹/圖層控制',
          ]
        }
      ],
      nav: [
        { text: 'Home', link: '/' },
        { text: '高雄市災害情資網', link: 'http://eocdss1.ncdr.nat.gov.tw/web/ot/ku'},
        { text: 'Github', link: 'https://github.com/nukdpc/eocdss_manual' }
      ]
    }
  }