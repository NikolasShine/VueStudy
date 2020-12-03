<template>
  <div class="container">
    <header-title title="设置" rightTxt="保存"></header-title>
    <!-- RowItem使用案例1 -->
    <row-item title="密码设置" rightTxt="未设置" @itemClick="passwordSettingClick">
      <!-- 用于修改icon -->
      <i class="iconfont icon-bussiness-man"></i>
    </row-item>
    <!-- RowItem使用案例2 -->
    <row-item title="关于我们" @itemClick="aboutUsClick" />
    <!-- RowItem使用案例3 -->
    <a href="https://cn.vuejs.org/">
      <row-item title="Vue相关">
        <img class="icon" src="../assets/images/logo.png" />
      </row-item>
    </a>
  </div>
</template>

<script>
import HeaderTitle from '../components/HeaderTitle'
import RowItem from '../components/RowItem'
// import { Indicator } from 'mint-ui'
// import Api from '../api/api'
// import util from '../api/util'
export default {
  name: 'SettingPage',
  components: {
    HeaderTitle,
    RowItem
  },
  data() {
    return {}
  },
  methods: {
    passwordSettingClick() {
      alert('TODO:跳转到密码设置页')
    },
    aboutUsClick() {
      alert('TODO:跳转到关于我们页')
    }
  },
  created() {}
}
</script>

<style scoped>
.container {
  /* background-color: rgb(150, 164, 241); */
  background-size: 100% 100%;
}
.header_wrapper {
  height: 6.133333rem;
  background-size: 100% 100%;
}
.icon {
  width: 17px;
  height: 17px;
}
</style>
