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
                <a-button type="primary"> 下一份 <a-icon type="right" /> </a-button>
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
          desc: ['很差', '不行', '一般', '不错', '很棒'],
          imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586886598672&di=f87a7c95609875f171f537e14a286ca0&imgtype=0&src=http%3A%2F%2F02imgmini.eastday.com%2Fmobile%2F20190130%2F20190130195010_b77d70fdf45834783b0a11b996991be4_1.jpeg'
      }
  },
  methods: {

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