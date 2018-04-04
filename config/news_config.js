window.news_config = {
  base_host : 'http://192.168.31.160',
  base_url : 'http://192.168.31.160' + '/news_v3/index.php',

  //线上版本
  frontend_url: window.location.protocol + '//' + window.location.host,

  //开发版本
  // frontend_url: window.location.protocol + '//' + window.location.host + '',

  /**
  * 开发时用来模拟登录用的用户信息对象userTest
  */
  userTest : null,
}

window.news_config.modules = {
  /**
   * module_name:模块名
   * url:访问的全路径
   * integration:是否集成环境
   * alive:为true表示该子项目是常驻项目（页面加载后切换tabbar时此项目不会重新加载）
   * page_info:配置显示信息,集成部署模块 page_info 不起作用
   * extra:特殊配置项
   */
  sc_admin : {
    module_name : 'sc_admin',
    url : window.news_config.frontend_url + '/sc_admin/home/index.html',
    page_info : {
      title : '',
      title_img : '',
      logo_title : '',
      logo_img : '',
      home_title : '',
      copyright : ''
    },
    extra : {

    },
  },
}

