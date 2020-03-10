<template>
  <div class="active-account">
      <div v-if="isSuccess===1" class="success box">
          恭喜！激活成功<br>
          <router-link to='/'>点击此处跳转至登录界面</router-link>
      </div>
      <div v-if="isSuccess===2" class="warning box">
          抱歉！邮箱激活失败<br>
          <router-link to='/user/register'>点击此处重新注册</router-link>
      </div>
  </div>
</template>

<script>
import { getActiveMail } from '@/network/api';

export default {
    name: 'ActiveAccount',
    data() {
        return {
            isSuccess: 0
        }
    },
    created() {
        const [mail,uuId] = [this.$route.params.mail,this.$route.params.uuId];
        getActiveMail(mail,uuId).then(res => {
            const code = res.data.meta.code;
            if(code === 0) {
                this.isSuccess = 1;
            } else {
                this.isSuccess = 2;
            }
        })
    }
}
</script>

<style>
.active-account {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.active-account .box {
    width: 80%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;
    font-size: 1.2rem;
    border-radius: .3rem;
}

.success {
    background: rgb(168, 236, 159);
}

.warning {
    background: rgb(235, 118, 118);
}
</style>