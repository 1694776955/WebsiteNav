<template>
  <div class="footer">
    <div class="footerbox">
        <el-divider></el-divider>
        <el-row :gutter="20" class="linkList">
        <el-col :span="22">
          <!------------------------------------------------友情链接按钮--------------------------------------------------->
          <div class="linkButton" @click="isLinkButton = !isLinkButton">
            友情连接<i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <div class="linkButton">
            <router-link to="/about" class="linkButton">联系站长</router-link>
          </div>
        </el-col>
        <el-col :span="2">
          <el-col :span="8" class="LinkIcon">
            <a :href="settingAll.github" title="github" class="LinkAUrl" target="_blank">
              <i class="iconfont icon-github"></i>
            </a>
          </el-col>
          <el-col :span="8" class="LinkIcon">
            <a :href="settingAll.weibo" title="新浪微博" class="LinkAUrl" target="_blank">
              <i class="iconfont icon-xinlang"></i>
            </a>
          </el-col>
          <el-col :span="8" class="LinkIcon" >
             <el-dropdown :hide-on-click="false">
                <span class="el-dropdown-link">
                    <i class="iconfont icon-weixin" style="color:#909399"></i>
                </span>
                <el-dropdown-menu slot="dropdown" style="padding:0">
                    <el-image style="width:150px" :src="settingAll.wechatimg">
                        <div slot="error" class="image-slot">
                            <i class="el-icon-picture-outline"></i>
                        </div>
                    </el-image>
                </el-dropdown-menu>
            </el-dropdown>

                     
           
          </el-col>
        </el-col>
        </el-row>
      <!------------------------------------------------友情链接Box盒子--------------------------------------------------->
      
        <el-collapse-transition>
          <el-row v-show="isLinkButton" class="linkButtonBox">
            <el-col :span="2" v-for="item in setting[3]">
              <a
                :href="item.linkurl"
                class="LinkAUrl"
                target="_blank"
                :title="item.linktitle"
              >{{item.linktitle}}</a>
            </el-col>
          </el-row>
        </el-collapse-transition>
        <el-divider></el-divider>
        <div class="footTitBox">
           
            <p>建议使用 Safari, Chrome 浏览器访问本站</p>
            <p>
                Copyright © <a href="http://beipy.com" style="color: #606266;text-decoration: none" target="_blank" title="Beipy开发版权所有禁止修改">Beipy.com</a> 2019 All Rights Reserved. <a href="http://www.beian.miit.gov.cn" target="_blank" style="color: #606266;text-decoration: none">{{settingAll.icp}}</a> Powered by  Beipy
            </p>
            <p>声明：本站所展示和发布的设计作品仅供学习交流，未经书面许可，任何组织、任何人不得以任何形式进行商业用途的发布与篡改。</br>本站作品的版权归创作者、合作者、签约机构、工作公司所有，且保留一切法律追究权利。</p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "0",
      isLinkButton: false,
      setting: [],
      settingAll:[]
    };
  },
  components: {},
  //生命周期函数
  mounted() {},
  created() {
    // axios公共请求调用
    this.http.get("setting").then(res => {
      //   console.log(res.data);
      this.setting = res.data
      this.settingAll=res.data[0]
    //   console.log(this.setting);
    });
  }
};
</script>
<style lang="sass">
.footer
    width: 100%
    background-color: transparent !important
    .footerbox
        border-radius: 6px
        @media screen and (max-width: 1300px)
            width: 1000px
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
        .linkList
            .linkButton
                color: #909399
                font-size: 12px
                cursor: pointer
                display: inline
                font-weight: bold
                margin-right: 15px
                text-decoration: none
            .linkButton:hover
                color: #409EFF
        .LinkIcon
            text-align: right
            .LinkAUrl
                font-size: 16px
                color: #909399
                text-decoration: none
            .LinkAUrl:hover
                color: #606266
        .linkButtonBox
            padding: 20px 0
            font-size: 12px
            color: #909399
            .LinkAUrl
                color: #909399
                text-decoration: none
            .LinkAUrl:hover
                color: #606266
        .footTitBox
            font-size: 12px
            color: #909399
            line-height: 20px
</style>

