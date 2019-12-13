<template>
  <div>
    <div class="topnav-left">
      <img src="@/assets/icon.png" alt="" />
      <p>更专业的选择</p>
    </div>
    <div class="topnav-right">
      <ul class="clearfix">
        <li v-for="(item, index) in columnData" :key="index">
          <a @click="open(item.column_id, item.column_name)">{{
            item.column_name
          }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columnData: []
    };
  },
  created() {
    this.main();
  },
  components: {},
  computed: {},
  watch: {},

  methods: {
    cancelRequest() {
      if (typeof this.source === "function") {
        this.source("终止请求!");
      }
    },
    main() {
      this.cancelRequest();
      this.$http
        .post("http://127.0.0.1:8088/column")
        .then(resp => {
          this.columnData = resp.data;
          // console.log(this.columnData);
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
    open(key, value) {
      this.$router.push({
        name: "home",
        params: {
          id: key,
          name: value
        }
      });
    }
  }
};
</script>
