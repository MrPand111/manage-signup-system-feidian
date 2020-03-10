<template>
    <div class="home-header">
        <div class="flex1">
            <img src="../../assets/logo.jpg" @click="linkTo('/')" alt="">
        </div>
        <div class="header-center">
            <van-search
            v-model="value"
            placeholder="请输入组织ID/组织名称"
            input-align="center"
            @search="onSearch"
            />
        </div>
        <div class="flex1">
            <img src="../../assets/me.png"  @click="linkTo('/user/center')" alt="">
        </div>  
    </div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';
Vue.use(Search);

export default {
    name: 'HomeHeader',
    data() {
        return {
            value: ''
        }
    },
    methods: {
        onSearch(val) {
            console.log(val);
        },
        linkTo(url) {
            this.$router.push(url)
        }
    }
}
</script>

<style>
.home .home-header {
    width: 100%;
    height: 3.8rem;
    display: flex;
}

.home .home-header>:nth-child(1) img {
    width: 100%;
    height: 100%;
}

.home .home-header .header-center {
    flex: 4;
}

.home .home-header>:nth-child(3) img {
    padding-left: 5%;
    padding-top: 6%;
    width: 75%;
    height: 80%;
    border-radius: 50%;
}
</style>