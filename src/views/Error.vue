<template>
  <div class="about">
    <div class="errorBox">
      <div class="errorLeft">
        <img class="errorImg" src="@/assets/img/error.png">
        <div class="errorText">
          <p class="text-one">页面未找到</p>
          <p class="text-two">此页面丢失或者您的链接不对</p>
          <el-button type="primary" icon="el-icon-back" @click="fanhui">返回上页</el-button>
        </div>
      </div>
      <!-- <h1 class="error-title">404</h1> -->
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    fanhui() {
      if (this.firstEnter) {
        this.$router.push({ path: "/" });
      } else {
        this.$router.go(-1);
      }
    }
  }
};
</script>

<style lang="sass" scoped>

.about
  width: 100%
  height: 100%
  background-color: #F1F2F9
  overflow: hidden
  .errorBox
    margin: 120px auto
    width: 660px
    height: 329px
    position: relative
    overflow: hidden
    .errorLeft
      width: 100%
      height: 100%
      .errorImg
        width: auto
        height: 329px
    .errorText
      text-align: left
      position: absolute
      top: 100px
      right: 0px
      .error-title
        font-size: 130px
        line-height: 130px
        color: #30333C
      .text-one
        font-weight: bold
        font-size: 25px
        color: #303133
        padding-bottom: 18px
      .text-two
        font-size: 16px
        color: #606266
        padding-bottom: 80px
</style>
