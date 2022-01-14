<template>
<div>
  <el-tabs 
    v-model="activeName" 
    @tab-click="handleClick" 
    style="background-color:grey"
    class="int-pc pc"
  >
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
  <div class="int-mobile mobile">
    <div class="mobile-module">
      <p 
        class="mobile-module-item"
        v-for="(item,moduleInd) in moduleList" 
        :key="item.module"
        :class="moduleIndex === moduleInd ? 'active-module-item' : ''"
        @mouseover="handleSwiper(moduleInd)"
      >
        {{item.module}}
      </p>
    </div>
    <div class="swiper_box">
      <swiper 
        ref="mobileSwiper" 
        :options="modileOptions" 
        class="mobile-swiper"
        @slideChangeTransitionEnd='changeSlideIndex'
      >
        <swiper-slide v-for="(item,index) in moduleList[moduleIndex].mobileImageList" :key="index">
          <img class="mobile-swiper-img" :src="item.url"/>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
    <div class="des_box">
      <div v-for="(desc,slideInd) in moduleList[moduleIndex].mobileImageList" :key="slideInd" v-show="slideIndex === slideInd">
        <div class="title">
          {{desc.title}}
        </div>
        <div class="des">
          {{desc.desc}}
        </div>
      </div>
    </div>
  </div>
</div>
  
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second',
        moduleList:[
          {
            module:"intelligence",
            mobileImageList:[ //h5 图片数据
              {
                url:require('@mswiper/int.png'),
                title:'1-1AUTONOMOUS DRIVING',
                desc:'Preparing the world for future, GWM focuses a lot on extensive research for Autonomous Driving.',
              },
              {
                url:require('@mswiper/int.png'),
                title:'1-2AUTONOMOUS DRIVING',
                desc:'Preparing the world for future, GWM focuses a lot on extensive research for Autonomous Driving.',
              },
              {
                url:require('@mswiper/int.png'),
                title:'1-3AUTONOMOUS DRIVING',
                desc:'Preparing the world for future, GWM focuses a lot on extensive research for Autonomous Driving.',
              },
            ],
          },
          {
            module:"CONNECTIVITY",
            mobileImageList:[ //h5 图片数据
              {
                url:require('@mswiper/eco.png'),
                title:'2-1AUTONOMOUS DRIVING',
                desc:'Preparing the world for future, GWM focuses a lot on extensive research for Autonomous Driving.',
              },
              {
                url:require('@mswiper/eco.png'),
                title:'2-2AUTONOMOUS DRIVING',
                desc:'Preparing the world for future, GWM focuses a lot on extensive research for Autonomous Driving.',
              },
              {
                url:require('@mswiper/eco.png'),
                title:'2-3AUTONOMOUS DRIVING',
                desc:'Preparing the world for future, GWM focuses a lot on extensive research for Autonomous Driving.',
              },
            ],
          },
          {
            module:"i-Pilot System Future Planning",
            mobileImageList:[ //h5 图片数据
              {
                url:require('@mswiper/rd.png'),
                title:'3-1AUTONOMOUS DRIVING',
                desc:'Preparing the world for future, GWM focuses a lot on extensive research for Autonomous Driving.',
              },
              {
                url:require('@mswiper/rd.png'),
                title:'3-2AUTONOMOUS DRIVING',
                desc:'Preparing the world for future, GWM focuses a lot on extensive research for Autonomous Driving.',
              },
              {
                url:require('@mswiper/rd.png'),
                title:'3-3AUTONOMOUS DRIVING',
                desc:'Preparing the world for future, GWM focuses a lot on extensive research for Autonomous Driving.',
              },
            ],
          },
        ],
        modileOptions:{
          autoplay:true,
          slidesPerView: 1,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass:"mobile-bullet",
            bulletActiveClass:"mobile-bullet-active"
          },
        },
        slideIndex:0, //轮播图
        moduleIndex:0 ,//模块索引
      };
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      changeSlideIndex(){
        const swiperIndex = this.$refs.mobileSwiper.swiper.activeIndex
        this.slideIndex = swiperIndex
      },
      handleSwiper(ind){
          this.moduleIndex = ind;
          this.slideIndex = 0
          this.$refs.mobileSwiper.swiper.slideTo(0);
          
      }
    }
  };
</script>
<style scoped>
@media screen and (min-width: 900px) {
  .mobile {
    display: none;
  }
}
@media screen and (max-width: 899px) {
  .pc {
    display: none;
  }
  .int-mobile{
    padding: 80px 0;
    background: #F9F9F9;
  }
  .mobile-module{
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
  .mobile-module-item{
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-family: Montserrat-Medium, Montserrat;
    font-weight: 500;
    line-height: 28px;
    color: #333333;
  }
  .active-module-item{
    color: #FD9520;
    position: relative;
  }
  .active-module-item::after{
    content: "";
    width: 80px;
    height: 2px;
    background: #FD9520;
    position: absolute;
    left: 50%;
    bottom: 1px;
    transform: translateX(-50%);
  }
  .mobile .swiper-slide{
    text-align: center;
  }
  .mobile .swiper-pagination{
    width: 90%;
    height: 80px;
    line-height: 80px;
    margin: 0 auto;
    position: relative;
    left: 0;
    transform: none;
    text-align: left;
  }
 
  .mobile-swiper-img{
    width: 90% !important;
  }
  .des_box{
    width: 90% !important;
    margin: 0 auto;
  }
}

</style>