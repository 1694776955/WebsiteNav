<template>
  <div class="about">
    <Search/>
    <div class="aboutbox">
      <!------------------------------------------------关于本站叙述--------------------------------------------------->
      <div class="aboutHeader">
        <h5>关于本站</h5>
        <el-divider content-position="left"></el-divider>
        <el-row>
          <el-col :span="2" class="Linkleft">
            <el-image :src="settingSeo.logo">
              <div slot="error">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="22">
            <pre v-html="settingSeo.description"></pre>
          </el-col>
        </el-row>
        <el-divider content-position="left"></el-divider>
      </div>
      <!------------------------------------------------联系站长--------------------------------------------------->
      <div class="aboutBy">
        <h5>联系站长</h5>
        <el-divider content-position="left"></el-divider>
        <el-row>
          <el-col :span="2" class="Linkleft">
            <el-image :src="settingSeo.aboutByimg">
              <div slot="error">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="22">
            <p>
              个人网站：
              <a :href="settingSeo.weburl">{{settingSeo.weburl}}</a>
            </p>
            <p>GitHub：{{settingSeo.github}}</p>
            <p v-show="settingIs.isweibo">新浪微博：{{settingSeo.weibo}}</p>
            <p v-show="settingIs.isqq">QQ：{{settingSeo.qq}}</p>
            <p>Mail：{{settingSeo.mail}}</p>
            <p>QQ群：{{settingSeo.qqqun}}</p>
          </el-col>
        </el-row>
        <el-divider content-position="left"></el-divider>
      </div>
      <!------------------------------------------------申请友链--------------------------------------------------->
      <div class="aboutLink">
        <h5>友链格式</h5>
        <el-divider content-position="left"></el-divider>
        <p class="linktext">{{settingAbout.linktext}}</p>
        <el-row class="LinkIco">
          <el-col :span="4" class="Linkleft">
            <el-image :src="settingAbouticonlink.img">
              <div slot="error">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-col>
          <el-col :span="20">
            <el-input size="small" :value="settingAbouticonlink.inputText"></el-input>
          </el-col>
        </el-row>
        <el-divider content-position="left"></el-divider>
        <el-row class="LinkIco">
          <el-col :span="4" class="Linkleft">
            <p>{{settingAbouttextlink.title}}</p>
          </el-col>
          <el-col :span="20">
            <el-input size="small" :value="settingAbouttextlink.inputText"></el-input>
          </el-col>
        </el-row>
        <el-divider content-position="left"></el-divider>
      </div>
      <!------------------------------------------------更新日志--------------------------------------------------->
      <div class="aboutLog">
        <h5>更新日志</h5>
        <el-divider content-position="left"></el-divider>
        <el-timeline>
          <el-timeline-item v-for="(activity, index) in settingAbout.Updatelogs" :key="index">
            <el-card shadow="hover">
              <p class="logp" style="font-size:12px;margin-bottom:15px">
                <font style="color:#409EFF">{{activity.version}}</font>
                {{activity.time}}
              </p>
              <p class="logp" style="font-size:12px;line-height:24px">{{activity.updateText}}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Search from "@/components/Search.vue";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      setting: [],
      settingAbout: [],
      settingSeo: [],
      settingIs: [],
      settingAbouticonlink:[],
      settingAbouttextlink:[]
    };
  },
  components: {
    Search,
    Footer
  },
  // 页面打开后立即执行
  created() {
    // axios公共请求调用
    this.http.get("setting").then(res => {
      // console.log(res.data);
      this.setting = res.data;
      this.settingSeo = res.data[0];
      this.settingAbout = res.data[5];
      this.settingIs = res.data[1];
      this.settingAbouticonlink=res.data[5].iconlink
      this.settingAbouttextlink=res.data[5].textlink
      // console.log(this.setting,this.settingSeo,this.settingAbout)
    });
  }
};
</script>

<style lang="sass">
.about
    width: 100%
    height: 100%
    overflow-y:auto
    .aboutbox
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
        h5
          color: #606266
        .aboutHeader
          .el-col
            color: #606266
            font-size: 12px
            line-height: 20px
          .Linkleft
            text-align: center
            .el-image
              width: 80px
        .aboutBy
          .el-col
            color: #606266
            font-size: 12px
            line-height: 20px
          .Linkleft
            text-align: center
            .el-image
              width: 80px
            p
              color: #606266
              font-size: 12px
              a
                font-size: 12px
                text-decoration: none
                color: #606266
              a:hover
                text-decoration: none
                color: #303133
        .aboutLink
          .linktext
            color: #606266
            font-size: 12px
            line-height: 24px
            text-indent: 24px
          .LinkIco
            color: #606266
            margin: 40px 0
            .Linkleft
              text-align: center
              height: 30px
              p
                line-height: 30px
              .el-image
                height: 30px
                img
                  width: auto
            .el-col
              .el-input
                input
                  font-size: 12px
                  color: #909399
</style>
