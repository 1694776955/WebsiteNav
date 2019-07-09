<template>
  <div class="home">
    <el-scrollbar style="height: 100%;">
      <!-- 搜索窗 -->
      <Search :searchList="setting[6]"></Search>
      <!-- 公告模块 -->
      <div class="handle container">
            <el-card class="notice" shadow="never">
              <a :href="gonggaourl" target="_blank" :title="gonggao" ><i class="iconfont icon-laba"></i> {{gonggao}}</a>
            </el-card>
      </div>
      <!-- banner -->
      <div class="container banner">
        <a :href="bannerurl" target="_blank"><img :src="banner" alt=""></a>
      </div>
      <!-- 网站尾部 -->
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-scrollbar>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  data() {
    return {
      value3: true,
      setting: [],
      gonggao:'',
      gonggaourl:"",
      banner:"",
      bannerurl:""
    };
  },
  components: {
    Search,
    Footer
  },
  created() {
    // axios公共请求调用
    this.http.get("setting").then(res => {
      //   console.log(res.data);
      this.setting = res.data;
      this.gonggaourl = res.data[0].gonggaourl;
      this.gonggao = res.data[0].gonggao;
      this.banner = res.data[2].banner
      this.bannerurl = res.data[2].bannerurl
      //   console.log(this.setting);
      //   console.log(this.settingPriceList);
    });
  }
};
</script>
<style lang="sass">
.home
  width: 100%
  height: 100%
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
.container
  border-radius: 6px
  background-color: #fff
  padding: 24px 24px
  @media screen and (max-width: 1300px)
      width: 952px
      margin: 0 auto
  @media screen and (min-width: 1300px)
      width: 1152px
      margin: 0 auto
  @media screen and (min-width: 1920px)
      width: 1352px
      margin: 0 auto
  @media screen and (min-width: 2000px)
      width: 1552px
      margin: 0 auto
.handle
  background-color: transparent
  padding: 0
  @media screen and (max-width: 1300px)
    width: 1000px
    margin: 0 auto 20px
  @media screen and (min-width: 1300px)
    width: 1200px
    margin: 0 auto 20px
  @media screen and (min-width: 1920px)
    width: 1400px
    margin: 0 auto 20px
  @media screen and (min-width: 2000px)
    width: 1600px
    margin: 0 auto 20px
  .notice
    background-color: #FFFAE8
    padding: 10px
    border-radius: 4px
    .el-card__body
      padding: 0
      a
        text-decoration: none
        transition: .2s
        color: #F93C12
        font-size: 12px
        vertical-align: middle
        i
          vertical-align: text-bottom
.banner
  padding: 10px 24px
  a
    display: block
    width: 100%
    text-align: center
    font-size: 0
    background-color: #494F5E
    img
      width: auto
      height: 80px
</style>
