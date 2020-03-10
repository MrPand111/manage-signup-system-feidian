<template>
  <div class="build-org">
        <warn-nav-bar title="组织编辑"></warn-nav-bar>
        <h2 class="h2">修改头像</h2>
        <div class="build-header">
            <div class="flex1 flex-center">
                <van-uploader  :after-read="afterRead" v-model="fileList"/>
            </div>
        </div>
        <h2 class="h2">修改信息</h2>
        <van-form @submit="onSubmit">
            <van-field
                v-model="orgname"
                name="orgname"
                label="组织名称"
                placeholder="请输入组织名称"
                :rules="[{ required: true, message: '请填写组织名称' }]"
            />
            <van-field
                v-model="introduction"
                name="introduction"
                label="简介"
                rows="4"
                placeholder="请输入简介"
                type="textarea"
                :rules="[{ required: true, message: '请填写简介' }]"
            />
            <van-field
                v-model="tags"
                name="tags"
                label="相关活动"
                rows="2"
                placeholder="请输入相关活动，用中文逗号隔开"
                type="textarea"
                :rules="[{ required: true, message: '请填写相关活动' }]"
            />
            <br>
            <router-link to="/system/editform/1" class="edit-form">点击编辑报名表</router-link>
            <br>
            <div style="margin: 20px;">
                <van-button round block type="info" native-type="submit">
                保存修改
                </van-button>
            </div>
        </van-form>
  </div>
</template>

<script>  
import WarnNavBar from '../../components/WarnNavBar';
import {UseComponents} from '../../utils';

import Vue from 'vue';
import { Uploader,Form,Button,Field } from 'vant';

UseComponents(Vue,Form,Button,Field,Uploader);

export default {
    name: 'BuildOrg',
    data() {
        return {
            fileList: [],
            orgname: '沸点工作室',
            introduction: '这是今年3.7女生节我们院的活动，是关于各种flag的征集，有各种参与方式，可以填写问卷参与也可以投稿到邮箱，也可以私戳公众号/呲牙我们奖品多多',
            tags: '集体睡觉，周末集训，小组分享，大组分享，毕业拍照，集体划水'
        }
    },
    methods: {
        afterRead(file) {
            console.log(file);
        },
        onSubmit(value) {
            console.log(value);
        }
    },
    components: {
        WarnNavBar
    }
}
</script>

<style>
.build-org {
    width: 100%;
    height: 100%;
}

.build-org .build-header {
    width: 100%;
    height: 100px;
}

.build-org .edit-form {
    margin-left: 15px;
}
</style>