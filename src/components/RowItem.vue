
<template>
  <div class="container" @click="itemClick">
    <div class="left">
      <!-- 常用的点击item,这个是左边的icon,slot用于修改 -->
      <slot>
        <i class="iconfont icon-atm-away"></i>
      </slot>
    </div>

    <div class="title" v-if="title">{{title}}</div>

    <div class="rightTxt" v-if="rightTxt">{{rightTxt}}</div>

    <div class="right">
      <i class="iconfont icon-arrow-right"></i>
    </div>

    <div class="divider"></div>
  </div>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: {
    title: String,
    rightTxt: String
  },
  data() {
    return {}
  },
  methods: {
    itemClick() {
      console.log('itemClick')
      this.$emit('itemClick')
    }
  },
  mounted() {
    console.log('row-item', this.title)
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 44px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 11px;
  align-items: center;
}
.left {
  width: 18px;
  height: 18px;
  justify-content: center;
  align-items: center;
  margin-right: 11px;
}
.title {
  font-size: 1.125rem;
  font-weight: 500;
  color: rgb(0, 0, 0);
}
.rightTxt {
  position: absolute;
  right: 30px;
  font-size: 0.875rem;
  color: rgb(151, 150, 150);
}
.right {
  position: absolute;
  right: 11px;
  font-size: 0.875rem;
}
.divider {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 1px;
  background-color: grey;
}
</style>
