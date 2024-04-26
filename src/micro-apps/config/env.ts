
const isOnline = process.env.VUE_APP_ENV === 'production'
const isTest = process.env.VUE_APP_ENV === 'test'
const isDev = process.env.VUE_APP_ENV === 'development'
const isGray = process.env.VUE_APP_ENV === 'gray'
export { isDev, isTest, isOnline, isGray }
