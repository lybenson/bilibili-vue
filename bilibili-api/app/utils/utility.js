import * as EncryptUtil from './EncryptUtil'
import resState from './resState'
import BaseResp from './BaseResp'

import fs from 'fs'
const file = fs.readFileSync('./app/utils/EnCodeKey', 'utf8')
const key = file.split('#;')[0]
const vi = file.split('#;')[1]

// 响应结果
const response = {
  _errorResp (status, msg) {
    return new BaseResp(status || resState.re_error, msg || '未知错误')
  },
  _successResp () {
    return new BaseResp(resState.re_success, null)
  },
  fixErrorResp (reason) { // reason: {status, msg}
    if (!reason) {
      return this._errorResp()
    }
    if (reason.status && reason.msg) {
      return this._errorResp(reason.status, reason.msg)
    }
    if (reason.status) {
      return this._errorResp(reason.status)
    }
    if (reason.msg) {
      return this._errorResp(undefined, reason.msg)
    }
    return this._errorResp()
  },
  objSuccessResp (obj, resp) {
    const res = resp || this._successResp()
    res.data = obj
    return res
  },
  listSuccessResp (list, resp) {
    const res = resp || this._successResp()
    res.list = list
    return res
  },
  listCountSuccessResp (listCount, resp) {
    const res = resp || this._successResp()
    res.totalCount = listCount.count
    res.list = listCount.rows
    return res
  }
}

// 加密
const encrypt = {
  encryptMD5: (data) => {
    return EncryptUtil.EncryptMD5(data)
  },
  desEncrypt: (data) => {
    return EncryptUtil.DESEncrypt(data, key, vi)
  },
  desDecrypt: (data) => {
    return EncryptUtil.DESDecrypt(data, key, vi)
  }
}

// 翻页
const paginate = {
  pageToOffsetLimit (page) {
    page = page || { offset: 0, limit: 10, page: 1 }
    if (page.page <= 0) {
      page.page = 1
    }
    if (!page.pageSize || page.pageSize === undefined) {
      page.pageSize = 10
    }
    return { offset: (page.page - 1) * page.pageSize, limit: page.pageSize }
  },
  getPage (reqObj, defaultPageSize) {
    const page = {}
    page.page = reqObj.page || 1
    page.pageSize = reqObj.pageSize || defaultPageSize || 10
    if (page.pageSize > 100) {
      page.pageSize = 10
    }
    return page
  }
}

// token
const token = {
  verifyToken (token, userId) {

  }
}
export {
  response, resState, encrypt, paginate, token
}
