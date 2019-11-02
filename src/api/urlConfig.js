
const serverRoot = `${process.env.NODE_ENV === 'production' ? 'http://www.lybenson.com' : 'http://127.0.0.1'}:9050`

export const banner = serverRoot + '/banner'

export const ranking3 = serverRoot + '/ranking3'


// 推广
export const promote = serverRoot + '/promote'

// 直播
export const live = serverRoot + '/live'

// 具体内容
export const contet = serverRoot + '/ding'

// 三日排行
export const contentrank = serverRoot + '/contentrank'
// 一周排行
export const contentrankweek = serverRoot + '/contentrankweek'
