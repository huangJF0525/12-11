<template>
  <div class="home content">
    <div class="swiper">
      <div class="case-top" v-if="this.$route.params.id != 1">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item
            :to="{ path: `/home/${this.$route.params.id}` }"
            >{{ this.$route.params.name }}</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <div class="home-left">
      <el-card class="box-card" v-for="(item, index) in listData" :key="index">
        <div slot="header" class="clearfix">
          <a @click="change(index)">{{ item.list_title }}</a>
          <span style="float: right; padding: 3px 0">{{
            item.list_time | _formatDate
          }}</span>
        </div>
        <div class="body">
          <a @click="change(index)"
            ><el-image
              :src="item.list_img"
              v-show="item.show_img == 1"
            ></el-image
          ></a>
          <p>
            {{ item.list_show | ellipsis }}<a @click="change(index)">详细></a>
          </p>
        </div>
      </el-card>
    </div>
    <div class="home-right"></div>
  </div>
</template>

<script>
import qs from "qs";
import moment from "moment";
export default {
  data() {
    return {
      listData: []
    };
  },
  created() {
    this.main();
  },
  components: {},
  computed: {},
  filters: {
    _formatDate(time) {
      return moment(time).format("YYYY-MM-DD");
    },
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 50) {
        return value.slice(0, 50) + "...";
      }
      return value;
    }
  },
  beforeRouteUpdate(to, from, next) {
    if (to.fullPath != from.fullPath) {
      next();
      this.main();
    }
  },
  watch: {},
  methods: {
    cancelRequest() {
      if (typeof this.source === "function") {
        this.source("终止请求!");
      }
    },
    main() {
      this.cancelRequest();
      let params = {
        id: this.$route.params.id
      };
      this.$http
        .post("http://127.0.0.1:8088/lists", qs.stringify(params))
        .then(resp => {
          this.listData = resp.data;
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
    },
    change(i) {
      this.$router.push({
        name: "case",
        params: {
          id: this.listData[i].list_id
        }
      });
    }
  }
};
</script>
