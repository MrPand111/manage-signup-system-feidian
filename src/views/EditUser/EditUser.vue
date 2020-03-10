<template>
  <div class="editUser">
        <warn-nav-bar title="修改资料"></warn-nav-bar>
        <h2 class="h2">修改头像</h2>
        <div class="edit-header">
            <div class="flex1 flex-center">
                <img src="../../assets/me.png" alt="">
            </div>
            <div class="flex1 flex-center">
                <van-uploader :after-read="afterRead" />
            </div>
        </div>
        <h2 class="h2">修改信息</h2>
        <van-cell-group>
            <van-field v-model="mail" label="邮箱" disabled/>
            <van-field v-model="username" label="用户名" placeholder="请输入用户名"/>
            <van-field v-model="password" type="password" label="密码" />
        </van-cell-group>
        <br>
        <van-button type="info" size="large" round @click="changeInfo">确认修改</van-button>
  </div>
</template>

<script>
import {UseComponents} from '../../utils';
import {uploadAvatar,sendChangeInfo} from '../../network/api';

import WarnNavBar from '../../components/WarnNavBar';
import Vue from 'vue';
import { Uploader,Field,CellGroup,Button } from 'vant';
UseComponents(Vue,Uploader,Field,CellGroup,Button);

export default {
    name: 'EditUser',
    data() {
        return {
            mail: 'aaa@qq.com',
            username: 'panda',
            password: 123,
            url: ''
        }
    },
    methods: {
        afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
            uploadAvatar(file).then(res => {
                const [code,msg] = [res.data.meta.code,res.data.meta.message];
                if(code === 0) {
                    Notify({ type: 'success', message: msg });
                } else {
                    Notify({ type: 'danger', message: msg });
                }
            })
        },
        changeInfo() {
            sendChangeInfo({
                mail,username,password
            }).then(res => {
                const [code,msg] = [res.data.meta.code,res.data.meta.message];
                if(code === 0) {
                    Notify({ type: 'success', message: msg });
                    this.$router.push('/user/edit');
                } else {
                    Notify({ type: 'danger', message: msg });
                }
            })
        }
    },
    components: {
        WarnNavBar
    }
}
</script>

<style>
.editUser {
    width: 100%;
    height: 100%;
    background: #f7f8fa;
}

.editUser .edit-header {
    width: 100%;
    height: 140px;
    display: flex;
    background: white;
}

.editUser .edit-header>:first-child img {
    width: 45%;
    height: 60%;
    border-radius: 50%;
}
</style>