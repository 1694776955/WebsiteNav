<template>
  <div class="about">
    <Search/>
    <div class="aboutbox">
    
    </div>
    <Footer/>
  </div>
</template>
<script>
import Search from "@/components/Search.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Search,
    Footer
  }
};
</script>

<style lang="sass">
.about
    width: 100%
    height: 100%
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
</style>
