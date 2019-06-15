<template>
  <div id="app">
    <el-container>
      <el-aside width="auto">

        <!-- <el-switch v-model="isCollapse"></el-switch> -->
        <!-- logo -->
        <div class="leftlogo" id="leftLogo" v-if="!isCollapse">
          <div id="leftlogo_one" style="padding:0px 20px">
            <el-image :src="src" style="width: 100%; height: 64px;margin:8px 0;border-bottom: 2px rgba(255,255,255,.04) solid;" >
            <div slot="placeholder" class="image-slot">
              加载中
              <span class="dot">...</span>
            </div>
          </el-image>
          </div>
        </div>
        <!-- logo end -->
        <!-- navlist -->
        <div class="leftnav">
          <el-scrollbar style="height: 100%;">
            <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            :default-active="$route.path"
            background-color="#30333C"
            text-color="#909399"
            active-text-color="#fff"
            size="mail"
            router
          >
          
            <!-- <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">首页</span>
              </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group >
              <el-submenu index="1-4" >
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu> -->

            <el-menu-item index="/">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
						 <el-menu-item index="/message">
						  <i class="el-icon-chat-line-square"></i>
						  <span slot="title">留言板</span>
						</el-menu-item>
						<el-menu-item index="/price">
						  <i class="el-icon-medal"></i>
						  <span slot="title">捐赠</span>
						</el-menu-item>
						<el-menu-item index="/about" >
						  <i class="el-icon-collection-tag"></i>
						  <span slot="title">关于本站</span>
						</el-menu-item>
          </el-menu> 
          </el-scrollbar>
        </div>
        <!-- navlist end -->
        
      </el-aside>
      <el-container  >
          
          <!-- router -->
          <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      isCollapse: false,
      src:"https://i.loli.net/2019/05/05/5ccec1c79d7e8.png",
      homeList:[],
			string:[],
			loading: false
    }
  },
  components: {
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*  */
  
}
.el-menu-vertical-demo:not(.el-menu--collapse){
  width: 200px;
  min-height: 100%;
}
.el-scrollbar .el-scrollbar__wrap {overflow-x: hidden;}
.el-container{
  height: 100%;
  background-color: #F1F2F9;
  overflow: auto;
}
.leftlogo{
  width: 200px;
  height: 80px;
}
.leftnav{
  height: -webkit-calc(100% - 80px);
}
.leftnav .el-menu-vertical-demo{ 
  height: 100%;
}
.el-scrollbar__view .el-menu{
  border-right: none
}
.el-aside{
  /* border-right: solid 1px #e6e6e6; */
  background-color: #30333C
}
.el-menu-itemborder{
  border-top: 1px rgba(255,255,255,.04) solid;
  border-bottom: 1px rgba(255,255,255,.04) solid;
}

</style>
