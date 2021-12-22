<template>
  <div class="mock-wrap">
      <div>
          <input type="text" v-model="user.name" />
          <input type="text" v-model="user.password" />
          <button @click="createUser">创建</button>
      </div>

  </div>
</template>

<script>
export default {
    name:"mock",
    data(){
        return{
            user:{
                name:'admin',
                password:'123456',
            },
            url:'https://www.fastmock.site/mock/16eead31375e2314d2425fdbf1ea46eb/v3'
        }
    },
    mounted(){
        this.getUser()
    },
    methods:{
        async createUser(){
            let params = {
                username:this.user.name,
                password:this.user.password
            }
            let headers = {
                "authorization":"dfgiguwirlhug.gdbjkdbvbf.sbjbfiudgfb"
            }
            const data = await this.$axios.post(`${this.url}/create/admin`,params,{headers})
            console.log(data)
        },
        async getUser(){
            let params = {
                id:10
            }
            let headers = {
                "authorization":"dfgiguwirlhug.gdbjkdbvbf.sbjbfiudgfb"
            }
            const {data:{data}} = await this.$axios(`${this.url}/user`,{params,headers})
            console.log(data)
        }
    }

}
</script>

<style scope>

</style>