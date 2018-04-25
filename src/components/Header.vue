<template>
<div class="header">
    <ul>
      <li v-for="item in headerItems" >
        <router-link :to="item.url">{{item.name}}<span class="icon" v-if="item.children">&#xe6a6;</span></router-link>
        <ul class="li-children">
          <li v-for="childrenItem in item.children">
           <router-link :to="childrenItem.url">{{childrenItem.name}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    headerItems () {
	    return this.$store.state.header.headerItems
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.header{
  text-align: left;
  z-index: 1;
  height: 60px;
  line-height: 60px;
  position: fixed;
  background-color: #090723;
  width: 100%;
  ul{
    li{
      display: inline-block;
      position: relative;
      .li-children{
        display: none;
      }
      &:hover{
        .li-children{
          display: block;
        }
        a.icon{
          &:after{
            content: ""
          }
        }
      }
      a{
        color: #fff;
        text-decoration: none;
        &.selected{
          font-size: 16px;
        }
        .icon{
          font-size: 12px;
          margin-left: 2px;
        }
      }
    }
  }
  .li-children{
    background-color: #090723;
    position: absolute;
    top: 50px;
    width: 160%;
    margin-left: -30%;
    font-size: 13px;
    line-height: 40px;
    border-radius: 4px;
    li{
      line-height: 30px;
      text-align: center;
      width: 100%;
      margin: 0;
      a{
        color: #ddd;
      }
      &:hover{
        background-color: #1a182e;
         a{
          color: #fff;
        }
      }
    }
  }
}
</style>
