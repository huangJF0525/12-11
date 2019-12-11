<template>
  <div>
    <el-menu
      default-active="2"
      router
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>分类管理</span>
        </template>
        <el-submenu index="1-1">
          <template slot="title">父分类</template>
          <el-menu-item-group>
            <el-menu-item index="/admin/management" @click="addViewTags"
              >分类管理</el-menu-item
            >
            <el-menu-item index="/admin/show" @click="addViewTags"
              >功能演示</el-menu-item
            >
            <el-menu-item index="/admin/introduce" @click="addViewTags"
              >介绍</el-menu-item
            >
            <el-menu-item index="/admin/demonration" @click="addViewTags"
              >演示</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>分类拓展</span>
        </template>
        <el-menu-item index="2-1" @click="addViewTags">分类类型</el-menu-item>
        <el-menu-item index="2-2" @click="addViewTags">标签分类</el-menu-item>
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
