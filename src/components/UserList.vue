<template>
   <div class="user-list">
        <div class="title">{{userInfo.title}}</div>
        <div class="item" v-for="item in userInfo.list">
            <label>{{item.text}}</label>
            <input :name="item.name" v-model="item.value" :disabled="item.disabled" type="text"/>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
     name: 'UserList',
     props: ['userInfo']
  }
</script>

<style lang="less">
 .user-list{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
   
    .title{
        font-weight: bold;
        width: 100%;
    }
    .item{
        width: 50%;
        margin-top: 5px;
        margin-bottom: 10px;
        >label{
            color: #646a79;
            padding-bottom: 2px;
            display: block;
            font-size: 13px;
        }
        input{
            height: 30px;
            line-height: 30px;
            box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.1);
            background-color: #ffffff;
            border: solid 1px #ebecf1;
            width: 200px;
            padding: 0 10px;
             font-size: 12px;
        }
    }
    .title-next{
    margin-top: 20px;
    }
     @media(max-width:800px){
        .item{
          width: 100%;
          padding-right: 20px;
          input{
            width: 100%;
            min-width: 300px;
            height: 40px;
            line-height: 40px;
          }
        }
     }
}
</style>
