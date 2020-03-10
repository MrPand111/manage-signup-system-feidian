<template>
    <div class="view-org">
        <nav-bar :title="title"></nav-bar>
        <h2 class="h2">组织介绍</h2>
        <div class="intro-board">
            <div class="board-inner">{{introduction}}</div>
        </div>
        <h2 class="h2">组织活动</h2>
        <div class="tags-board">
            <div class="tag-container flex-center" v-for="(item,index) in tags" :key="index">
                <van-button plain hairline type="info">{{item}}</van-button>
            </div>
        </div>
        <div class="signup-button">
            <van-button type="primary"  @click="goSignUp(1)" block>报 名</van-button>
        </div>
    </div>
</template>

<script>
import NavBar from '../../components/NavBar';

import Vue from 'vue';
import { Button } from 'vant';
Vue.use(Button);

export default {
    name: 'ViewOrg',
    data() {
        return {
            title: '沸点工作室',
            introduction: '这是今年3.7女生节我们院的活动，是关于各种flag的征集，有各种参与方式，可以填写问卷参与也可以投稿到邮箱，也可以私戳公众号/呲牙我们奖品多多',
            tags: ''
        }
    },
    mounted() {
        let str = '集体睡觉，周末集训，小组分享，大组分享，毕业拍照，集体划水';
        this.tags = str.split('，');
    },
    methods: {
        goSignUp(id) {
            this.$router.push(`/system/signup/${id}`)
        },
    },
    components: {
        NavBar
    }
}
</script>

<style>
.view-org {
    width: 100%;
    height: 100%;
    background: #f7f8fa;
}

.view-org .intro-board {
    width: 100%;
    background: white;
}

.view-org .intro-board .board-inner {
    width: 80%;
    margin: 0 auto;
    padding: 30px 0;
    line-height: 180%;
    font-size: 1rem;
    text-indent: 1em;
    color: #666666;
}

.view-org .tags-board {
    width: 100%;
    display: flex;
    flex-wrap:wrap;
    background: white;
}

.view-org .tags-board .tag-container {
    width: 33.3%;
    height: 50px;
    margin-top: 15px;
    margin-bottom: 15px;
}

.view-org .tags-board>:last-child {
    margin-bottom: 30px;
}

.view-org .signup-button {
    width: 25%;
    margin: 30px auto;
}
</style>