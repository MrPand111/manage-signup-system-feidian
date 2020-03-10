<template>
  <div class="edit-form">
      <warn-nav-bar title="报名表编辑"></warn-nav-bar>
      <h2 class="h2">添加表单项</h2>
      <div class="add-item">
        <br>
        <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="input">输入框</van-radio>
            <van-radio name="radio">单选框</van-radio>
            <van-radio name="textarea">文本框</van-radio>
        </van-radio-group>
        <!-- 根据不同的radio出现不同的配置项 -->
        <br>
        <div>
            <van-field label="名称" v-model="name" border/><br>
            <van-field name="switch" label="必填">
                <template #input>
                    <van-switch v-model="isReq" size="20" />
                </template>
            </van-field><br> 
        </div>
        <!-- 添加输入框 -->
        <div v-show="radio === 'input'">
            <br>
            <van-button type="primary" size="large" @click="addComponent('text')">添加</van-button>
        </div>
        <!-- 添加单选框 -->
        <div v-show="radio === 'radio'">
            <div>
                <van-field label="选项1" v-model="rgroup.r1"/><br>
                <van-field label="选项2" v-model="rgroup.r2"/><br>
                <van-field label="选项3" v-model="rgroup.r3"/><br>
                <van-field label="选项4" v-model="rgroup.r4"/><br>
            </div>
            <br>
            <van-button type="primary" size="large" @click="addComponent('radio')">添加</van-button>
        </div>
        <!-- 添加文本框 -->
        <div v-show="radio === 'textarea'">
            <br>
            <van-button type="primary" size="large" @click="addComponent('textarea')">添加</van-button>
        </div>
      </div>
      <h2 class="h2">显示表单</h2>
      <div class="render-form">
          <show-form v-for="item in formConfig" :key="item.id" :item="item"></show-form>
      </div>
      <div class="confirm-edit flex-center">
          <van-button type="primary" @click="handleEditForm">确认修改</van-button>
      </div>
  </div>
</template>

<script>
import WarnNavBar from '../../components/WarnNavBar';
import ShowForm from './ShowForm';
import {UseComponents} from '../../utils';

import Vue from 'vue';
import { Button,Field,RadioGroup,Radio,Switch } from 'vant';

UseComponents(Vue,Button,Field,RadioGroup,Radio,Switch);

export default {
    name: 'EditForm',
    data() {
        return {
            show: false,
            radio: 'input',
            formConfig: [],
            name: '',
            isReq: false,
            rgroup: {
                r1: '',
                r2: '',
                r3: '',
                r4: ''
            }
        }
    },
    methods: {
        getId() {
            return this.formConfig.length;
        },
        addComponent(type) {
            if(!this.name) {
                return;
            }
            if(type === 'radio') {
                this.$set(this.formConfig,this.getId(),{
                    id: this.getId(),
                    type: 'radio',
                    label: this.name,
                    r1: this.rgroup.r1,
                    r2: this.rgroup.r2,
                    r3: this.rgroup.r3,
                    r4: this.rgroup.r4,
                    req: this.isReq
                });
                for(let key in this.rgroup) {
                    this.rgroup[key] = '';
                }
            } else {
                this.$set(this.formConfig,this.getId(),{
                    id: this.getId(),
                    type: type,
                    label: this.name,
                    req: this.isReq
                });
            }
            this.name = '';
            this.isReq = false;
        },
        handleEditForm() {
            console.log(JSON.stringify(this.formConfig));
        }
    },
    components: {
        WarnNavBar,
        ShowForm
    }
}
</script>

<style>
.edit-form {
    width: 100%;
    height: 100%;
    background: #f7f8fa;
}

.edit-form .confirm-edit {
    margin: 20px auto;
}

</style>