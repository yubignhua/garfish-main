import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import initMicroApps from "./micro-apps/index.js"; // 导入微应用初始化函数
import Garfish from 'garfish'

const app = createApp(App)
app.use(store).use(router).mount('#app')
//  initMicroApps是在Vue实例挂载到DOM后立即被调用的。这将确保主应用已经加载完毕，
// Vue实例已经准备好，然后开始注册和加载微应用。
// initMicroApps();
Garfish.run({
  basename: '/',
  domGetter: () =>
    document.querySelector('#subApp') || document.createElement('div'),
  apps: [
    {
      name: 'sub1',
      activeWhen: '/sub1',
      sandbox: false,
      entry: 'http://localhost:3000', // js入口
      props: {
        msg: 'vue-app msg',
      },
    },
    {
      name: 'sub2',
      activeWhen: '/sub2',
      sandbox: false,
      entry: 'http://localhost:3001', // js入口
      props: {
        msg: 'vue-app msg',
      },
    },
  ],
})
