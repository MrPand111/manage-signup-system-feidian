<template>
    <div class="list-card flex-center">
        <div class="card-inner">
            <div class="card-left  flex-center">
                <img src="../../assets/feidian.png" alt="">
            </div>
            <div class="card-center flex-column">
                <h2>沸点工作室</h2>
                <p>华农最棒的互联网团队。拥有大熊猫等...</p>
                <div class="card-buttons">
                    <van-button type="primary" plain round size="small" @click="goSignUp(1)">报名</van-button>
                    <van-button type="info" plain round size="small" @click="goViewOrg(1)">查看</van-button>
                    <van-button color="#fcbb14" plain round size="small">收藏</van-button>
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
    methods: {
        goSignUp(id) {
            this.$router.push(`/system/signup/${id}`)
        },
        goViewOrg(id) {
            this.$router.push(`/system/vieworg/${id}`)
        }
    }
}
</script>

<style scoped>
.van-pull-refresh .list-card {
    width: 100%;
    height: 140px;
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
    height: 40%;
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

.van-pull-refresh .list-card .card-inner .card-center p {
    color: #666666;
    text-indent: 1rem;
    font-size: .8rem;
    margin-top: -10%;
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