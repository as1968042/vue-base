window.news_config = {
  client_id: 'arc52dc98568b1f9',
  client_secret: 'f48b2557e21ac2c0be6f8c8fa56eebdca77ef560',
  /**
   * 微校园
   * base_host:接口地址
   * base_url:用来在项目的api.js中拼接接口地址的域名
   * 例如： let base = window.news_config.base_url + '/adminV3/api/UserApi/logout'
   */
  base_host: 'http://192.168.31.160',
  base_url: 'http://192.168.31.160' + '/news_v3/index.php',

  /**
   * 访问项目时的服务器地址(浏览器访问地址)
   * 例如：window.news_config.frontend_url + '/sc_portal/home/index.html'
   */
  //线上版本
  frontend_url: window.location.protocol + '//' + window.location.host + '/frontend',
  //开发版本
  // frontend_url: window.location.protocol + '//' + window.location.host + '',
  /**
   * 消息推送时用来连接mqtt的地址
   * 例如：在私信中用到mqtt
   * mqtt.connect(API.mqtt, {clientId: parseInt(Math.random()*1000000000000000)+''})
   */
  mqtt: 'ws://192.168.31.160:8083/mqtt',
  /**
   * 开发时用来模拟登录用的用户信息对象userTest
   */
  // userTest: null
  userTest: {
    access_token: '146554d2478b5489e6af280c01a5204f3f93168f',
    // id: '1',
    // code: '00000001'
  }
}
/**
 * 微校园中每个子项目的配置
 */
window.news_config.modules = {
  /**
   * module_name:模块名
   * url:访问的全路径
   * integration:是否集成环境
   * alive:为true表示该子项目是常驻项目（页面加载后切换tabbar时此项目不会重新加载）
   * page_info:配置显示信息,集成部署模块 page_info 不起作用
   * extra:特殊配置项
   */
  /**
   * 门户首页配置
   */
  sc_portal: {
    module_name: 'sc_portal',
    url: window.news_config.frontend_url + '/sc_portal/home/index.html',
    page_info: {
      title: '',
      title_img: '',
      logo_title: '',
      logo_img: '',
      home_title: '',
      copyright: ''
    },
    extra: {
      integration: true,
      alive: true,
      /**
       * 配置sc_portal的左侧菜单的显示
       * myApply 控制 我的应用
       * applyManage 控制  应用管理
       * portalManage 控制  门户管理*/
      menus: {
        myApply: true,
        applyManage: true,
        portalManage: true
      },
      service_id: {
        news: '135',
        notice: '136'
      },
      /**
       * 门户首页的各个功能块的位置配置数组
       * 屏幕宽度分为24等份  以左上角为（0,0）
       * x为该模块x轴的起始坐标  y为该模块y轴的起始坐标   w为宽度  h为高度  name为模块名 mw为最小宽度  mh为最小高度
       * moved 为是否可以移动  i 为可以移动的距离*/
      layout: [
        {"x": 0, "y": 0, "w": 24, "h": 2, "i": "0", "name": "UserCenter", "mw": 24, "mh": 2, "moved": false},
        {"x": 0, "y": 14, "w": 24, "h": 7, "i": "1", "name": "TimeTable", "mw": 10, "mh": 6, "moved": false},
        {"x": 0, "y": 8, "w": 7, "h": 6, "i": "2", "name": "SchoolCalendar", "mw": 2, "mh": 4, "moved": false},
        {"x": 7, "y": 8, "w": 11, "h": 6, "i": "3", "name": "Notice", "mw": 2, "mh": 4, "moved": false},
        {"x": 7, "y": 2, "w": 11, "h": 6, "i": "4", "name": "NewsCenter", "mw": 2, "mh": 4, "moved": false},
        {"x": 0, "y": 2, "w": 7, "h": 6, "i": "5", "name": "BusinessEntrance", "mw": 1, "mh": 2, "moved": false},
        {"x": 18, "y": 2, "w": 6, "h": 12, "i": "6", "name": "ServiceCenter", "mw": 1, "mh": 2, "moved": false}
      ],
      UIAS: false,
    },
  },
  /**
   * 门户后台管理的配置
   */
  sc_portal_admin: {
    module_name: 'sc_portal_admin',
    url: window.news_config.frontend_url + '/sc_portal/admin/index.html',
    page_info: {
      title: '',
      title_img: '',
      logo_title: '',
      logo_img: '',
      home_title: '',
      copyright: ''
    },
    extra: {
      integration: true,
      alive: true,
    },
  },
  /**
   * 微校园home配置
   */
  sc_home: {
    module_name: 'sc_home',
    url: window.news_config.frontend_url + '/sc_home/home/index.html',
    page_info: {
      title: '',
      title_img: '',
      logo_title: '',
      logo_img: '',
      home_title: '',
      copyright: ''
    },
    extra: {
      integration: false,
      alive: true,
      /**
       * 首页悬停头像时是否显示系统管理和门户管理的配置
       * name 显示在弹出框上的文字
       * accessLevel 可以看到此项菜单的用户的admin_level
       * page 点击后路由要跳转到的地址*/
      userHoverList: [
        {
          name: '系统管理',
          accessLevel: [1, 2, 3],
          page: 'sc_admin'
        },
        {
          name: '门户管理',
          accessLevel: [1],
          page: 'sc_portal_admin'
        }
      ]
    },
  },
  /**
   * 私信配置
   */
  sc_message: {
    module_name: 'sc_message',
    url: window.news_config.frontend_url + '/sc_message/home/index.html',
    page_info: {
      title: '',
      title_img: '',
      logo_title: '',
      logo_img: '',
      home_title: '',
      copyright: ''
    },
    extra: {
      integration: false,
      alive: true,
      message_type: ['message'],
      cloudDisk: true,
    },
  },
  /**
   * 微博配置
   */
  sc_weibo: {
    module_name: 'sc_weibo',
    url: window.news_config.frontend_url + '/sc_weibo/home/index.html',
    page_info: {
      title: '',
      title_img: '',
      logo_title: '',
      logo_img: '',
      home_title: '',
      copyright: ''
    },
    extra: {
      integration: false,
      alive: false,
    },
  },
  /**
   * 服务配置
   */
  sc_service: {
    module_name: 'sc_service',
    url: window.news_config.frontend_url + '/sc_service/home/index.html',
    page_info: {
      title: '',
      title_img: '',
      logo_title: '',
      logo_img: '',
      home_title: '',
      copyright: ''
    },
    extra: {
      integration: false,
      alive: false,
    },
  },
  /**
   * 系统管理配置
   */
  sc_admin: {
    module_name: 'sc_admin',
    url: window.news_config.frontend_url + '/sc_admin/home/index.html',
    page_info: {
      title: '大连卓云科技有限公司-系统管理',
      title_img: '',
      logo_title: '',
      logo_img: '',
      home_title: '',
      copyright: '大连卓云科技有限公司 版权所有'
    },
    extra: {
      integration: true,
      alive: false,
    },
  },
  /**
   * 学堂配置
   */
  sc_course: {
    module_name: 'sc_course',
    url: window.news_config.frontend_url + '/sc_course/home/index.html',
    page_info: {
      title: '',
      title_img: '',
      logo_title: '',
      logo_img: '',
      home_title: '',
      copyright: ''
    },
    extra: {
      integration: true,
      alive: false,
    },
  },
  /**
   * 办事大厅配置
   */
  online_business: {
    module_name: 'online_business',
    url: window.news_config.frontend_url + '/online_business/home/index.html',
    page_info: {
      title: '',
      title_img: '',
      logo_title: '',
      logo_img: '',
      home_title: '',
      copyright: ''
    },
    extra: {
      integration: true,
      alive: false,
      /**
       * 在私信中发送办事大厅申请时的集成的页面的地址
       */
      integration_url: window.news_config.frontend_url + '/online_business/integration/index.html',
    },
  },
  /**
   * 网盘配置
   */
  cloud_disk: {
    module_name: 'cloud_disk',
    base_url: 'http://192.168.31.151:8000',
    url: window.news_config.frontend_url + '/cloud_disk/home/index.html',
    page_info: {
      title: '',
      title_img: '',
      logo_title: '卓云大学网盘',
      logo_img: '',
      home_title: '',
      copyright: ''
    },
    extra: {
      integration: true,
      alive: false,
      file_url: 'http://192.168.31.151:8002',//下载文件地址
      upload_url: 'http://192.168.31.151:8001',//上传文件地址
    },
  },
  /**
   * 教学配置
   */
  teaching_center: {
    module_name: 'teaching_center',
    base_url: 'http://192.168.31.151:8010/index.php/',
    url: window.news_config.frontend_url + '/teaching_center/home/index.html',
    page_info: {
      title: '',
      title_img: '',
      logo_title: '卓云教学平台',
      logo_img: '',
      home_title: '',
      copyright: ''
    },
    extra: {
      integration: true,
      alive: false,
      detail_url: 'http://192.168.31.151:8010/frontend/teaching_center/home/index.html#/',
      playerDownloadUrl: 'http://pan.immu.edu.cn/s/US66Ckwq',
      file_url: 'dl.zytec.cn:8080',
      file_host: 'http://owas.immu.edu.cn/op/view.aspx',
    },
  },

  /**
   * 中心数据配置
   */
  center_data: {
    module_name: 'center_data',
    base_url: 'http://dl.zytec.cn:8003/IMMUCentralData',//拼接接口地址
    url: window.news_config.frontend_url + '/center_data/home/index.html',
    page_info: {
      title: '',
      title_img: '',
      logo_title: '',
      logo_img: '',
      home_title: '',
      copyright: ''
    },
    extra: {
      integration: true,
      alive: false,
    },
  },
  /**
   * 大数据配置
   */
  dcMonitor: {
    module_name: 'dcMonitor',
    base_url: 'http://dl.zytec.cn:8003/IMMUCentralData',
    url: window.news_config.frontend_url + '/dcMonitor/home/index.html#',
    page_info: {
      title: '',
      title_img: '',
      logo_title: '',
      logo_img: '',
      home_title: '',
      copyright: ''
    },
    extra: {
      integration: true,
      alive: false,
      navlist: {
        "10000_教学": "teach",
        "70000_资产": "asset",
        "60000_财务": "finance",
        "80100_gpms": "gpms",
        "40000_办公": "office",
        "80000_其他": "other",
        "20000_人事": "personnel",
        "30000_学校管理": "schoolManage",
        "50000_科研": "scientific",
        "303_数据转换": "data_conversion",
        "302_数据仓库": "data_warehouse",
        "313_系统目录维护": "system_directory_main",
        "312_数据分析目录维护": "data_directory_main",
        "310_用户权限管理": "user_authority_management",
        "306_用户管理": "user_manager",
        "307_用户角色管理": "user_role_management",
        "322_主数据": "main_data_home",
        "99000_代码段定义": "codeDefinition",
        "379_通用/标准数据子集": "general_standard",
      }
    },
  },
  /**
   * 校本数据配置
   */
  teaching_report: {
    module_name: 'teaching_report',
    base_url: 'http://dl.zytec.cn:8003/IMMUCentralData',
    url: window.news_config.frontend_url + '/teaching_report/home/index.html#',
    page_info: {
      title: '',
      title_img: '',
      logo_title: '',
      logo_img: '',
      home_title: '',
      copyright: ''
    },
    extra: {
      integration: true,
      alive: false,
      year: '2017',//当前年份
    },
  },
  /**
   * 专业认证后台配置
   */
  profession_admin: {
    module_name: 'profession_admin',
    base_url: 'http://115.28.147.231:8020/IMNUProfessionalCertification',
    url: window.news_config.frontend_url + '/profession_admin/home/index.html#',
    page_info: {
      title: '',
      title_img: '',
      logo_title: '',
      logo_img: '',
      home_title: '',
      copyright: ''
    },
    extra: {
      integration: false,
      alive: false,
    },
  },
  /**
   * 专业认证前台配置
   */
  profession_authentication: {
    module_name: 'profession_authentication',
    base_url: 'http://115.28.147.231:8020/IMNUProfessionalCertification',
    url: window.news_config.frontend_url + '/profession_authentication/home/index.html#',
    page_info: {
      title: '',
      title_img: '',
      logo_title: '',
      logo_img: '',
      home_title: '',
      copyright: ''
    },
    extra: {
      integration: false,
      alive: false,
    },
  },

  /**
   * 统一身份认证配置
   */
  cas_admin: {
    module_name: 'cas_admin',
    base_url: 'http://218.61.208.84:8050',
    url: window.news_config.frontend_url + '/cas_admin/home/index.html',
    page_info: {
      title: '',
      title_img: '',
      logo_title: '统一身份认证管理系统',
      logo_img: 'login_logo.png',
      home_title: '',
      home_img: 'home_logo.png',
      copyright: '版权所有 大连卓云科技有限公司'
    },
    extra: {
      integration: false,
      alive: false,
    },
  },
  /**
   * 教务配置
   */
  educational: {
    module_name: 'educational',
    base_url: 'https://i.immu.edu.cn',
    // base_url: 'http://jwgl.immu.edu.cn',
    // base_url: 'http://dl.zytec.cn:8888',
    // base_url: 'http://42.202.149.233:8888',
    // base_url: 'http://218.61.208.83:8888',
    url: window.news_config.frontend_url + '/educational/home/index.html',
    page_info: {
      title: '',
      title_img: '',
      logo_title: '',
      logo_img: '',
      home_title: '',
      home_img: '',
      copyright: ''
    },
    extra: {
      integration: false,
      alive: false,
      auth_tenant: 'immu',
    },
  },
  /**
   * 爱医管理端
   */
  aiyi_admin: {
    module_name: 'aiyi_admin',
    // url: window.news_config.frontend_url + '/aiyi_admin/home/index.html',
    url: window.location.origin + '/aiyi_admin/home/index.html',
    base_url: 'http://139.129.216.73:8000/aiyi/index.php/',
    page_info: {
      title: '',
      title_img: '',
      logo_title: '',
      logo_img: '',
      home_title: '',
      copyright: ''
    },
    extra: {
      client_id: 'arc52dc3bdeyegr3',
      client_secret: '28dnakeu19nnajdue02k34uekdiu12904829382',
      grant_type: 'password',

    }
  },

  sc_apps: {
    module_name: 'sc_apps'
  }
}

