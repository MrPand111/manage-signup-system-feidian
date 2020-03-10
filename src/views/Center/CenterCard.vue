<template>
    <div class="center-card">
        <div class="center-card-center flex-column">
            <h2>超级熊猫皇帝</h2>
            <br>
            <router-link tag="p" to="/user/edit">编辑个人信息</router-link>
        </div>
        <div class="flex1 flex-center">
            <img src="../../assets/me.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'CenterCard'
}
</script>

<style>
.center-card {
    width: 100%;
    height: 140px;
    display: flex;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    box-shadow: 0 2px 3px #ebedf0;
    background: white;
}


.center-card .center-card-center {
    flex: 2;
    text-align: center;
    justify-content: center;
}

.center-card .center-card-center p {
    color: #1989fa;
}

.center-card>:nth-child(2) img {
    width: 62%;
    height: 55%;
    border:1px solid skyblue;
    border-radius: 50%;
}
</style>