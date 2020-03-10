<template>
    <div class="show-form">
        <nav-bar title="畅喵"></nav-bar>
        <div class="form-inner">
            <van-panel :title="key" v-for="(value,key,index) in formData" :key="index">
                <br>
                <div>{{value}}</div>
                <br>
            </van-panel>
        </div>
    </div>
</template>

<script>
import NavBar from '../../components/NavBar';
import Vue from 'vue';
import {Panel} from 'vant';

Vue.use(Panel);

export default {
    name: 'ShowForm',
    data() {
        return {
            formData: {}
        }
    },
    mounted() {
        let str = '{"姓名":"熊猫","性别":"男","经历1":"JSON at position 1 at JSON.parse (<anonymous>) at PopupModal._this2.onHandleRef (index.js?4edb:137) at Po...","经历2":"睡一天"}';
        this.formData = JSON.parse(str);
    },
    components: {
        NavBar
    }
}
</script>

<style>
.show-form {
    width: 100%;
    height: 100%;
}


.van-cell__title {
    font-size: 1.2rem;
    color: rgba(69, 90, 100, 0.6);
}

.van-panel__content>div {
    padding-left: 1.5em;
    font-size: 1.2rem;
}
</style>