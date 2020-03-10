<template>
    <div class="orgList flex-column">
        <nav-bar :title="listTitle"></nav-bar>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="flex-list">
            <org-card :type="type"></org-card>
            <org-card :type="type"></org-card>
            <org-card :type="type"></org-card>
            <org-card :type="type"></org-card>
            <org-card :type="type"></org-card>
            <org-card :type="type"></org-card>
            <org-card :type="type"></org-card>
            <org-card :type="type"></org-card>
        </van-pull-refresh>
    </div>
</template>

<script>
import NavBar from '../../components/NavBar';
import OrgCard from './OrgCard';
import {UseComponents} from '../../utils';

import Vue from 'vue';
import { PullRefresh,Toast } from 'vant';
UseComponents(Vue,PullRefresh,Toast);

export default {
    name: 'OrgList',
    data() {
        return {
            listTitle: 'hhh',
            type: this.$route.params.type,
            isLoading: false
        }
    },
    mounted() {
        if(this.type==='joined') this.listTitle = '已加入组织';
        else if(this.type==='built') this.listTitle = '已创建组织';
        else if(this.type==='collected') this.listTitle = '已收藏组织';
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
        NavBar,
        OrgCard
    }
}
</script>

<style>
.orgList {
    width: 100%;
    height: 100%;
}

.flex-list {
    height: 100%;
    overflow: auto;
}
</style>