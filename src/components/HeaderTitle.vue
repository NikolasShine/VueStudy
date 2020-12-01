<template>
  <div class="header">
    <div class="left">
      <slot name="left">
        <i class="iconfont icon-arrow-left" @click="leftClick"></i>
      </slot>
    </div>

    <slot></slot>
    <div class="title" v-if="title" @click="titleClick">{{title}}</div>

    <div class="right">
      <slot name="right"></slot>
      <span v-if="rightTxt" @click="rightClick">{{rightTxt}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: {
    title: String,
    rightTxt: String
  },
  methods: {
    leftClick() {
      this.$router.go(-1)
    },
    titleClick() {
      this.$emit('titleClick')
    },
    rightClick() {
      this.$emit('rightClick')
    }
  },
  mounted() {
    console.log(this.rightTxt)
  }
}
</script>

<style scoped>
.header {
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left {
  position: absolute;
  left: 11px;
}
.title {
  font-size: 1.125rem;
  font-weight: 500;
}
.right {
  position: absolute;
  right: 11px;
  font-size: 0.875rem;
}
</style>
