// // import { registerMicroApps, start } from 'qiankun'
// import Garfish from 'garfish';

// // 白名单
// import whiteWords from './config/whiteList'
// import prefechList from './config/prefetchList'
// import microApps from './app'

// interface App {
//   name: string
//   entry: string
//   container: string
//   activeRule: string
// }

// const logAndResolve = (message: string) => (app: App) => {
//   if (process.env.NODE_ENV === 'development') {
//     console.log(message, app.name)
//   }
//   return Promise.resolve()
// }

// /**
//  * 注册子应用的函数
//  */
// function initMicroApps() {
//   registerMicroApps(microApps, {
//     beforeLoad: [logAndResolve('before load')],
//     beforeMount: [logAndResolve('before mount')],
//     afterUnmount: [logAndResolve('after unmount')],
//   })

//   // 启动qiankun
//   start({
//     prefetch: prefechList,
//     excludeAssetFilter: (assetUrl: string) => {
//       return whiteWords.some((w: string) => {
//         return assetUrl.includes(w)
//       })
//     },
//   })
// }

// export default initMicroApps
