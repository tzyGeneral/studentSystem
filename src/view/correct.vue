<template>
    <div style="margin-top:20px; text-align:center">
        <div>
            <img :src="imgUrl" alt="" id="img">
        </div>
        <div style="margin-top:24px">
            <h1>该作业打几分:</h1> 
            <span>
                <a-rate :tooltips="desc" v-model="value" />
                <span class="ant-rate-text">{{ desc[value - 1] }}</span>
            </span>
        </div>
        <div style="margin-top:24px" >
            <a-button-group :size="size">
                <a-button type="primary"> <a-icon type="left" />上一份 </a-button>
                <a-button type="primary" @click="nextPic"> 下一份 <a-icon type="right" /> </a-button>
            </a-button-group>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
export default {
  data() {
      return {
          value: 3,
          data: [],
          index: 1,
          desc: ['很差', '不行', '一般', '不错', '很棒'],
          imgUrl:'http://47.101.186.106:8001/logo.png'
      }
  },
  mounted: function(){
      this.response();
  },
  methods: {
      response(){
        let that = this;
        // let token_data = that.$route.params.token;
        let token_data = 'gnkOPIWn/mtJwK2xG5WcWw=='
        let url = 'http://47.101.186.106:8000/main/teacher/getHomework';
        axios.get(url, {params: {token: token_data}}).then(function(response){
            let result = response.data.data;
            that.data = result
        })
      },
      nextPic(){
          this.index = this.index + 1
          if (this.data[this.index].homework) {
                this.imgUrl = this.data[this.index].homework
          }
      }
  },
};
</script>
<style scoped>
#img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}

</style>