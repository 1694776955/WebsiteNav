<template>
  <div class="price">
    <Search></Search>

    <div class="pricebox">
      <div class="priceTitle">
        <h4>捐赠本站</h4>
        <el-divider content-position="left"></el-divider>

        <!-- 栅格布局盒子 -->
        <el-row :gutter="20">
          <el-col :span="5">
            <el-image class :src="settingPrice.gfitimg">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="19">
            <pre class="SettingPriceText" v-html="settingPrice.gifttext"></pre>
          </el-col>
        </el-row>
        <el-divider></el-divider>
      </div>
      <div class="priceComont"></div>
      <div class="priceList">
        <h4>贡献榜</h4>
        <el-divider content-position="left"></el-divider>
        <div>
          <el-row :gutter="20">
            <el-col class="picelistbox" :span="6" v-for="(item, key) in settingPriceList">
              <div class="grid-content">
                <el-row class="grid-content-margin">
                    <el-col :span="12" >
                    {{item.name}}
                    </el-col>
                    <el-col :span="12" class="priceNum">
                    捐赠：￥{{item.price}}
                    </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Search from "@/components/Search.vue";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      setting: [],
      settingPrice: [],
      settingPriceList: []
    };
  },
  components: {
    Search,
    Footer
  },
  //生命周期函数
  mounted() {},
  created() {
    // axios公共请求调用
    this.http.get("setting").then(res => {
      //   console.log(res.data);
      this.setting = res.data;
      this.settingPrice = res.data[4];
      this.settingPriceList = res.data[4].gfitlist
    //   console.log(this.setting);
    //   console.log(this.settingPriceList);
    });
  }
};
</script>
<style lang="sass">
.price
    width: 100%
    height: 100%
    .pricebox
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
        .priceTitle
            .SettingPriceText
                font-size: 12px
                color: #606266
                line-height: 24px
                width: 100%
                overflow: hidden
                word-wrap:break-word
.priceList
    .picelistbox
        border-radius: 4px;
        margin-bottom: 20px
        .grid-content
            border-radius: 4px
            max-height: 36px
            background: #EBEEF5
            font-size: 12px
            line-height: 36px
            .grid-content-margin
                margin: 0 15px
                color: #606266
                .priceNum
                    text-align: right
</style>

