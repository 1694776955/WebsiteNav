<template>
  <div class="search">
    <el-input
      placeholder="搜索内容"
      v-model="input3"
      class="input-with-select"
      @keyup.enter.native="searchOpen"
    >
      <el-select v-model="select" slot="prepend" placeholder="百度" class="search-select">
        <el-option
          v-for="(item, key) in searchList"
          :key="key"
          :label="key"
          :value="item"
        ></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search" class="input-button" @click="searchOpen"></el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchList:[],
      input3: "",
      select: "https://www.baidu.com/s?ie=UTF-8&wd="
    };
  },
  methods: {
    searchOpen() {
      var SearchUrl = this.select + this.input3;
      window.open(SearchUrl);
    }
  },
  created() {
    // axios公共请求调用
    this.http.get("setting").then(res => {
        console.log(res.data[6]);
      this.searchList = res.data[6];
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
.search
  margin: 100px auto
  width: 60%
.search-select
  width: 110px
.el-scrollbar .el-select-dropdown__wrap .el-scrollbar__view
  margin-bottom: 15px
.el-scrollbar .el-scrollbar__wrap
  margin-bottom: -15px !important
.header .el-input-group__append
  background-color: transparent
</style>
