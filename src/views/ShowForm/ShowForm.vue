<template>
    <div class="show-form">
        <nav-bar title="畅喵"></nav-bar>
        <main>
            <div class="form-inner">
                <van-panel :title="key" v-for="(value,key,index) in formData" :key="index">
                    <br>
                    <div>{{value}}</div>
                    <br>
                </van-panel>
            </div>
            <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
                评论区
            </van-divider>
            <div class="comment-list">
                <cmt-item></cmt-item>
                <cmt-item></cmt-item>
                <cmt-item></cmt-item>
            </div>
            <div class="comment">
                <div class="flex-center flex3">
                    <van-field v-model="comment" placeholder="请输入对该报名表的评论" />
                </div>
                <div class="flex-center flex1">
                    <van-button type="info" round>发布评论</van-button>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import {UseComponents} from '../../utils';
import NavBar from '../../components/NavBar';
import CmtItem from './CommentItem';
import Vue from 'vue';
import {Panel,Divider,Field,Button} from 'vant';

UseComponents(Vue,Panel,Divider,Field,Button);

export default {
    name: 'ShowForm',
    data() {
        return {
            formData: {},
            comment: ''
        }
    },
    mounted() {
        let str = '{"姓名":"熊猫","性别":"男","经历1":"JSON at position 1 at JSON.parse (<anonymous>) at PopupModal._this2.onHandleRef (index.js?4edb:137) at Po...","经历2":"睡一天"}';
        this.formData = JSON.parse(str);
    },
    components: {
        NavBar,
        CmtItem
    }
}
</script>

<style>
.show-form {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.show-form>main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.van-cell__title {
    font-size: 1.2rem;
    color: rgba(69, 90, 100, 0.6);
}

.van-panel__content>div {
    padding-left: 1.5em;
    font-size: 1.2rem;
}

.comment-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.comment {
    width: 100%;
    height: 60px;
    position: absolute;
    background: white;
    bottom: 0;
    left: 0;
    z-index: 2;
    display: flex;
    border-top: 1px solid #ddd;
    box-shadow: 0 -2px 20px 2px rgba(0,0,0,0)
}

.flex3 {
    flex: 3;
}
</style>