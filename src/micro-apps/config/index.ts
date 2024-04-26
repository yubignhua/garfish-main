// type MicroApp = {
//   name: string
//   basename?: string
//   // 子应用的入口资源地址，支持 HTML 和 JS
//   entry?: string
//   activeWhen: string
//   // 是否缓存子应用，默认值为 true；
//   cache?: boolean
//   // 是否检查 provider, 默认为true；
//   noCheckProvider?: boolean
//   port: number | string
//   props?: Record<string, any>
// }

// const AppConfig: MicroApp[] = [
//   {
//     name: 'sub-app-1',
//     basename: '/app1',
//     activeWhen: '/sub-app-1',
//     entry: 'http://localhost:8090',
//     props: {
//       msg: 'vue-app1 msg',
//     },
//     port: 8090,
//   },
//   {
//     name: 'sub-app-2',
//     basename: '/app2',
//     activeWhen: '/sub-app-1',
//     entry: 'http://localhost:8080',
//     props: {
//       msg: 'vue-app2 msg',
//     },
//     port: 8080,
//   },
// ]

// export default AppConfig
