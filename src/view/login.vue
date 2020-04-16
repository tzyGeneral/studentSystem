<template>
    <div class="container" style="width:95%; margin:0 auto; margin-top:10%">
        <div style="margin-bottom: 20px">
            <h1 style="width:95%; margin:0 auto; text-align: center;">教务管理系统</h1>
        </div>
        <div>
            <a-alert v-if="isLoginError" type="error" showIcon style="margin-bottom: 24px;" message="账户或密码错误" />
        </div>
        <div style="width:40%;margin: 0 auto">
            <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-form-model-item label="用户">
                <a-input v-model="form.name" />
            </a-form-model-item>

            <a-form-model-item label="密码">
                <a-input v-model="form.pass" />
            </a-form-model-item>

            <a-form-model-item label="权限">
                <a-radio-group v-model="form.resource">
                    <a-radio value="1" style="margin-left:30px">
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
                <div style="text-align:center">
                    <a-button type="primary" @click="onSubmit">
                        登陆
                    </a-button>
                    <a-button style="margin-left: 10px;" @click="register">
                        注册
                    </a-button>
                </div>
            </a-form-model-item>
        </a-form-model>
        </div>
    </div>
</template>
<script>
import axiao from 'axios'
import QS from 'qs'
export default {
  data() {
    return {
      isLoginError: false,
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

        let data = QS.stringify({
            name: that.form.name,
            pass: that.form.pass,
            type: that.form.resource
        });
        console.log(data)
        let url = 'http://47.101.186.106:8000/main/api/login';
        if (that.form.name && that.form.pass && that.form.resource){
            axiao.post(url, data,
                {headers:{'Content-Type':'application/x-www-form-urlencoded'}}
            ).then(function (response){
                if (response.data.status == 200){
                    if (that.form.resource == '1'){
                        that.$router.push({ name: "studentmsg", params:{token: response.data.token}})
                    }else if(that.form.resource == '2'){
                        that.$router.push({ name: "teacherIndex", params:{token: response.data.token}})
                    }
    
                }else if(response.data.status == 203){
                    that.isLoginError = true
                }
            })
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
