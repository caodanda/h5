<template>
  <div class="wrap">
    <div class="img-wrap">
      <!-- <img  class="show-img" :src="imgList[activeNum-1].path" alt=""> -->
      <canvas id="img-canvas"></canvas>
    </div>
    <div class="btn">
      <button class="click-btn" :class="{activeStep:activeStep===1}" @click="handleBtn('click')">点击</button>
      <button class="view-btn" :class="{activeStep:activeStep===2}" @click="handleBtn('show')">识别</button>
    </div>
  </div>
</template>

<script>
export default {
  name:"show",
  data(){
    return{
      activeNum:1,
      activeStep:1,
      imgList:[
        {path:require('../assets/show/1.jpg')},
        {path:require('../assets/show/2.jpg')},
        {path:require('../assets/show/3.jpg')},
      ],
      canvas:null,
      ctx:null,
      clipRegion:{x:100,y:100,r:50},
      show:false,
      image:null,
    }
  },
  mounted(){
    this.activeNum = this.calcRandom()
    this.handeleCanvas()
  },
  methods:{
    calcRandom(){
     let index =  Math.floor((Math.random()*this.imgList.length) +1)
     return index
    },
    handeleCanvas(){
      this.canvas = document.getElementById('img-canvas')
      this.ctx = this.canvas.getContext('2d')
      this.image = new Image()
      this.image.src = this.imgList[this.activeNum-1].path 
      this.image.onload = ()=>{
        this.canvas.width = document.body.clientWidth
        this.canvas.height = document.body.clientHeight
        this.initRegion(50)
        this.handleDrawImg(this.image,this.clipRegion)
      }
    },
    initRegion(r){
      let width = document.body.clientWidth || document.documentElement.clientWidth
      let height = document.body.clientHeight || document.documentElement.clientHeight
      this.clipRegion ={
        x:Math.random()*(width - r*2) + r,
        y:Math.random()*(height - r*2) + r,
        r
      }
      console.log( this.clipRegion)
    },
    handleDrawImg(img,region){
      this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
      this.ctx.save()
      this.handleClipRegion(region)
      this.ctx.drawImage(img,0,0,this.canvas.width,this.canvas.height)
      this.ctx.restore()
    },
    handleClipRegion(region){
      this.ctx.beginPath()
      this.ctx.arc(region.x,region.y,region.r,0,Math.PI*2,false)
      this.ctx.clip()
    },
    handleBtn(type){
      if(type === 'show'){
        this.clipRegion.r = 1000
        this.handleDrawImg(this.image,this.clipRegion)
      }else{
        this.activeStep = 2
        this.initRegion(50)
        this.handleDrawImg(this.image,this.clipRegion)
      }
    },
  }
}
</script>

<style scope>
.wrap{
  width: 100vw;
  height: 100vh;
}
.img-wrap{
  width: 100%;
  height: 100%;
  position: relative;
}
.show-img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  filter: blur(30px);
}
#my-canvas{
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
}
.btn{
  width: 100%;
  position: absolute;
  bottom: 20px;
  z-index: 9;
  text-align: center;
}
.btn button{
  width: 35%;
  height: 30px;
  line-height: 30px;
  margin: 0 20px;
  background: #d39604;
  border: none;
  border-radius: 5px;
  color: #f5f5f5;
}
@keyframes activeStep {
  0%{
    transform: scale(1);
    box-shadow: 0 0 10px 1px #f0b30a;
  }
  100%{
    transform: scale(1.2);
    box-shadow: 0 0 10px 8px #f0b30a;
  }
}
.activeStep{
  animation: activeStep 0.8s ease-in-out infinite alternate ;
}
</style>