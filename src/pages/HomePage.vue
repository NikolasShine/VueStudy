<template>
  <div class="container">
    <div class="header_wrapper">
      <header-title>
        <template #left>
          <img class="logo" src="../assets/images/logo.png" alt />
        </template>

        <input class="search" type="text" placeholder="请输入搜索内容" v-model="key" @click="onSearch" />

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
    onSearch() {
      // TODO:搜索页面
      alert('弹出搜索页面')
    }
  },
  created() {
    // TODO:网络请求
  }
}
</script>

<style scoped>
.container {
  height: 100%;
  background-color: rgb(150, 164, 241);
}
.logo {
  width: 17px;
  height: 17px;
}
.search {
  width: 19.0625rem;
  height: 17px;
  border-width: 0px;
  border-radius: 22px;
}
</style>
