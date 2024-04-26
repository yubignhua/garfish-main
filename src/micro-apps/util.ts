// import Cookies from 'js-cookie'
// import microApps from './config'
// import { isDev, isOnline, isGray, isTest } from './config/env'

// function getPortByName(appName: string): string | number | undefined {
//   const app = microApps.find((app) => app.name === appName)
//   return app?.port
// }

// function getDevelopmentURL(app: string): string {
//   return `http://localhost:${getPortByName[app]}/`
// }

// function getTestURL(app: string, originURL: string): string {
//   const microApps = Cookies.get('fe_debug_app')?.split(',') || []
//   const microUrls = Cookies.get('fe_debug_url')?.split(',') || []
//   const appIndex = microApps.indexOf(app)
//   return appIndex !== -1 ? microUrls[appIndex] : originURL
// }

// function getOriginURL(app: string, prefix: string): string {
//   const envSuffix = isOnline || isGray ? '' : '-test'
//   return `https://static0${envSuffix}.xesimg.com/productdata-fileupload/${app}/${prefix}/index.html`
// }

// /**
//  * 获取子应用的入口地址
//  * @param app 子应用名称
//  * @returns 子应用的入口地址
//  */
// export function qiankunEntryUrl(appName: string): string {
//   const prefix = process.env.VUE_APP_PREFIX
//   if (typeof prefix !== 'string') {
//     throw new Error('The VUE_APP_PREFIX 必须是字符串！')
//   }
//   const originURL = getOriginURL(appName, prefix)
//   if (isDev) {
//     return getDevelopmentURL(appName)
//   } else if (isTest) {
//     return getTestURL(appName, originURL)
//   } else if (isOnline || isGray) {
//     return originURL
//   } else {
//     return '//'
//   }
// }
