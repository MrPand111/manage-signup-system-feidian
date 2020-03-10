<template>
    <div class="home flex-column">
        <home-header></home-header>
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <home-card></home-card>
                <home-card></home-card>
                <home-card></home-card>
                <home-card></home-card>
                <home-card></home-card>
                <home-card></home-card>
                <home-card></home-card>
            </van-pull-refresh>
    </div>
</template>

<script>
import {UseComponents} from '../../utils';

import HomeHeader from './HomeHeader.vue';
import HomeCard from './HomeCard.vue';
import Vue from 'vue';
import { PullRefresh,Toast } from 'vant';
UseComponents(Vue,PullRefresh,Toast);

export default {
    name: 'Home',
    data() {
        return {
            count: 0,
            isLoading: false
        }
    },
    methods: {
        onRefresh() {
            setTimeout(() => {
                Toast('刷新成功');
                this.isLoading = false;
                this.count++;
            }, 1000);
        }
    },
    components: {
        HomeHeader,
        HomeCard
    }
}
</script>

<style>
.home {
    width: 100%;
    height: 100%;
}

.van-pull-refresh {
    height: 100%;
    overflow: auto;
}

</style>