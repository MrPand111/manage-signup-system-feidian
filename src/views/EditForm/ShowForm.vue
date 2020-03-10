<template>
  <div>
    <!-- TEXT -->
    <div v-show="item.type === 'text'">
        <van-field :label="item.label" :required="item.req ? true : false" border/>
    </div>
    <!-- RADIO -->
    <div v-show="item.type === 'radio'">
        <van-field name="radio" :label="item.label" :required="item.req ? true : false">
        <template #input>
            <van-radio-group direction="horizontal">
            <van-radio name="1">{{item.r1}}</van-radio>
            <van-radio name="2">{{item.r2}}</van-radio>
            <van-radio v-if="item.r3" name="2">{{item.r3}}</van-radio>
            <van-radio v-if="item.r4" name="2">{{item.r4}}</van-radio>
            </van-radio-group>
        </template>
        </van-field>
    </div>
    <!-- TEXTAREA -->
    <div v-show="item.type === 'textarea'">
    <van-field
        :label="item.label"
        rows="3"
        type="textarea"
        :required="item.req ? true : false"
    />
    </div>
  </div>
</template>

<script>
import {UseComponents} from '../../utils';

import Vue from 'vue';
import { Button,Field,RadioGroup,Radio } from 'vant';

UseComponents(Vue,Button,Field,RadioGroup,Radio);
export default {
    name: 'ShowForm',
    props: ['item']
}
</script>

<style>

</style>