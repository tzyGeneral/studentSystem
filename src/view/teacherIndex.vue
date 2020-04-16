<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
      <div class="logo"></div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1" @click="msg">
          <a-icon type="user" />
          <span class="nav-text">教师信息</span>
        </a-menu-item>
        <a-menu-item key="2" @click="kecheng">
          <a-icon type="video-camera" />
          <span class="nav-text">班级信息</span>
        </a-menu-item>
        <a-menu-item key="3" @click="score">
          <a-icon type="upload" />
          <span class="nav-text">发布作业</span>
        </a-menu-item>
        <a-menu-item key="4" @click="homewordk">
          <a-icon type="bar-chart" />
          <span class="nav-text">作业修改</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
<div v-if="isLoad">
    <a-descriptions
      title="教师个人信息"
      bordered
      :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
    >
      <a-descriptions-item label="姓名">{{data.name}}</a-descriptions-item>
      <a-descriptions-item label="ID">{{data.idNumber}}</a-descriptions-item>
      <a-descriptions-item label="学科">{{data.subject}}</a-descriptions-item>
      <a-descriptions-item label="性别">{{data.gender}}</a-descriptions-item>
      <a-descriptions-item label="民族">{{data.celebrities}}</a-descriptions-item>
      <a-descriptions-item label="籍贯">{{data.hometown}}</a-descriptions-item>
      <a-descriptions-item label="级别">{{data.titlename}}</a-descriptions-item>
      <a-descriptions-item label="号码">{{data.phoneNumber}}</a-descriptions-item>
      <a-descriptions-item label="生日">{{data.birthday}}</a-descriptions-item>
    </a-descriptions>
  </div>

  <div v-if="isLoad2">
      <classMessage></classMessage>
  </div>

  <div v-if="isLoad3" style="mar">
    <homeworkSet :classIdPut="classInfo"></homeworkSet>
  </div>

    <div v-if="isLoad4">
      <correct></correct>
    </div>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        system ©2020 Created by nieqi
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>



<script>
    import QS from 'qs'
    import axios from 'axios'
    import correct from '../view/correct'
    import homeworkSet from '../view/homeworkSet'
    import classMessage from '../view/classMessage'

export default {
  components: { correct, homeworkSet, classMessage },
    data() {
    return {
      token_data: '',
      collapsed: false,
      isLoad: true,
      isLoad2: false,
      isLoad3: false,
      isLoad4: false,
      data: '',
      subjectch: '1',
      score_data: [],
      classInfo: [],
    };
  },
  mounted: function(){
      this.response();
  },
  methods: {
      response() {
        let that = this;
        let token_data = that.$route.params.token;
        let url = 'http://47.101.186.106:8000/main/teacher/information';
        axios.get(url, {params: {token: token_data}}).then(function(response){
            let result = response.data.data;
            let cInfo = response.data.classInfo
            that.data = result
            that.classInfo = cInfo
        })
      },
      kecheng() {
        let that = this;
        that.isLoad = false;
        that.isLoad2 = true;
        that.isLoad3 = false;
        that.isLoad4 = false;
      },
      msg() {
        this.isLoad = true;
        this.isLoad2 = false;
        this.isLoad3 = false;
        this.isLoad4 = false;
      },
      score() {
        this.isLoad = false;
        this.isLoad2 = false;
        this.isLoad3 = true;
        this.isLoad4 = false;
        let that = this;
        let token_data = that.$route.params.token;
        let url = 'http://47.101.186.106:8000/main/student/score';
         axios.get(url, {params: {token: token_data}}).then(function(response){
            let results = response.data.data;
            console.log(results)
            that.score_data = results
        })
      },
      homewordk() {
        this.isLoad = false;
        this.isLoad2 = false;
        this.isLoad3 = false;
        this.isLoad4 = true;
      },
  },
  
}
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>