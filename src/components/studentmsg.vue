<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
      <div class="logo"></div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1" @click="msg">
          <a-icon type="user" />
          <span class="nav-text">个人信息</span>
        </a-menu-item>
        <a-menu-item key="2" @click="kecheng">
          <a-icon type="video-camera" />
          <span class="nav-text">课程表</span>
        </a-menu-item>
        <a-menu-item key="3" @click="score">
          <a-icon type="upload" />
          <span class="nav-text">成绩单</span>
        </a-menu-item>
        <a-menu-item key="4" @click="homewordk">
          <a-icon type="bar-chart" />
          <span class="nav-text">上传作业</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
<div v-if="isLoad">
    <a-descriptions
      title="学生个人信息"
      bordered
      :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
    >
      <a-descriptions-item label="姓名">{{data.name}}</a-descriptions-item>
      <a-descriptions-item label="班级">{{data.classId}}</a-descriptions-item>
      <a-descriptions-item label="性别">{{data.gender}}</a-descriptions-item>
      <a-descriptions-item label="民族">{{data.celebrities}}</a-descriptions-item>
      <a-descriptions-item label="籍贯">{{data.hometown}}</a-descriptions-item>
      <a-descriptions-item label="号码">{{data.phoneNumber}}</a-descriptions-item>
      <a-descriptions-item label="今日作业">
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
      </a-descriptions-item>
    </a-descriptions>
  </div>

  <div v-if="isLoad2">
      <img src="../img/kecheng.jpg" alt=""  style="width: 75%;">
  </div>

  <div v-if="isLoad3" style="mar">
    <a-descriptions
      title="学生成绩"
      bordered
      :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
    >
      <a-descriptions-item label="语文">{{scouredata}}</a-descriptions-item>
      <a-descriptions-item label="数学">{{scouredata}}</a-descriptions-item>
      <a-descriptions-item label="英语">{{scouredata}}</a-descriptions-item>
      <a-descriptions-item label="体育">{{scouredata}}</a-descriptions-item>
      <a-descriptions-item label="美术">{{scouredata}}</a-descriptions-item>
      <a-descriptions-item label="音乐">{{scouredata}}</a-descriptions-item>
      <a-descriptions-item label="音乐">{{scouredata}}</a-descriptions-item>
      <a-descriptions-item label="音乐">{{scouredata}}</a-descriptions-item>
      <a-descriptions-item label="音乐">{{scouredata}}</a-descriptions-item>

    </a-descriptions>
  </div>

    <div v-if="isLoad4">
    <div>
      <a-radio-group defaultValue="a" buttonStyle="solid">
        <a-radio-button value="a">语文</a-radio-button>
        <a-radio-button value="b">数学</a-radio-button>
        <a-radio-button value="c">英语</a-radio-button>
        <a-radio-button value="d">体育</a-radio-button>
        <a-radio-button value="e">美术</a-radio-button>
        <a-radio-button value="f">音乐</a-radio-button>
        <a-radio-button value="g">音乐</a-radio-button>
        <a-radio-button value="h">音乐</a-radio-button>
        <a-radio-button value="i">音乐</a-radio-button>
        
      </a-radio-group>
    </div>
    <div style="margin-top: 5%;">
      <a-upload-dragger
    name="file"
    :multiple="true"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    @change="handleChange"
  >
    <p class="ant-upload-drag-icon">
      <a-icon type="inbox" />
    </p>
    <p class="ant-upload-text">点 击 上 传 作 业 文 件</p>
    <p class="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </a-upload-dragger>
  </div>
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
export default {
    data() {
    return {
      token_data: '',
      collapsed: false,
      isLoad: true,
      isLoad2: false,
      isLoad3: false,
      isLoad4: false,
      data: '',
      scouredata: 0
    };
  },
  mounted: function(){
      this.response();
  },
  methods: {
      response() {
        let that = this;
        let token_data = that.$route.params.token;

        let url = 'http://localhost:8000/main/student/information';
        axios.get(url, {params: {token: token_data}}).then(function(response){
            let result = response.data.data;
            console.log(result)
            that.data = result
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
      },
      homewordk() {
          this.isLoad = false;
          this.isLoad2 = false;
        this.isLoad3 = false;
        this.isLoad4 = true;
      },
      handleChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
  
}
</script>

<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>