<template>
  <div class="wrap">
    <div class="bg"></div>
    <div class="room-wrap">
      <div class="left-room">
        <img class="room1" src="@/assets/new/room-left1.webp" alt="">
        <img class="room2" src="@/assets/new/room-left.png" alt="">
      </div>
      <div class="right">
        <img class="right-room" src="@/assets/new/room-right.webp" alt="">
      </div> 
    </div>
    <div class="child-wrap">
      <img class="child-left" src="@/assets/new/child-left.webp" alt="">
      <img class="child-right" src="@/assets/new/child-right.webp" alt="">
    </div>
    <div class="flower-wrap">
    </div>
    <canvas id="fires"> </canvas>
  </div>
</template>

<script>
export default {
  name:'child',
  data(){
    return{

    }
  }

}
</script>

<style scope>
.wrap{
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.bg{
  width: 100%;
  height: 100%;
  background: url('../assets/new/bg.webp') no-repeat ;
  background-position: 50% 0;
  background-size: 150% 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.room-wrap,.flower-wrap,.child-wrap{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.room-wrap{
  position: absolute;
  left: 0;
  z-index: 2;
  bottom: 65px;
  width: 100%;
}
.room-wrap img{
  display: block;
}
.room1{
  width: 104px;
}
.room2{
  width: 129px;
  margin-top: -100px;
}
.right-room{
  width: 130px;
  position: relative;
  bottom: -36px;
}
.flower-wrap{
  width: 100%;
  height:110px;
  background: url("../assets/new/road.webp") no-repeat;
  background-position: -60px ;
  background-size: 130% 120%;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 10;
}
.flower-wrap::before{
  content: "";
  width:100px;
  height: 110px;
  background: url("../assets/new/flower-left.webp") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 9;
}
.flower-wrap::after{
  content: "";
  width:120px;
  height: 150px;
  background: url("../assets/new/flower-right.webp") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 9;
}
.child-wrap{
  width: 100%;
  position: absolute;
  right: 0;
  bottom: 20px;
  z-index: 99;
  justify-content: center;
}
.child-wrap img{
  width: 160px;
}
@keyframes childplay {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(15deg);
  }
}
.child-left{
  animation: childplay 1s -1s ease-in-out infinite alternate;
}
.child-right{
  animation: childplay 1s -1.5s ease-in-out infinite alternate;
}



</style>