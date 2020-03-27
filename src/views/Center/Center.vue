<template>
    <div class="center">
        <nav-bar title="个人中心"></nav-bar>
        <center-card></center-card>
        <div class="func-list">
            <center-func url="/system/list/joined" imgsrc="joined.png" title="已加入"></center-func>
            <center-func url="/system/list/built" imgsrc="have.png" title="已创建"></center-func>
            <center-func url="/system/list/collected" imgsrc="collect.png" title="我的收藏"></center-func>
            <center-func url="/system/build" imgsrc="build.png" title="创建"></center-func>
            <center-func url="/system/help" imgsrc="help.png" title="帮助/意见反馈"></center-func>
        </div>

    </div>
</template>

<script>
import NavBar from '../../components/NavBar';
import CenterCard from './CenterCard';
import CenterFunc from './CenterFunc';

export default {
    name: 'Center',
    data() {
        return {
        }
    },
    components: {
        NavBar,
        CenterCard,
        CenterFunc
    }
}
</script>

<style>
.center {
    width: 100%;
    height: 100%;
    background: #f7f8fa;
}

.center .func-list {
    width: 100%;
    margin-top: 20px;
}

.center .func-list:last-child {
    border-bottom: 1px solid #ddd;
}
</style>