<!--
 * @Author: wusai
 * @Date: 2022-01-05 10:37:48
 * @LastEditors: wusai
 * @LastEditTime: 2022-01-05 14:31:35
 * @FilePath: \OfficialWebsiteGWMBrazil\src\components\homeGlobal1\index.vue
-->
<template>
  <div class="home_global_container">
    <div class="global-pc pc">
      <div class="swiper_box">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="item in globalImageList" :key="item.index">
            <img :src="item.url"/>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="title">
        GLOBAL R&D
      </div>
      <div class="des_box">
        <div class="des">
          Research teams across the world, focusing on Autonomous Driving, New Energy Vehicles for a better and greener world.
        </div>
      </div>
    </div>
    <div class="global-mobile mobile">
      <div class="swiper_box">
        <swiper 
          ref="mobileSwiper" 
          :options="modileOptions" 
          class="mobile-swiper"
          @slideChangeTransitionEnd='changeSlideIndex'
        >
          <swiper-slide v-for="(item,index) in mobileImageList" :key="index">
            <img class="mobile-swiper-img" :src="item.url"/>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
      </div>
      <div class="des_box">
        <div v-for="(desc,slideInd) in mobileImageList" :key="slideInd" v-show="mobileIndex === slideInd">
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
  name: "home-global1",
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          slideChangeTransitionEnd: function(){
            console.warn(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          },
        }
      },
      globalImageList:[
        {
          index:0,
          url:require('../../assets/images/home-global/01.jpg')
        },
        {
          index:1,
          url:require('../../assets/images/home-global/02.jpg')
        },
        {
          index:2,
          url:require('../../assets/images/home-global/03.jpg')
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
      mobileImageList:[ //h5 图片数据
        {
          url:require('@mswiper/rd.png'),
          title:'GLOBAL R&D1',
          desc:'Research teams across the world, focusing on Autonomous Driving, New Energy Vehicles for a better and greener world.',
        },
        {
          url:require('@mswiper/rd.png'),
          title:'GLOBAL R&D2',
          desc:'Research teams across the world, focusing on Autonomous Driving, New Energy Vehicles for a better and greener world.',
        },
        {
          url:require('@mswiper/rd.png'),
          title:'GLOBAL R&D3',
          desc:'Research teams across the world, focusing on Autonomous Driving, New Energy Vehicles for a better and greener world.',
        },

      ],
      mobileIndex:0,
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods:{
    changeSlideIndex(){
      const swiperIndex = this.$refs.mobileSwiper.swiper.activeIndex
      this.mobileIndex = swiperIndex
      console.log(this.mobileIndex)
    }

  }
};
</script>

<style lang="scss" scoped>
.home_global_container{
  margin: 150px 0;
  .swiper_box{
    position: relative;
  }
  .swiper-slide{
    // padding: 0 10px;
    img{
      width: 100%;
    }
  }
  .swiper-slide-prev,.swiper-slide-next{
    position: relative;
    &:before{
      content: '';
      background: rgba(0,0,0,.7);
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2;
    }
  }
  .swiper-button-next,.swiper-button-prev{
    width: 64px;
    height: 64px;
    top: 50%;
    transform: translateY(-50%);
    &:before{
      content: ''!important;
    }
    &:after{
      content: ''!important;
    }
  }
  .swiper-button-next{
    right: 13%;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAoFJREFUeF7t2kfOE0EUBOAqIbEk5wOQcxKsyeECiKsgIU7DFcgI+Mk5X4GcN6wKtVQjjSybfzy2pe5546U9I3V97p7w+hHBPwyeHz1APwOCC/RLIPgE6C+C/RLIeQlIIknNcozZzgBJGwBcBHCW5PtZIWQJIGk9gJsA1gH4AOAQyXezQMgV4CCASwAWOfRHI7ydNkKWACmkpEGET0Z4M02EbAGMcMAzYbFDJ4TDJF9PCyFrACPsB3AZwBKH/myEV9NAyB7ACPsAXKkhfDHCy0kRigAwwl4jLHXohHCE5ItJEIoBMMIeAFcBVAhfjfC8LUJRAEbYbYRlDv3NCM/aIBQHYIRdRlheQzhK8um4CEUCGGEngGsAKoTvABLCk3EQigUwwg4jrHDoH0Z43BShaAAjbDfCyhrCMZKPmiAUD2CEbQCuA6gQfgJICA/nQ+gEgBG2GmGVQyeE4yQf/A+hMwBG2GKE1Q79ywj3RyF0CsAImwHcAFBHOEHy3jCEzgEYYZMR1jj0bwAnSc4NInQSwAgbjbC2hnCK5J06AiWdH7k+yAv13yQtAHBuvitrRr+nuuKZ2nj+AEgIt6vvEsDIqmsqyQ4ALATwN6OAbYaSEE6TvJVO7gHCL4E2c6iEcyQ1uwiWEGbcMUoadhtMzwJ3O38blBT3QUhS3EdhSXFfhiTFfR2WlAoiqRZQrwrFKIhIGiyJpbpgCt/9kpikuEVRSXHL4pLiboxIirs1JmnY5mjqFZhoh7iIipCkuNvjkuI2SEiK2yITuklqSPhYbXLhGyVd14/bKluVrUI3S49bB2x7fBEPQm3DNTmvB2ii1OVj+hnQ5X+3SbZ+BjRR6vIx4WfAP3YrHlCr8/rvAAAAAElFTkSuQmCC') center no-repeat;
    background-size: 100% 100%;
  }
  .swiper-button-prev{
    left: 13%;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA6ZJREFUeF7tmtuOFUUUhr8lPAqJV7yBNyTcgAJCwCCKgQzDySEQDNEoRKMYDCrCAGOAMR44GeHCKPEQT+Gg8ZqE9zBRERD8zSLVZLmHPdN7725TvXevu0l6r67/q7+q1qppY8TDRlw/LYDWASNOoF0CI26AdhNsl0C7BGokIGk78KiZ7azxNQOlrm0JSJoAJuH+PjOZK4RaAEjaARxJ4n2GfgEWm9lfA01XDT+uHIAkt/t7QfzPwBIz+72G8Q+cslIAknYBh4L4a8DSXMU7vcoASNoNvBNyXk3i/xh4mmpMUAkASS8AbwfxV5L4P2sceyWpBwYgaQ9wMIzmMvC4mWUvfuAlIOlF4K0g/ifgCTO7Wcn0/A9J+naApJeAA2GMPwLLmiS+bwdIehl4M4j/AVjeNPF9AZD0CrA/iP8+ic+uyCmzgnpaApL2Aa+HxN8BK3Ks8MqI78kBkl4FXguJvwWeNLNbZV+W43OlHCDJhTuAIr4BVjZdfCkHSHLLu/WL+DqJv53jjPY6plkdIOkNYG9I+hWwysyGQvysDpDkx5wfd0VcAlYPk/iuACR5geOFThFfJvF3erVY7s/PWAKSvLT1EreIL4A1ZjZ04mc4QJI3Nd7cFPFbqviaIv6GmXlV+iAkLQQWdXHi9QcOkOS9vLe1TY5pMxvvAOAXs8e7iJq6D0DSPOC8W73J6oH+ACQI84GzwFMdS+ATZ9QQML+a2acdDnjMN/Au47/2n00wOeEMsDb84JiZ+S3vUMbDTgFfDqeBp4PiKWDCzJrihNKT9dBKMDnBrb8uZHofeH7YIHQthROEj4FnAoQTwLZhgjBXL/AI8BGwPkA4CWwdFghztsOSHMKHwHMBwjSweRggzAkgHZEO4QNgQ4Dgf483HUIpAAGCz/zGAMGdscnM/im97Wb2YGkACYI/fwoYCzp8jxhrKoSeAAQIvhFuChD8yNzYRAg9AwgQ/EiMjYcXTxuaBqEvAAGCF0dbghO8jHYI9zJb6l2H0zeAAMFbzW3hDef8yGwKhIEABAjHAO+7i/DWen0TIAwMoFAs6ag3TAGCt6XP5g6hMgDJDf5VWGydP/Newszu5ronVAogQTgMxO8CL3hXmSuEygEkCP6VmH8wVcRFv1/IEUItABKEdwH/cMrjc79qM7O/c1sKtQFIEPymeUH6v0J24n2MtQJIEObnaP3CibUDyM3yneNpAeQ+Q3WPr3VA3YRzz986IPcZqnt8rQPqJpx7/n8BOYwbAusP/fcAAAAASUVORK5CYII=') center no-repeat;
    background-size: 100% 100%;
  }
  .swiper-pagination{
    left: 50%;
    transform: translateX(-50%);
  }
}
@media screen and (min-width: 900px) {
  .mobile {
    display: none;
  }
}
@media screen and (max-width: 899px) {
  .pc {
    display: none;
  }
  .home_global_container{
    margin: 80px 0;
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
<style lang="scss">
  .swiper-pagination-bullet {
    background: #AFAFAF;
    opacity: 1;
    width: 30px;
    height: 2px;
    &+.swiper-pagination-bullet{
      margin-left: 10px;
    }
    &.swiper-pagination-bullet-active{
      width: 90px;
      background-color: #FD9520!important;
    }
  }
  .mobile .mobile-bullet{
    display: inline-block;
    background: #AFAFAF;
    opacity: 1;
    width: 30px;
    height: 1px !important;
    margin-right: 8px;
  }
  .mobile .mobile-bullet-active{
    width: 90px;
    background-color: #FD9520!important;
  }


  
</style>