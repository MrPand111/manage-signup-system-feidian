<template>
    <div class="list-card flex-center">
        <div class="card-inner">
            <div class="card-left  flex-center">
                <img src="../../assets/feidian.png" alt="">
            </div>
            <div class="card-center flex-column">
                <h2>沸点工作室</h2>
                <div class="card-buttons">
                    <van-button v-if="type !== 'built'" type="info" plain round size="small" @click="linkTo(`/system/vieworg/1`)">组织信息</van-button>
                    <van-button v-if="type === 'built'" type="info" plain round size="small" @click='linkTo(`/system/editorg/1`)'>组织编辑</van-button>
                    <van-button v-if="type !== 'collected'" type="info" plain round size="small" @click='linkTo(`/system/manager/1`)'>成员管理</van-button>
                    <van-button type="info" plain round size="small">报名链接</van-button>
                </div>
            </div>
            <div class="card-right"></div>
        </div>
    </div>
</template>

<script>
import {UseComponents} from '../../utils';

import Vue from 'vue';
import { Button } from 'vant';
UseComponents(Vue,Button);

export default {
    name: 'HomeCard',
    props: ['type'],
    methods: {
        linkTo(url) {
            this.$router.push(url);
        }
    }
}
</script>

<style>
.van-pull-refresh .list-card {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #f6f7f9;
    box-shadow: 0 1px 1.5px #ebedf0;
}

.van-pull-refresh .list-card .card-inner {
    width: 100%;
    height: 100%;
    /* background: #fafafa; */
    border-radius: .3rem;
    display: flex;
}

.van-pull-refresh .list-card .card-inner .card-left {
    flex: 1;
}

.van-pull-refresh .list-card .card-inner .card-left img {
    width: 60%;
    height: 55%;
    border:1px solid skyblue;
    border-radius: 50%;
}

.van-pull-refresh .list-card .card-inner .card-center {
    flex: 3;
    justify-content: space-around;
}

.van-pull-refresh .list-card .card-inner .card-center h2 {
    font-size: 1.2rem;
    text-indent: 1rem;
}

.van-pull-refresh .list-card .card-inner .card-center .card-buttons {
    display: flex;
    justify-content: space-around;
    margin-top: -10%;
}

.van-pull-refresh .list-card .card-inner .card-right {
    flex: 0.5;
}
</style>