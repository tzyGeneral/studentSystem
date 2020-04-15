<template>
    <div>
        <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="作业名称">
                <a-input v-model="form.name" />
            </a-form-model-item>
            <a-form-model-item label="科目类型">
                <a-select v-model="form.kind" placeholder="请选择你的科目">
                    <a-select-option value="yuwen">
                        语文
                    </a-select-option>
                    <a-select-option value="shuxue">
                        数学
                    </a-select-option>
                    <a-select-option value="yingyu">
                        英语
                    </a-select-option>
                    <a-select-option value="wuli">
                        物理
                    </a-select-option>
                    <a-select-option value="dili">
                        化学
                    </a-select-option>
                    <a-select-option value="shengwu">
                        生物
                    </a-select-option>
                    <a-select-option value="tiyu">
                        体育
                    </a-select-option>
                    <a-select-option value="meishu">
                        美术
                    </a-select-option>
                    <a-select-option value="dili">
                        地理
                    </a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="发布时间">
            <a-date-picker
                v-model="form.date"
                show-time
                type="date"
                placeholder="选择时间"
                style="width: 100%;"
            />
            </a-form-model-item>
            <a-form-model-item label="作业内容">
                <a-input v-model="form.desc" type="textarea" />
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
export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: '',
        kind: undefined,
        date: undefined,
        desc: '',
      },
    };
  },
  methods: {
    onSubmit() {
       let url = 'http://47.101.186.106:8000/main/student/score';
         axios.get(url, this.form ,
            {headers:{'Content-Type':'application/x-www-form-urlencoded'}}
            ).then(function(response){
                let results = response.data.data;
        })
    },
  },
};
</script>