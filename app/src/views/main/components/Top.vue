<template>
  <div>
    <div class="header-left">
      <span @click="login">登录</span>
      <span>注册</span>
    </div>
    <div class="header-right">
      <span>案例提交</span>
      <span>网站统计</span>
      <span>Javc API</span>
      <el-input v-model="input" placeholder="请输入内容" clearable></el-input>
      <el-button size="mini" round>搜索</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  created() {},
  components: {},
  computed: {},
  watch: {},
  methods: {
    login() {
      this.$router.push("/login");
    }
  }
};
</script>
