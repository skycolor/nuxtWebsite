
module.exports = {
  mode: 'universal',
  // 配置启动的服务已经端口
  server: {
    port: 8888, 
    host: 'localhost', 
  },
  // 环境变量
  env: { 
    
  },
  // 页面的头部信息
  head: {
    title: '首页-比亚迪汽车官方网站 比亚迪汽车 ─ 新能源汽车引领者',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords' ,name: 'keywords', content: '比亚迪,比亚迪汽车,比亚迪汽车官方网站,新能源汽车引领者,新能源汽车,电动汽车,混合动力汽车,双模汽车,油电混合动力汽车,比亚迪F0,F3,F6,F3R,G3,G3R,L3,M6,F3DM,S6,S7,G6,速锐,思锐,秦,唐,宋,元,秦ev,秦ev300,e5,电动车,新能源' },
      { hid: 'description', name: 'description', content: '比亚迪汽车,新能源汽车引领者！比亚迪汽车官方网站,提供最权威比亚迪全系车型介绍，包括比亚迪元、比亚迪宋、比亚迪唐、比亚迪秦ev300、比亚迪秦、比亚迪S7、比亚迪S6、比亚迪全新F3、比亚迪G5、比亚迪速锐、比亚迪M6、比亚迪F0、F3DM、e6、e5等,以及陆续推出的一系列542战略新车型。提供官方报价、经销商查询、试驾预约、在线购车、精诚服务等服务。' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // 页面切换Loading效果
  loading: { color: '#fff' },
  // 全局样式
  css: [

  ],
  // vue 插件
  plugins: [

  ],
  // 引入nuxt模块
  modules: [
    'bootstrap-vue/nuxt',
  ],
  // webpack配置
  build: {
    extend (config, ctx) {

    }
  }
}
