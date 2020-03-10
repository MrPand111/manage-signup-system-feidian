<template>
    <van-form @submit="onSubmit">
        <van-field
            v-model="mail"
            name="mail"
            placeholder="请输入邮箱"
            :rules="[{ required: true, message: '请填写邮箱' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="password"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 36px;">
            <van-button block type="info" size="normal" native-type="submit">
            登 录
            </van-button>
        </div>
    </van-form>
</template>

<script>
// 引入方法
import {sendLoginMsg} from '../../network/api';
import {setStore,UseComponents} from '../../utils';
// 引入组件
import {Form,Button,Field,Notify} from 'vant';
import Vue from 'vue';
UseComponents(Vue,Form,Button,Field,Notify);

export default {
    name: 'LoginForm',
    data() {
        return {
            mail: '',  //登录用邮箱
            password: ''    // 密码
        }
    },
    methods: {
        onSubmit(values) {
            sendLoginMsg(values).then(res => {
                console.log(res.data);
                const code = res.data.meta.code;
                const msg = res.data.meta.message;
                const token = res.headers.authorization;
                setStore('token',token);
                
                if(code === 0) {
                    const userId = res.data.data.results
                    setStore('userId',userId);
                    this.$store.commit('user/USER_ID',{userId});
                    Notify({ type: 'success', message: msg });
                    this.$router.push('/system/home');
                } else {
                    Notify({ type: 'danger', message: msg });
                }
            })
        }
    }
}
</script>

<style scoped>
.login .van-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login .van-field {
    width: 150%;
    margin-top: 1.5rem;
}

.login .van-button {
    width: 200%;
    font-size: 1rem;
    border-radius: .3rem;
}

.login .van-form>div:nth-child(3) {
    display: flex;
    justify-content: center;
}
</style>