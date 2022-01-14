<template>
  <div class="lottery">
      <h4 class="title animate__bounce">随机抽奖活动</h4>
      <ul class="content">
          <li class="number-item" v-for="(num,index) in computeNumber" :key="index">
            <span >
                <i ref="numberItem">0123456789</i>
            </span>
          </li>
      </ul>
      <p class="start-btn" @click="start">点击开始</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            computeNumber:[0,0,0,0,0]
        }
    },
    mounted(){
        
    },
    methods:{
        // 生成随机数
        createRandomNumber(min,max){
            return Math.floor(Math.random() * (max-min+1) + min)
        },
        start(){
            let newNumberArr = this.computeNumber.reduce((total,item)=>{
                item = this.createRandomNumber(0,9)
                total.push(item)
                return total
            },[])
            this.computeNumber = newNumberArr
            this.changeTranslate()
        },
        // css动画
        changeTranslate(){
            let numItemList = this.$refs.numberItem
            numItemList.forEach((item,index)=>{
                item.style.transform = `translate(-50%,-${this.computeNumber[index] * 10}%)`
            })
        }
    }
}
</script>

<style scoped>
.lottery{
    text-align: center;
    padding: 40px 10px;
    height: 100vh;
    width: 100vw;
    background: rgba(3,31,99,0.88);
    color: #fff;
}
.title{
    font-size: 32px;
    margin-bottom: 80px;
}
.content{
    display: flex;
    justify-content: center;
    align-items: center;
}
.number-item{
    width: 50px;
    height: 80px;
    margin-right: 10px;
    background: url("../assets/lottery/bg.png") no-repeat center center;
    background-size: 100% 100%;
    color: #e78d25;
    font-size: 55px;
}

.number-item span{
    position: relative;
    display: inline-block;
    margin-right: 10px;
    width: 100%;
    height: 100%;
    writing-mode: vertical-rl;
    text-orientation: upright;
    overflow: hidden;
}
.number-item i{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%,0);
    transition: transform  1s ease-in-out;
}
@keyframes start-btn {
    from{
        transform: scale(0.9);
        box-shadow: 0 0 6px 1px #f0b30a82;
    }
    to{
        transform: scale(1);
        box-shadow: 0 0 6px 4px #f0b30a82;
    }
}
.start-btn{
    font-size: 30px;
    width: 60vw;
    margin: 0 auto;
    margin-top: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: chocolate;
    border-radius:10px;
    animation: start-btn 1s ease-in-out infinite alternate;
}

</style>