import crypto from 'crypto'

// MD5加密
function EncryptMD5 (data) {
  const encryptMD5 = crypto.createHash('md5')
  encryptMD5.update(data)
  return encryptMD5.digest('hex')
}

// DES加密、解密,用来加密信息字段,无需App端解密
// 私有方法
function cipheriv (en, code, data) {
  const buf1 = en.update(data, code)
  const buf2 = en.final()
  const r = Buffer.alloc(buf1.length + buf2.length)
  buf1.copy(r)
  buf2.copy(r, buf1.length)
  return r
}

// DES加密
function DESEncrypt (data, key, vi) {
  return cipheriv(crypto.createCipheriv('des', key, vi), 'utf8', data).toString('base64')
}

// DES解密
function DESDecrypt (data, key, vi) {
  return cipheriv(crypto.createDecipheriv('des', key, vi), 'base64', data).toString('utf8')
}

// AES加密
function AESEncrypt (data, secretKey) {
  const cipher = crypto.createCipheriv('aes-128-ecb', secretKey)
  return cipher.update(data, 'utf8', 'hex') + cipher.final('hex')
}

// AES 解密
function AESDecrypt (data, secretKey) {
  const cipher = crypto.creatDecipher('aes-128-ecb', secretKey)
  return cipher.update(data, 'hex', 'utf8') + cipher.final('utf8')
}

export {
  EncryptMD5,
  DESEncrypt,
  DESDecrypt,
  AESEncrypt,
  AESDecrypt
}
