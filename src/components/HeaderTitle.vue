<template>
  <div class="header">
    <div class="left">
      <!-- 标题栏,左边用slot,可以直接修改标题栏左边,默认是返回键 -->
      <slot name="left">
        <i class="iconfont icon-arrow-left" @click="leftClick"></i>
      </slot>
    </div>

    <!-- slot默认修改中间组件,用于中间修改 -->
    <slot></slot>
    <div class="title" v-if="title" @click="titleClick">{{title}}</div>

    <div class="right">
      <!-- 右边同左边,默认是文字 -->
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
      // 回调标题点击方法,一般没啥用
      this.$emit('titleClick')
    },
    rightClick() {
      // 右边文字点击方法,一般为保存
      this.$emit('rightClick')
    }
  },
  mounted() {
    // TODO: 调试打印信息,可删除
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
