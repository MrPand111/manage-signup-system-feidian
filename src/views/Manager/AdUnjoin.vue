<template>
    <van-swipe-cell>
        <template slot="left">
            <van-button @click="goShowForm" square type="primary" text="报名表" />
        </template>
        <van-cell icon="friends" :border="false" title="畅喵" value="2020-3-8"/>
        <template slot="right">
            <van-button square type="primary" text="通过"/>
            <van-button square type="danger" text="拒绝" />
        </template>
    </van-swipe-cell>
</template>

<script>
import {UseComponents} from '../../utils';

import Vue from 'vue';
import { SwipeCell,Button,Cell } from 'vant';

UseComponents(Vue,SwipeCell,Button,Cell);

export default {
    name: 'AdUnjoin',
    methods: {
        goShowForm() {
            this.$router.push(`/system/showform/1`)
        }
    }
}
</script>

<style>

</style>