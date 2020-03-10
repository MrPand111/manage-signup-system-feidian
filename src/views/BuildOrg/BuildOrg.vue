<template>
  <div class="build-org">
        <warn-nav-bar title="创建组织"></warn-nav-bar>
        <h2 class="h2">设置头像</h2>
        <div class="build-header">
            <div class="flex1 flex-center">
                <van-uploader  :after-read="afterRead" v-model="fileList"/>
            </div>
        </div>
        <h2 class="h2">设置信息</h2>
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
            <p class="build-notice">*注意：报名表可在组织成功创建后，于【组织编辑】界面中修改</p>
            <div style="margin: 20px;">
                <van-button round block type="info" native-type="submit">
                提交
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
            orgname: '',
            introduction: '',
            tags: ''
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

.build-org .build-notice {
    width: 90%;
    margin: 10px auto;
    color: #666666;
}
</style>