<template>
  <div class="home">
    <ul>
      <li 
        v-for="(item,index) in list" 
        :key="item.route" 

        :class="activeIndex === index ? 'active':''"
        @click="handleRoute(item.route)"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'home',
  data(){
    return{
      activeIndex:null,
      list:[
        {name:'新年好',route:'/newyear'},
        // {name:'逛庙会',route:'/child'},
        {name:'猜一猜',route:'/show'},
        {name:'随机抽奖',route:'/lottery'},
        {name:'动画学校',route:'/animate'},
        {name:'后台',route:'/mana'},
      ]
    }
  },
  methods:{
    handleRoute(route){
      this.$router.push(route)
    }
  }
}
</script>

<style  scoped>
ul{
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
}
@keyframes li-animate {
  0%{
    transform: rotate(0deg);
    width: 35%;
  }
  100%{
    transform: rotate(360deg);
    width: 35%;
  }
}
li{
  font-size: 20px;
  width: 45%;
  height: 100px;
  line-height: 100px;
  color: #b91509;
  text-align: center;
  margin-top: 20px;
  border-radius: 5px;
  background: linear-gradient(45deg,#0000ff7a 0%, #ff000085 50%,#ffff0069 100%);
  box-shadow: 0 0 10px 2px gray;
}
.active{
  animation: li-animate 1s linear infinite;
}
</style>

