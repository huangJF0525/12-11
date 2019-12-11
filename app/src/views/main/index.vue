<template>
  <div class="wrapper">
    <div class="gird">
      <div class="item-1"></div>
      <div class="item-2">
        <top></top>
      </div>
      <div class="item-3"></div>
      <div class="item-4">4</div>
      <div class="item-5">
        <top-nav></top-nav>
      </div>
      <div class="item-6">6</div>
      <div class="item-7">7</div>
      <div class="item-8">
        <router-view></router-view>
      </div>
      <div class="item-9">9</div>
      <div class="item-10">10</div>
    </div>
  </div>
</template>

<script>
import Top from "./components/Top";
import TopNav from "./components/TopNav";
export default {
  data() {
    return {};
  },
  created() {},
  components: { Top, TopNav },
  computed: {},
  watch: {},
  methods: {}
};
</script>
