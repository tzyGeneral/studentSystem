<template>
    <div>
        <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="作业名称">
                <a-input v-model="form.homeworkName" />
            </a-form-model-item>
            <a-form-model-item label="科目类型">
                <a-select v-model="form.subjectId" placeholder="请选择你的科目">
                    <a-select-option value="1">
                        语文
                    </a-select-option>
                    <a-select-option value="2">
                        数学
                    </a-select-option>
                    <a-select-option value="3">
                        英语
                    </a-select-option>
                    <a-select-option value="4">
                        物理
                    </a-select-option>
                    <a-select-option value="5">
                        化学
                    </a-select-option>
                    <a-select-option value="6">
                        生物
                    </a-select-option>
                    <a-select-option value="7">
                        体育
                    </a-select-option>
                    <a-select-option value="8">
                        美术
                    </a-select-option>
                    <a-select-option value="9">
                        地理
                    </a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="班级">
                <a-select v-model="form.classId" placeholder="请选择班级">
                
                        <a-select-option :value=one.classId v-for="(one, index) in classIdPut" :key="index">
                            {{one.classId}}
                        </a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="发布时间">
            <a-date-picker
                v-model="form.updatetime"
                show-time
                type="date"
                placeholder="选择时间"
                style="width: 100%;"
            />
            </a-form-model-item>
            <a-form-model-item label="作业内容">
                <a-input v-model="form.text" type="textarea" />
            </a-form-model-item>
            <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" @click="onSubmit">
                    上传
                </a-button>
    </a-form-model-item>
        </a-form-model>
    </div>
</template>>

<script>
import axios from 'axios'
import QS from 'qs'
export default {
    props: {
        classIdPut: Array,
    },
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        token: '',
        homeworkName: '',
        classId: undefined,
        subjectId: undefined,
        updatetime: undefined,
        text: '',
      },
    };
  },
  methods: {
    onSubmit() {
        this.form.token = this.$route.params.token
        let data = QS.stringify({
            token: this.form.token,
            homeworkName: this.form.homeworkName,
            classId: this.form.classId,
            subjectId: this.form.subjectId,
            updatetime: this.form.updatetime.format('YYYY-MM-DD HH:mm:ss'),
            text: this.form.text,
        });
       let url = 'http://47.101.186.106:8000/main/teacher/putHomework';
       console.log(this.classIdPut)
       console.log(this.form)
         axios.post(url, data ,
            {headers:{'Content-Type':'application/x-www-form-urlencoded'}}
            ).then(function(response){
                let results = response.data.data;
        })
    },
  },
};
</script>