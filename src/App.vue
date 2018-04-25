<template>
  <div id="app">
    <my-header></my-header>
    <div class="content"><router-view/></div>
  </div>
</template>

<script>
import MyHeader from './components/Header'
export default {
  name: 'App',
  components: {
    MyHeader,
  }
}
</script>
<style lang="less">
*, *:before, *:after{
  box-sizing:border-box
}
body{
  background-color: #eee;
}
#app {
  font-family: tahoma,"microsoft yahei","\5FAE\8F6F\96C5\9ED1"!important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
  .content{
    position: absolute;
    top: 60px;
    width: 100%;
  }
  .icon{
    font-family: "iconfont";
  }
}
@font-face {
  font-family: 'iconfont';  /* project id 642298 */
  src: url('//at.alicdn.com/t/font_642298_010dhg8hwryhkt9.eot');
  src: url('//at.alicdn.com/t/font_642298_010dhg8hwryhkt9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_642298_010dhg8hwryhkt9.woff') format('woff'),
  url('//at.alicdn.com/t/font_642298_010dhg8hwryhkt9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_642298_010dhg8hwryhkt9.svg#iconfont') format('svg');
}
html,body{
  padding:0;
  margin: 0;
}
</style>
