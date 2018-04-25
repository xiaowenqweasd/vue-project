<template>
  <div class="calc-tool">
     <div class="head">
        水电平摊计算器
     </div>
     <div class="cont">
        <div class="calc-calc">
          <userList :userInfo="userInfo.userInfoMy"></userList>
          <userList :userInfo="userInfo.userInfoOther"></userList>
        </div>
        <div class="calc-result">
          <userList :userInfo="userInfo.others"></userList>
          <input class="submit" @click="calcValue" type="submit" value="开始计算"/>
          <div v-show="userInfo.show">
              您此次进账：{{userInfo.resultValue}}元
          </div>
        </div>
     </div>
  </div>
</template>

<script>
  import UserList from './UserList'
  import {mapState, mapActions} from 'vuex'
  import Util from '../util'
  export default {
     name: 'CalcTool',
     components: {
       UserList
     },
     computed: {
      ...mapState({
        userInfo: state => state.calcTool
      })
    },
    methods: {
      calcValue: function(){
        let otherInfo = Util.getInfoValue(this.userInfo.userInfoOther.list),
            myInfo =  Util.getInfoValue(this.userInfo.userInfoMy.list);
        this.$store.dispatch("calcValueMy", {otherInfo,myInfo});
      },
      ...mapActions([
        'calcValueMy', 
      ])
    }
  }
</script>

<style scoped lang="less">
.calc-tool{
  width: 80%;
  min-height: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .head{
    font-size: 18px;
    font-weight: bold;
    padding-top: 20px;
    height: 60px;
    text-align: left;
    padding-left: 10px;
  }
  .cont{
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 2px #fff;
    padding-top: 20px;
    >div{
      flex: 1;
      text-align: left;
      padding-left: 20px;
    }
    .calc-calc{
      border-right: 1px solid #eee;
      height: 100%;
    }
    .submit{
      width: 120px;
      height: 40px;
      margin: 0 auto;
      display: block;
      background-color: #03c9ff;
      border: none;
      border-radius: 4px;
      color: white;
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;
      margin-top: 20px;
    }
  }
  @media(max-width:800px){
    width: 100%;
    .cont{
      .calc-calc{
        border-right: none;
      }
     
    }
  }
}
</style>
