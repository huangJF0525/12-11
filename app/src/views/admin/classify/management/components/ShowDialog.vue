<template> <div></div></template>

<script>
import { mapState } from "vuex";
import qs from "qs";
export default {
  data() {
    return {
      // dialogFormVisible: this.$store.state.dialogFormVisible,
      // msg: this.$store.state.msg,
      // title: this.$store.state.title,
      form: {
        name1: "",
        name2: "",
        name3: ""
      },
      formLabelWidth: "120px"
    };
  },
  created() {
    console.log(this.dialogFormVisible);
  },
  components: {},
  computed: {
    ...mapState(["dialogFormVisible", "title", "msg"])
  },
  watch: {},
  methods: {
    submit() {
      this.$store.commit("fatherData", false);
      let params = {
        id: this.form.name1,
        name: this.form.name2,
        router: this.form.name3
      };
      if (this.msg == 1) {
        this.$http
          .post("http://127.0.0.1:8088/columnadd", qs.stringify(params))
          .then(this.main())
          .catch(function(err) {
            console.log(err);
          });
      } else if (this.msg == 2) {
        this.$http
          .post("http://127.0.0.1:8088/columncompile", qs.stringify(params))
          .then(this.main())
          .catch(function(err) {
            console.log(err);
          });
      }
    },
    close() {
      this.$emit("throw", false);
    }
  }
};
</script>
