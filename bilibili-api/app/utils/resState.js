const resState = {
	re_success: 100, //正确的返回
	re_error: 101, //未知错误
	re_error_field: 102, //传入的字段不正确
	re_error_custom: 103, //自定义错误
	re_token_timeout: 104, //token过期
	re_user_not_allowed: 201, //无权限
	re_user_invalid: 202, //非法用户, token解密出来的userId和发送请求你的UserId不匹配
	re_user_disable: 203, //账户已禁用
	re_user_not_exist: 205, //用户不存在
	re_user_psw_error: 206, //密码不正确
	re_user_added: 207, //已添加的用户
	re_news_delete_not_allow: 300 // 无权删除
}

export default resState