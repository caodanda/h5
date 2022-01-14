<template>
  <div class="mana-wrap">
      <div class="select-option">
        <Form :model="formItem" :label-width="60" class="select-form" inline>
            <FormItem label="姓名">
                <Input v-model="formItem.input" placeholder="Enter something..." style="width: 200px"></Input>
            </FormItem>
            <FormItem label="省份" >
                <Select v-model="formItem.select" style="width: 200px">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                </Select>
            </FormItem>
            <FormItem label="住址">
                <Input v-model="formItem.input" placeholder="Enter something..." style="width: 200px"></Input>
            </FormItem>
            <FormItem label="性别">
                <Select v-model="formItem.select" style="width: 200px">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                </Select>
            </FormItem>
            <FormItem label="年龄">
                <Input v-model="formItem.input" placeholder="Enter something..." style="width: 200px"></Input>
            </FormItem>
            <FormItem label="Select" >
                <Select v-model="formItem.select" style="width: 200px">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                </Select>
            </FormItem>
        </Form>
      </div>
      <div class="table-content">
          <Table border :columns="columns12" :data="data6">
            <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ index }" slot="action">
                <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">新建</Button>
                <Button type="error" size="small" @click="remove(index)">删除</Button>
            </template>
        </Table>
         <Page 
            class="page"
            :total="100" 
            :current.sync ='currentPage'  
        />

      </div>

  </div>
</template>


<script>
export default {
    name:'mana',
    data(){
        return{
            currentPage:2,
            formItem: {
                    input: '',
                    select: '',
            },
            columns12: [
                {
                    title:'序号',
                    type: 'index',
                    width: 80,
                    align: 'center'
                },
                {
                    title: 'Name',
                    slot: 'name'
                },
                {
                    title: 'Age',
                    key: 'age'
                },
                {
                    title: 'Address',
                    key: 'address'
                },
                {
                    title: 'qita',
                    key: 'address'
                },
                {
                    title: 'Action',
                    slot: 'action',
                    width: 150,
                    align: 'center'
                }
            ],
            data6: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park'
                },
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park'
                },
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park'
                },
            ]

        }
    },
    methods: {
        show (index) {
            this.$Modal.info({
                title: 'User Info',
                content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
            })
        },
        remove (index) {
            this.data6.splice(index, 1);
        }
    }

}
</script>

<style scope>
.mana-wrap{
    width: 70vw;
    margin: 0 auto;
    padding: 50px 0;
}

.page{
    text-align: center;
    margin-top: 20px;
}
.mana-wrap .ivu-form-item-label{
    text-align: center !important;
}

</style>