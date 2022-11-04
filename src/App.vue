<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <LoadingSpinner :loading="loadingStatus"></LoadingSpinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import bus from './utils/bus'

export default {
  components: {
    ToolBar,
    LoadingSpinner,
  },
  data() {
    return {
      loadingStatus: false
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true
    },
    stopSpinner() {
      this.loadingStatus = false
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner)
    bus.$on('end:spinner', this.stopSpinner)
  },
  // 이벤트 버스는 계속 쌓이기 때문에 페이지 종료되기전 off를 해줘야함
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner)
    bus.$off('end:spinner', this.stopSpinner)
  }
  
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: #34495e;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
