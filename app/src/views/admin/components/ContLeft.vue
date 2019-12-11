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
          <span>内容管理</span>
        </template>
        <el-submenu index="1-1">
          <template slot="title">分类</template>
          <el-submenu index="1-1-1">
            <template slot="title">功能展示</template>
            <el-menu-item index="1-1-1-1">汽车</el-menu-item>
            <el-menu-item index="1-1-1-2">社会</el-menu-item>
            <el-menu-item index="1-1-1-3">美图</el-menu-item>
            <el-menu-item index="1-1-1-4">文章</el-menu-item>
            <el-menu-item index="1-1-1-5">小说</el-menu-item>
          </el-submenu>
          <el-submenu index="1-1-2">
            <template slot="title">介绍</template>
            <el-menu-item index="1-1-2-1">版本</el-menu-item>
            <el-menu-item index="1-1-2-2">问答</el-menu-item>
            <el-menu-item index="1-1-2-3">帮助</el-menu-item>
            <el-menu-item index="1-1-2-4">技术</el-menu-item>
          </el-submenu>
          <el-menu-item index="1-1-3">下载</el-menu-item>
          <el-menu-item index="1-1-4">案例</el-menu-item>
          <el-submenu index="1-1-5">
            <template slot="title">演示</template>
            <el-menu-item index="1-1-5-1">后台UI</el-menu-item>
            <el-menu-item index="1-1-5-2">接口</el-menu-item>
          </el-submenu>
          <el-menu-item index="1-1-6">支持</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>内容拓展</span>
        </template>
        <el-menu-item index="2-1">标签管理</el-menu-item>
        <el-menu-item index="2-2">搜索词管理</el-menu-item>
        <el-menu-item index="2-3">内容回收站</el-menu-item>
        <el-menu-item index="2-4">评论管理</el-menu-item>
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
