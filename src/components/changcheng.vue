<template>
  <div class="changcheng-wrap">
      <div >
          <img 
            class="page-img"
            v-show="page === (ind+1)"
            v-for="(img,ind) in bgList" 
            :key="ind" :src="img.imgUrl" 
            @click="changePage"
            alt="" 
            
             />
      </div>
  </div>
</template>

<script>
export default {
    name:"changcheng",
    data(){
        return{
            bgList:[
                {imgUrl:require('@/assets/changcheng/1.jpeg')},
                {imgUrl:require('@/assets/changcheng/2.jpeg')},
                {imgUrl:require('@/assets/changcheng/3.jpeg')},
            ],
            page:1,
        }
    },
    methods:{
        changePage(){
            if(this.page < this.bgList.length){
                this.page +=1; 
                console.log(this.page)
            }  
        }
    }
}
</script>

<style scope>
.page-img{
    width: 100vw;
    height: 100vh;
    object-fit: cover;
}


</style>