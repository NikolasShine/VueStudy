<template>
  <div class="container">
    <div class="header_wrapper">
      <header-title>
        <template #left>
          <p class="el-icon-loading;"></p>
        </template>
        <div style="position: absolute; right: 280px;">
         <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
          <el-button slot="append" class="el-icon-search" ></el-button>
         </el-input>
        </div>
        <div style="position: absolute; right: 100px;">
          <el-dropdown :hide-on-click="false">
           <span class="el-dropdown-link">
             <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
             <i class="el-icon-arrow-down el-icon--right"></i>
           </span>
           <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>账号设置</el-dropdown-item>
            <el-dropdown-item>更换账号</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <template #right>
          <i class="el-icon-setting" @click="$router.push('/SettingPage')"></i>
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
  border-radius: 10px;
  background-color:#409EFF;
}
.logo {
  width: 17px;
  height: 17px;
}
.el-icon-setting {
  color: #ffffff;
  width: 20%;
  height: 20px;
  font-size: 19px;
}
.el-icon-setting:hover {
  color: #b3d8ff;
}
.el-icon-search {
  font-size: 19px;
}
.el-icon-search:hover {
  color: #409EFF;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
   font-size: 12px;
}
</style>
