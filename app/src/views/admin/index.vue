<template>
  <div class="admin">
    <div class="header-left">
      <img src="https://cms.publiccms.com/resource/logo.png" alt="" />
    </div>
    <div class="header-right">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#131a23"
        text-color="#afc5f6"
        active-text-color="#6e9ec0"
      >
        <el-menu-item index="1"
          ><i class="el-icon-lollipop"></i>个人</el-menu-item
        >
        <el-menu-item index="2"
          ><i class="el-icon-tickets"></i>内容</el-menu-item
        >
        <el-menu-item index="3"><i class="el-icon-crop"></i>页面</el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-folder"> </i> 分类
        </el-menu-item>
        <el-menu-item index="5"><i class="el-icon-guide"></i>维护</el-menu-item>
        <el-menu-item index="6"
          ><i class="el-icon-guide"></i> 开发</el-menu-item
        >
        <el-menu-item index="7" disabled
          ><i class="el-icon-link"></i> 站点</el-menu-item
        >
      </el-menu>
    </div>

    <div class="leftnav">
      <my-left v-if="key == 1"></my-left>
      <cont-left v-if="key == 2"></cont-left>
      <page-left v-if="key == 3"></page-left>
      <classify-left v-if="key == 4"></classify-left>
      <maintain-left v-if="key == 5"></maintain-left>
      <exploit-left v-if="key == 6"></exploit-left>
    </div>
    <div class="right-content">
      <div class="tags-view-container">
        <div class="tags-view-wrap">
          <router-link
            v-for="tag in Array.from(visitedViews)"
            :to="tag.path"
            :key="tag.path"
            class="tags-view-item"
            :class="isActive(tag) ? 'active' : ''"
          >
            {{ tag.title }}
            <span
              class="el-icon-close"
              @click.prevent.stop="delSelectTag(tag)"
            ></span>
          </router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import * as map from "./components";
export default {
  data() {
    return {
      key: 1,
      activeIndex2: "1"
    };
  },
  created() {
    this.handleSelect(1);
  },
  components: {
    ...map
  },
  computed: {
    visitedViews() {
      //store中取值
      return this.$store.state.tagsview.visitedviews;
    }
  },
  watch: {
    $route() {
      this.addViewTags();
    }
  },
  methods: {
    handleSelect(key) {
      this.key = key;
    },
    isActive(route) {
      return route.path == this.$route.path;
    },
    addViewTags() {
      //路由改变时执行的方法
      if (this.$route.name) {
        const route = this.$route;
        console.log(this.$route.name);
        this.$store.dispatch("addVisitedViews", route);
      }
    },
    delSelectTag(route) {
      //先提交删除数据的方法,数组删除出掉数据后，如果关闭的是当前打开的路由需要将路由改为数组最后一次push进去的路由
      this.$store.dispatch("delVisitedViews", route).then(views => {
        if (this.isActive(route)) {
          //只有在关闭当前打开的标签页才会有影响
          let lastView = views.slice(-1)[1]; //选取路由数组中的最后一位
          if (lastView) {
            this.$router.push(lastView);
          } else {
            this.$router.push("/admin/mine");
          }
        }
      });
    }
  }
};
</script>
