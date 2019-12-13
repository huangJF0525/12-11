<template>
  <div class="case content">
    <div class="case-top">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/home/4' }">案例</el-breadcrumb-item>
        <el-breadcrumb-item>{{ listData.list_title }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="case-left">
      <p>{{ listData.list_title }}</p>
      <p>
        {{ listData.list_time | _formatDate }}阅读<span>{{
          listData.read
        }}</span>
      </p>
      <div class="container">
        <p>
          {{ listData.list_title }}
          <el-link :href="listData.list_url" type="primary">{{
            listData.list_url
          }}</el-link>
        </p>
        <p>
          <img :src="listData.list_bigimg" alt="" />
        </p>
      </div>
    </div>
    <div class="case-right"></div>
  </div>
</template>

<script>
import qs from "qs";
import moment from "moment";
export default {
  data() {
    return {
      list_id: null,
      listData: []
    };
  },
  created() {
    this.list_id = this.$route.params.id;
    this.get();
  },
  components: {},
  filters: {
    _formatDate(time) {
      return moment(time).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  computed: {},
  watch: {},
  methods: {
    cancelRequest() {
      if (typeof this.source === "function") {
        this.source("终止请求!");
      }
    },
    get() {
      this.cancelRequest();
      let params = {
        id: this.list_id
      };
      this.$http
        .post("http://127.0.0.1:8088/listid", qs.stringify(params))
        .then(resp => {
          this.listData = resp.data[0];
          console.log(this.listData);
        })
        .catch(err => {
          if (err) {
            if (this.$http.isCancel(err)) {
              // 终止多次请求 请求取消 返回取消后的信息
              console.log("请求取消", err.message);
            } else {
              // 服务端数据异常
              console.log("没有搜索到数据哦");
              this.listData = [];
            }
          }
        });
    }
  }
};
</script>
