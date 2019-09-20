module.exports = {
    title: '高雄市災害情資網使用手冊',
    description: '高雄市災害情資網使用手冊',
    base: '/eocdss_manual/',
    repo: 'https://github.com/nukdpc/eocdss_manual',
    themeConfig: {
      sidebarDepth: 0,
      sidebar: [
        ['/', '手冊說明'],
        {
          title: '情資網基本介紹',
          path: '/基本介紹/',
          collapsable: false,
          children: [
            '/基本介紹/進入方法',
            '/基本介紹/進入畫面及登入方式',
            '/基本介紹/圖層控制',
          ]
        },
        {
          title: '氣象即時資訊',
          path: '/氣象即時資訊/',
          collapsable: false,
          children: [
            '/氣象即時資訊/綜合研判指標',
            '/氣象即時資訊/颱風路徑',
            '/氣象即時資訊/動態大氣觀測',
            '/氣象即時資訊/颱風動態分析',
            '/氣象即時資訊/雨量分布',
            '/氣象即時資訊/地震PGA分析',
            '/氣象即時資訊/局部大氣觀測',
            '/氣象即時資訊/水庫水位',
            '/氣象即時資訊/降雨觀測',
            '/氣象即時資訊/空氣品質觀測',
            '/氣象即時資訊/雷達回波圖',
            '/氣象即時資訊/環境輻射監測',
          ]
        },
        {
          title: '預報與警戒',
          path: '/預報與警戒/',
          collapsable: false,
          children: [
            '/預報與警戒/示警燈號',
            '/預報與警戒/定量降水預報',
            '/預報與警戒/雨量警戒特報',
            '/預報與警戒/淹水預警',
            '/預報與警戒/淹水注意鄉鎮',
            '/預報與警戒/坡地注意鄉鎮',
            '/預報與警戒/道路封閉',
          ]
        },
        {
          title: '災害潛勢地圖',
          path: '/災害潛勢地圖/',
          collapsable: false,
          children: [
            '/災害潛勢地圖/工業管線潛勢地圖',
            '/災害潛勢地圖/海嘯溢淹潛勢地圖',
            '/災害潛勢地圖/毒化災害潛勢地圖',
            '/災害潛勢地圖/坡地災害潛勢地圖',
            '/災害潛勢地圖/淹水潛勢地圖',
            '/災害潛勢地圖/安置機構災害潛勢地圖',
            '/災害潛勢地圖/豬瘟潛勢地圖',
          ]
        },
        {
          title: '防災能量',
          path: '/防災能量/',
          collapsable: false,
          children: [
            '/防災能量/防災能量地圖',
          ]
        },
        {
          title: '歷史災害事件',
          path: '/歷史災害事件/',
          collapsable: false,
          children: [
            '/歷史災害事件/107年豪雨事件',
            '/歷史災害事件/108年豪雨事件',
            '/歷史災害事件/2014高雄氣爆',
            '/歷史災害事件/歷年重大地震災害範圍',
            '/歷史災害事件/2019登革熱',
          ]
        },
        {
          title: '應變中心',
          path: '/應變中心/',
          collapsable: false,
          children: [
            '/應變中心/好理災',
            '/應變中心/災情監控CCTV',
            '/應變中心/FB公民回報',
            '/應變中心/情資儀表板',
          ]
        },
      ],
      nav: [
        { text: '首頁', link: '/' },
        { text: '高雄市災害情資網', link: 'http://eocdss1.ncdr.nat.gov.tw/web/ot/ku'},
        { text: 'Github', link: 'https://github.com/nukdpc/eocdss_manual/releases' }
      ]
    }
  }