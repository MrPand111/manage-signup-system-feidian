<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router-view"/>
    </transition>
  </div>
</template>

<script>
export default  {
  name: 'App',
  data() {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route(to,from) {
      if(to.meta.index > from.meta.index) {
        this.transitionName = 'vux-pop-in';
      } else {
        this.transitionName = 'vux-pop-out';
      }
    }
  }
}
</script>

<style>
@import url(./style/common.css);

#app {
  width: 100%;
  height: 100%;
}
</style>
