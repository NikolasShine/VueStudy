<template>
  <div class="container">
    <div class="header_wrapper">
      <header-title>
        <template #left>
          <img class="logo" src="../assets/images/logo.png" alt />
        </template>

        <input type="text" placeholder="请输入搜索内容" v-model="key" />

        <template #right>
          <i class="iconfont icon-all" @click="$router.push('/SettingPage')"></i>
        </template>
      </header-title>
    </div>
  </div>
</template>

<script>
import HeaderTitle from '../components/HeaderTitle'
// import { Indicator } from 'mint-ui'
// import Api from '../api/api'
// import util from '../api/util'
export default {
  name: 'HomePage',
  components: {
    HeaderTitle
  },
  data() {
    return {
      key: ''
    }
  },
  methods: {
    onBack() {
      this.$router.push(-1)
    }
  },
  created() {}
}
</script>
<style scoped>
.container {
  background-color: rgb(150, 164, 241);
}
.logo {
  width: 17px;
  height: 17px;
}
</style>
