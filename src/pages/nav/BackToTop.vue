<template>
  <transition name="fade">
    <button class="top text btn-this" v-if="show" @click="toTop"><img src="../../assets/totop.svg"/></button>
  </transition>
</template>

<script>
  export default {
    name: "BackToTop",
    data() {
      return {
        show: false,
        scrollTop: 0,
      }
    },
    methods: {
      getScrollTop: function () {
        //scrollTop: 被卷去的头部，就是当你滑动滚轮浏览网页的时候网页隐藏在屏幕上方的距离
        //window.pageYOffset    适用于ie9+
        //document.documentElement.scrollTop     适用于火狐和其他浏览器
        //document.body.scrollTop        适用于谷歌浏览器
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (this.scrollTop>0){
          this.show=true;
        }else{
          this.show=false;
        }
      },
      toTop: function () {
        if (this.scrollTop>10){
          document.body.scrollTop = document.documentElement.scrollTop= this.scrollTop-10;
          setTimeout(this.toTop,5);
        } else{
          document.body.scrollTop = document.documentElement.scrollTop= 0;
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.getScrollTop);
    },
    destroyed(){
      window.removeEventListener('scroll', this.getScrollTop);
    }
  }
</script>

<style scoped>
  .top{
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100;
  }
  .text{
    font-size: x-large;
    color: yellow;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  img {
    height: 20px;
    width: 20px;
  }
  .btn-this {
    background-color: #00000000;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .btn-this:hover {
    background-color: #00000000;
    border-color: darkgray;
  }
  /*.btn-this:focus {*/
    /*box-shadow: 0 0 2px 0.1rem black;*/
  /*}*/
  /*.btn-this:active {*/
    /*box-shadow: 0 0 2px 0.1rem black;*/
  /*}*/
</style>
