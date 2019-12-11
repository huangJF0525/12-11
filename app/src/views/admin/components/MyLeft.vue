<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      router
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>与我相关</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/admin/change" @click="addViewTags"
            >修改密码</el-menu-item
          >
          <el-menu-item index="/admin/mycontent" @click="addViewTags"
            >我的内容</el-menu-item
          >
          <el-menu-item index="/admin/myoperation" @click="addViewTags"
            >我的操作日志</el-menu-item
          >
          <el-menu-item index="/admin/mylogin" @click="addViewTags"
            >我的登录日志</el-menu-item
          >
          <el-menu-item index="/admin/myequipment" @click="addViewTags"
            >我的设备</el-menu-item
          >
          <el-menu-item index="/admin/myauthorization" @click="addViewTags"
            >我的登录授权</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  components: {},
  computed: {},
  watch: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    open(key) {
      console.log(key._uid);
    },
    addViewTags() {
      //路由改变时执行的方法
      if (this.$route.name) {
        const route = this.$route;
        console.log(route);
        this.$store.dispatch("addVisitedViews", route);
      }
    }
  }
};
</script>
