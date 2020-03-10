<template>
  <div class="sign-up">
        <warn-nav-bar title="填写报名表"></warn-nav-bar>
        <van-form @submit="onSubmit">
            <div v-for="item in formConfig" :key="item.id">
                <van-field
                    v-if="item.type === 'text'"
                    :name="item.label"
                    :label="item.label"
                    v-model='values[item.id]'
                    :rules="[{ required: item.req, message: '该项不能为空' }]"
                    :required="item.req ? true : false"
                    border
                />
                <van-field 
                v-if="item.type === 'radio'" 
                :name="item.label" 
                :label="item.label"
                :rules="[{ required: item.req, message: '该项不能为空' }]"
                :required="item.req ? true : false"
                >
                    <template #input>
                        <van-radio-group v-model='values[item.id]' direction="horizontal">
                        <van-radio :name="item.r1">{{item.r1}}</van-radio>
                        <van-radio :name="item.r2">{{item.r2}}</van-radio>
                        <van-radio v-if="item.r3" :name="item.r3">{{item.r3}}</van-radio>
                        <van-radio v-if="item.r4" :name="item.r4">{{item.r4}}</van-radio>
                        </van-radio-group>
                    </template>
                </van-field>
                <van-field
                    v-if="item.type === 'textarea'"
                    type="textarea"
                    rows="3"
                    :name="item.label"
                    :label="item.label"
                    v-model='values[item.id]'
                    :rules="[{ required: item.req, message: '该项不能为空' }]"
                    :required="item.req ? true : false"
                    border
                />
            </div>
            <div style="margin: 16px;">
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
import { Form,Button,Field,RadioGroup,Radio } from 'vant';

UseComponents(Vue,Form,Button,Field,RadioGroup,Radio);

export default {
    name: 'SignUp',
    data() {
        return {
            formConfig: [],
            values: {}
        }
    },
    mounted() {
        this.formConfig = [
                {
                    id: 0,
                    type: 'text',
                    label: '姓名',
                    req: true
                },
                {
                    id: 1,
                    type: 'radio',
                    label: '性别',
                    r1: '男',
                    r2: '女',
                    r3: '',
                    r4: '',
                    req: true
                },
                {
                    id: 2,
                    type: 'textarea',
                    label: '经历1',
                    req: true
                },
                {
                    id: 3,
                    type: 'textarea',
                    label: '经历2',
                    req: false
                },
            ]
        this.formConfig.forEach(item => {
            this.$set(this.values,`${item.type}${item.id}`,'');
        })
        console.log(this.$data);
    },
    methods: {
        onSubmit(values) {
            console.log(values);
        }
    },
    components: {
        WarnNavBar
    }
}
</script>

<style>
.sign-up {
    width: 100%;
    height: 100%;
    background: #f7f8fa;
}
</style>