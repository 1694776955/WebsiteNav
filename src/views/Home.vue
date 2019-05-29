<template>
  <div class="home">
    <el-scrollbar style="height: 100%;">
    <el-container>
			<!-- 头部文件 -->
      <Search></Search>
     
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
    </el-scrollbar>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue'

export default {
  name: 'home',
  data() {
    return {
      value3:true
    }
  },
  components: {
    Search
  }
}
</script>
<style lang="sass">
.home
  width: 100%
  height: 100%
  background-color: #F1F2F9
  .stingButton
    width: 80%
    margin: 0 auto
    text-align: right
    padding: 20px 0
  .mainList
    width: 80%
    margin: 0 auto
    padding: 20px 20px 0 20px
    background-color: #fff
    border-radius: 4px
    .el-row
      padding-bottom: 10px
    .el-row .mianlistbox
      margin-bottom: 10px
.stingButton .el-switch__core
  width: 18px !important
  height: 9px !important
.stingButton  .el-switch__core:after
  width: 8px
  height: 8px
  top: 0px
.stingButton  .el-switch.is-checked .el-switch__core::after
  margin-left: -8px
.stingButton .el-switch__label span
  font-size: 12px
  color: #606266
.mianlistbox
  overflow: hiddenQ
  .listLogo
    width: 30px
    height: 30px
    display: inline-block
    float: left
    border-radius: 4px
    background-color: #DCDFE6
    .el-image
      width: 100%
      height: 100%
      .image-slot
        width: 100%
        height: 100%
        text-align: center
        i
          line-height: 30px
  .listTitle
    height: 30px
    padding: 0 8px
    p
      font-size: 12px
      overflow: hidden
      text-overflow: ellipsis 
      white-space: nowrap
</style>
