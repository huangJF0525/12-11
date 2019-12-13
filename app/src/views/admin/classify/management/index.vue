<template>
  <div>
    <el-button type="text" @click="add">新建分类</el-button>

    <el-dialog
      :title="title"
      :visible.sync="dialogFormVisible"
      :before-close="handleClose"
    >
      <el-form :model="form">
        <el-form-item v-if="msg == 1" label="ID" :label-width="formLabelWidth">
          <el-input v-model="form.name1"></el-input>
        </el-form-item>
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name2"></el-input>
        </el-form-item>
        <el-form-item label="跳转路由" :label-width="formLabelWidth">
          <el-input v-model="form.name3"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
    <el-table :data="columnData" border style="width: 100%">
      <el-table-column prop="column_id" label="ID" width="120">
      </el-table-column>
      <el-table-column prop="column_name" label="名称" width="120">
      </el-table-column>
      <el-table-column prop="column_to" label="跳转路由" width="120">
      </el-table-column>
      <el-table-column label="" width="auto"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="compile(scope.$index, columnData)"
            >编辑</el-button
          >
          <el-button type="text" size="small" @click="deletes(scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import qs from "qs";
// import ShowDialog from "./components/ShowDialog.vue";
export default {
  data() {
    return {
      title: "",
      msg: null,
      columnData: [],
      innerVisible: false,
      dialogFormVisible: false,
      form: {
        name1: "",
        name2: "",
        name3: ""
      },
      formLabelWidth: "120px"
    };
  },
  created() {
    this.main();
  },
  components: {},
  computed: {
    // ...mapState(["dialogFormVisible", "title", "msg"])
  },
  watch: {},
  methods: {
    add() {
      this.title = "新建分类";
      this.msg = 1;
      this.dialogFormVisible = true;
      this.form.name1 = null;
      this.form.name2 = null;
      this.form.name3 = null;

      // this.$store.commit("fatherData", true, "新建分类", 1);
    },
    main() {
      this.$http
        .post("http://127.0.0.1:8088/column")
        .then(resp => {
          this.columnData = resp.data;
          console.log(this.columnData);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    submit() {
      this.dialogFormVisible = false;
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

    deletes(id) {
      let params = {
        id: this.columnData[id].column_id
      };
      this.$http
        .post("http://127.0.0.1:8088/columndel", qs.stringify(params))
        .then(this.main())
        .catch(function(err) {
          console.log(err);
        });
    },
    compile(id, data) {
      this.dialogFormVisible = true;
      this.title = "编辑分类";
      this.msg = 2;
      this.form.name1 = id + 1;
      this.form.name2 = data[id].column_name;
      this.form.name3 = data[id].column_to;
    },
    throws(val) {
      this.dialogFormVisible = val;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    }
  }
};
</script>
