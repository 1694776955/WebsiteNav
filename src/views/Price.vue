<template>
  <div class="price">
      <Search></Search>
    
    <div class="pricebox">
        <div class="priceTitle">
            <h4 >捐赠牛大拿</h4>
            <el-divider content-position="left">+++++</el-divider>
            <div class="">
                asdfasdfas;ljk;
            </div>
            <el-divider content-position="left"></el-divider>
        </div>
        <div class="priceComont">
            
        </div>
        <div class="priceList">
             <h4>贡献榜</h4>
            <el-divider content-position="left">+++++</el-divider>
            <div>
                <el-row :gutter="20">
                    <el-col :span="6"><div class="grid-content"><div class="grid-content-margin">阿斯顿发送到发顺丰三法师发阿发阿萨德暗</div></div></el-col>
                    <el-col :span="6"><div class="grid-content"><div class="grid-content-margin">阿斯顿发送到发顺丰三法师发阿发阿萨德暗</div></div></el-col>
                    <el-col :span="6"><div class="grid-content"><div class="grid-content-margin">阿斯顿发送到发顺丰三法师发阿发阿萨德暗</div></div></el-col>
                    <el-col :span="6"><div class="grid-content"><div class="grid-content-margin">阿斯顿发送到发顺丰三法师发阿发阿萨德暗</div></div></el-col>
                    <el-col :span="6"><div class="grid-content"><div class="grid-content-margin">阿斯顿发送到发顺丰三法师发阿发阿萨德暗</div></div></el-col>
                    <el-col :span="6"><div class="grid-content"><div class="grid-content-margin">阿斯顿发送到发顺丰三法师发阿发阿萨德暗</div></div></el-col>
                    <el-col :span="6"><div class="grid-content"><div class="grid-content-margin">阿斯顿发送到发顺丰三法师发阿发阿萨德暗</div></div></el-col>
                </el-row>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Search from '@/components/Search.vue'
export default {  
    components: {
    Search
  }
}
</script>
<style lang="sass">
.price
    width: 100%
    .pricebox
        background-color: red
        border-radius: 6px
        background-color: #fff
        padding: 24px 24px
        @media screen and (max-width: 1300px)
            width: 1000px;
            margin: 0 auto
        @media screen and (min-width: 1300px)
            width: 1200px;
            margin: 0 auto
        @media screen and (min-width: 1920px)
            width: 1400px;
            margin: 0 auto
        @media screen and (min-width: 2000px)
            width: 1600px;
            margin: 0 auto
.el-col
    border-radius: 4px;
    margin-bottom:20px
    .grid-content
        border-radius: 4px
        max-height: 36px
        background: #EBEEF5
        font-size: 12px
        line-height: 36px
        .grid-content-margin
            margin: 0 15px
            color: #606266
</style>

