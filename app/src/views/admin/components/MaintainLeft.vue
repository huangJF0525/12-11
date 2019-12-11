<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商务管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">订单管理</el-menu-item>
          <el-menu-item index="1-2">订单历史</el-menu-item>
          <el-menu-item index="1-3">退款管理</el-menu-item>
          <el-menu-item index="1-4">账号管理</el-menu-item>
          <el-menu-item index="1-5">账号历史</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商务管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">用户管理</el-menu-item>
          <el-menu-item index="2-2">部门管理</el-menu-item>
          <el-menu-item index="2-3">角色管理</el-menu-item>
          <el-menu-item index="2-4">客户端管理</el-menu-item>
          <el-menu-item index="2-5">用户数据监控</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统维护</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">站点配置</el-menu-item>
          <el-menu-item index="3-2">任务计划</el-menu-item>
          <el-menu-item index="3-3">数据字典</el-menu-item>
          <el-menu-item index="3-4">应用授权</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>日志管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">文件上传日志</el-menu-item>
          <el-menu-item index="4-2">操作日志</el-menu-item>
          <el-menu-item index="4-3">登录日志</el-menu-item>
          <el-menu-item index="4-4">任务计划日志</el-menu-item>
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
    }
  }
};
</script>
