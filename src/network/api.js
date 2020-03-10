import {request} from './axios'

/** 发送登录信息 */
export function sendLoginMsg(loginMsg) {
    return request({
        method: 'post',
        url: '/account/login/mail/1',
        data: loginMsg
    })
}

/** 发送注册信息 */
export function sendRegisterMsg(registerMsg) {
    return request({
        method: 'post',
        url: '/account/create/mail',
        data: registerMsg
    })
}

/** 获取激活信息 */
export function getActiveMail(mail,uuId) {
    return request({
        method: 'get',
        url: 'account/activeByMail/' + mail + '/' + uuId
    })
}

/** 上传头像 */
export function uploadAvatar(uploadMsg) {
    return request({
        method: 'post',
        url: '/upload/avatar',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: uploadMsg
    })
}

/** 发送更改用户信息 */
export function sendChangeInfo(userInfo) {
    return request({
        method: 'post',
        url: '/account/modify',
        data: userInfo
    })
}