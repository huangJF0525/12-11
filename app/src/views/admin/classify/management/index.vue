<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true"
      >新建分类</el-button
    >

    <el-dialog title="新建分类" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="ID" :label-width="formLabelWidth">
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
      <el-table-column fixed prop="column_id" label="ID" width="120">
      </el-table-column>
      <el-table-column prop="column_name" label="名称" width="120">
      </el-table-column>
      <el-table-column prop="column_to" label="跳转路由" width="120">
      </el-table-column>
      <el-table-column label="" width="auto"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="compile(scope.$index)"
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
import qs from "qs";
export default {
  data() {
    return {
      columnData: [],
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
  computed: {},
  watch: {},
  methods: {
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
      this.$http
        .post("http://127.0.0.1:8088/columnadd", qs.stringify(params))
        .then(this.main())
        .catch(function(err) {
          console.log(err);
        });
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
    }
    // compile(id) {

    //   this.dialogFormVisible = true;
    //   this.form.name1=this.columnData[id].column_id;
    //   this.form.name2=this.columnData[id].column_
    //   let params = {
    //     id: this.form[id].name1,
    //     name: this.form[id].name2,
    //     router: this.form[id].name3
    //   };
    //   this.$http
    //     .post("http://127.0.0.1:8088/columncompile", qs.stringify(params))
    //     .then(this.main())
    //     .catch(function(err) {
    //       console.log(err);
    //     });
    // }
  }
};
</script>
