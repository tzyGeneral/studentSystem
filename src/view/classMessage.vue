<template>
      <a-table :columns="columns" :dataSource="data">
        <a slot="name" slot-scope="text">{{ text }}</a>
      </a-table>
</template>>


<script>

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '班级',
    dataIndex: 'classId',
    key: 'classId',
  },
  {
    title: '性别',
    dataIndex: 'gender',
    key: 'gender',
    ellipsis: true,
  },
  {
    title: '籍贯',
    dataIndex: 'hometown',
    key: 'hometown',
    ellipsis: true,
  },
    {
    title: '电话',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
    ellipsis: true,
  }
];

const data = [];
    import QS from 'qs'
    import axios from 'axios'

export default {
  data() {
    return {
      data,
      columns,
    };
  },
    methods: {
        getStudentMessage() {
            let that = this;
            let token_data = that.$route.params.token;
            let url = 'http://47.101.186.106:8000/main/teacher/getClassInfo';
                axios.get(url,{params: {token: token_data, classId:1}}).then(function(response){
                    let result = response.data.data;
                    that.data = result
        })
    },
  },
  mounted: function(){
      this.getStudentMessage()
  },
};
</script>