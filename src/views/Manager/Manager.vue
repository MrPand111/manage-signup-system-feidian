<template>
    <div class="manager">
        <nav-bar title="成员管理"></nav-bar>
        <van-collapse v-model="activeNames">
            <van-collapse-item title="待审核成员" name="1">
                <ad-unjoin v-if="isAdmin"></ad-unjoin>
                <ad-unjoin v-if="isAdmin"></ad-unjoin>
                <ad-unjoin v-if="isAdmin"></ad-unjoin>
                <primary v-if="!isAdmin"></primary>
                <primary v-if="!isAdmin"></primary>
            </van-collapse-item>
            <van-collapse-item title="已加入成员" name="2">
                <ad-joined v-if="isAdmin"></ad-joined>
                <ad-joined v-if="isAdmin"></ad-joined>
                <ad-joined v-if="isAdmin"></ad-joined>
                <ad-joined v-if="isAdmin"></ad-joined>
                <ad-joined v-if="isAdmin"></ad-joined>
                <ad-joined v-if="isAdmin"></ad-joined>
                <ad-joined v-if="isAdmin"></ad-joined>
                <primary v-if="!isAdmin"></primary>
                <primary v-if="!isAdmin"></primary>
            </van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
import NavBar from '../../components/NavBar';
import AdUnjoin from './AdUnjoin';
import AdJoined from './AdJoined';
import Primary from './Primary';
import {UseComponents} from '../../utils';

import Vue from 'vue';
import { Collapse, CollapseItem } from 'vant';

UseComponents(Vue,Collapse, CollapseItem);

export default {
    name: 'Manager',
    data() {
        return {
            activeNames: ['1','2'],
            isAdmin: true
        }
    },
    components: {
        NavBar,
        AdUnjoin,
        AdJoined,
        Primary
    }
}
</script>

<style>
.manager {
    width: 100%;
    height: 100%;
}

.van-cell__title {
    font-size: 1.2rem;
    color: rgba(69, 90, 100, 0.6);
}
</style>