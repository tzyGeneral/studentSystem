
<template>
<div class="container" style="width:95%; margin:0 auto; margin-top:10%">
  <div style="margin-bottom: 20px">
    <h1 style="width:95%; margin:0 auto; text-align: center;">教务管理系统</h1>
  </div>
  <div>
  <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-model-item label="用户">
      <a-input v-model="form.name" />
    </a-form-model-item>

    <a-form-model-item label="密码">
      <a-input v-model="form.pass" />
    </a-form-model-item>

    <a-form-model-item label="用户类型">
      <a-radio-group v-model="form.resource">
        <a-radio value="1">
          学生
        </a-radio>
        <a-radio value="2">
          教师
        </a-radio>
        <a-radio value="3">
          管理员
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">
        登陆
      </a-button>
      <a-button style="margin-left: 10px;" @click="register">
        注册
      </a-button>
    </a-form-model-item>
  </a-form-model>

    <div style="text-align: center;" v-if="isLoad">
    <a-alert message="密码错误" type="error" showIcon />
    </div>

    <div style="text-align: center;" v-if="isLoad3">
    <a-alert message="用户名错误" type="error" showIcon />
    </div>

    <div style="text-align: center;" v-if="isLoad4">
    <a-alert message="登陆失败" type="error" showIcon />
    </div>

    <div style="text-align: center;" v-if="isLoad2">
    <a-alert message="信息填写不完整" type="error" showIcon />
    </div>

    <div style="text-align: center;" v-if="isLoad5">
    <a-alert message="登陆成功" type="success" showIcon />
    </div>
  </div>
</div>
</template>
<script>
import axiao from 'axios'
import QS from 'qs'
export default {
  data() {
    return {
      isLoad: false,
      isLoad2: false,
      isLoad3: false,
      isLoad4: false,
      isLoad5: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: '',
        pass: '',
        resource: '',
      },
    };
  },
  methods: {
    onSubmit() {
        let that = this;
        this.isLoad = false;
        this.isLoad2 = false;
        this.isLoad3 = false;
        this.isLoad4 = false;
        this.isLoad5 = false;
        let data = QS.stringify({
            name: that.form.name,
            pass: that.form.pass,
            type: that.form.resource
        });
        console.log(data)
        let url = 'http://localhost:8000/main/api/login';
        if (that.form.name && that.form.pass && that.form.resource){
            console.log('开始请求接口')
            axiao.post(url, data,
                {headers:{'Content-Type':'application/x-www-form-urlencoded'}}
            ).then(function (response){
                if (response.data.status == 200){
                    that.isLoad5 = true
                    that.$router.push({ name: "studentmsg", params:{token: response.data.token}})
                }else if(response.data.status == 201){
                    console.log('用户名不存在')
                    that.isLoad3 = true
                }else if(response.data.status == 203){
                    console.log("用户名或密码错误")
                    that.isLoad = true
                }
                console.log(response.data)
            })
        } else{
            this.isLoad2 = true
        }
    //   console.log('submit!', this.form.name);
    },

    register() {
      console.log('register', this.form)
    }
  },
};
</script>

<style>

  body {
    height: 100%;

    background: url("../img/004.jpg");
  }
</style>
