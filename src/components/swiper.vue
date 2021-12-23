<template>
  <div class="new-year">
    <div id="music" :class="musicPlay?'music-active':''" >
      <img class="music_disc" src="@/assets/newYear/music_disc.png" alt="">
      <img class="music_pointer" src="@/assets/newYear/music_pointer.png" alt="">
    </div>
    <div class="page" id="page1" >
      <div class="p1_lantern">
        <p class="p1_lantern_text">
          点击屏幕<br>开启好运
        </p>
      </div>
      <div class="p1_imooc">
        <img  src="@/assets/newYear/p1_imooc.png" alt="">
        <p>新年新气象，万事顺心</p>
      </div>
    </div>
    <div class="page" id="page2" >
      <div class="p2_circle"></div>
      <div class="p2_2016"></div>
    </div>
    <div class="page" id="page3" >
      <div class="p3_couplet">
        <img class="p3_couplet_second" src="@/assets/newYear/p3_couplet_second.png" alt="">
        <img class="p3_title" src="@/assets/newYear/p3_title.png" alt="">
        <img class="p3_couplet_first" src="@/assets/newYear/p3_couplet_first.png" alt="">
      </div>
      <img class="p3_blessing" src="@/assets/newYear/p3_blessing.png" alt="">
    </div>
    <audio 
      id="music-audio"
      style="display:none"
      controls 
      type="audio/mpeg" 
      src="http://www.imooc.com/activity/project/project1/audio/happynewyear.mp3"
    >
    </audio>
  </div>
</template>

<script>

export default {
  name:"newyear",
 
  data(){
    return{
      step:1,
      musicPlay:false
    }
  },
  mounted(){
  },
  methods:{

    handleMusicPlay(){
      this.musicPlay = !this.musicPlay
      let music = document.getElementById('music-audio')
      if(this.musicPlay){
        music.play()
      }else{
        music.pause()
      }
      console.log('musicplay')
    },
    handeNextStep(){
      this.step +=1
      console.log('+',this.step)
    },
    handePreStep(){
      this.step -=1
      console.log('-',this.step)
    }
  }
}
</script>

<style scope>
#music{
  position: fixed;
  top: 3vh;
  right: 4vw;
  width: 17vw;
  height: 17vw;
  border: 4PX solid #ef1639;
  border-radius: 50%;
  background: #fff;
}
.music_disc{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 85%;
}
.music_pointer{
  width: 25%;
  position: absolute;
  right: 1%;
  top: 20%;
}
@keyframes music_disc {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.music-active .music_disc{
  animation: music_disc 4s linear infinite;
}
.page{
  width: 100%;
  height: 100vh;
}
#page1{
  background: url('../assets/newYear/p1_bg.jpeg') no-repeat;
  background-size: 100% 100%;
}
.p1_lantern{
  width: 45vw;
  height: 475px;
  margin: 0 auto;
  background: url('../assets/newYear/p1_lantern.png') no-repeat;
  background-size: 100% ;
  position: relative;
}
@keyframes p1_lantern_flash {
  0%{
    transform: scale(0.8);
  }
  100%{
    transform: scale(1);
    opacity: 1;
  }
  
}
.p1_lantern::before{
  content: "";
  width: 30vw;
  height: 30vw;
  position: absolute;
  top: -8vw;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: #d60b3b;
  box-shadow: 0 0 10vw 10vw #d60b3b;
  opacity: 0.5;
  border-radius: 50%;
  animation: p1_lantern_flash 0.5s infinite alternate;
}
.p1_lantern_text{
  width: 100%;
  text-align: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 20PX;
  color: #fff;
  font-weight: 600;
}
.p1_imooc{
  text-align: center;
  margin-top: 20px;
}
.p1_imooc img{
  width: 104px;
  object-fit: cover;
}
#page2{
  background: url('../assets/newYear/p2_bg.jpeg') no-repeat;
  background-size: 100% 100%;
  position: relative;
}
@keyframes p2_circle {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
@keyframes p2_circle-out {
  0%{
    transform: rotate(360deg);
  }
  100%{
    transform: rotate(0deg);
  }
}
.p2_circle{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 60vw;
  height: 60vw;
  margin: auto;
  background: url('../assets/newYear/p2_circle_outer.png') no-repeat;
  background-size: 100%;
  animation: p2_circle-out 1s  linear infinite;
}
.p2_circle::before{
  content: "";
  width: 80%;
  height: 80%;
  background: url('../assets/newYear/p2_circle_middle.png') no-repeat;
  background-size: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: p2_circle 0.5s -1s linear infinite;
}
.p2_circle::after{
  content: "";
  width: 60%;
  height: 60%;
  background: url('../assets/newYear/p2_circle_inner.png') no-repeat;
  background-size: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: p2_circle 0.3s -2s linear infinite;
}
.p2_2016{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 27.5vw;
  height: 6.24vh;
  margin: auto;
  background: url('../assets/newYear/p2_2016.png') no-repeat;
  background-size: 100%;
}
#page3{
  background: url('../assets/newYear/p3_bg.jpeg') no-repeat;
  background-size: 100% 100%;
  padding-top: 28vh;
  text-align: center;
}
.p3_couplet{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 10px;
}
.p3_couplet_second,.p3_couplet_first{
  width: 86px;
  object-fit: cover;
}
.p3_title{
  width: 180px;
  margin-top: -60px;
}
@keyframes p3_blessing {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
  
}
.p3_blessing{
  width: 130px;
  margin-top: 20px;
  animation: p3_blessing 1.5s linear infinite;
}
</style>