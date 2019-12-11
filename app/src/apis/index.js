import Vue from "vue";
export default {
  user() {
    return this.$http.post("http://127.0.0.1:8088/login");
  },
  list(params) {
    return Vue.axios.post("http://127.0.0.1:8088/list", params);
  }
  // register(params) {
  //   return Axios.post("/register", params);
  // },
  // noticeClass(params) {
  //   return Axios.post("/noticeClass", params);
  // },
  // noticeSchool(params) {
  //   return Axios.post("/noticeSchool", params);
  // },
  // noticeDean(params) {
  //   return Axios.post("/noticeDean", params);
  // },
  // taskAlready(params) {
  //   return Axios.post("/taskAlready", params);
  // },
  // taskAwait(params) {
  //   return Axios.post("/taskAwait", params);
  // },
  // classes(params) {
  //   return Axios.post("/classes", params);
  // },
  // inserttaskAwait(params) {
  //   return Axios.post("/inserttaskAwait", params);
  // },
  // switchtask(params) {
  //   return Axios.post("/switchtask", params);
  // },
  // selecttask(params) {
  //   return Axios.post("/selecttask", params);
  // },
  // deletetask(params) {
  //   return Axios.post("/deletetask", params);
  // },
  // taskdetail(params) {
  //   return Axios.get("/taskdetail", { params });
  // },
  // classpay(params) {
  //   return Axios.post("/classpay", params);
  // },
  // oddclasspay(params) {
  //   return Axios.post("/oddclasspay", params);
  // },
  // insertclasspay(params) {
  //   return Axios.post("/insertclasspay", params);
  // },
  // editclasspay(params) {
  //   return Axios.post("/editclasspay", params);
  // },
  // deleteclasspay(params) {
  //   return Axios.post("/deleteclasspay", params);
  // },
  // office(params) {
  //   return Axios.post("/office", params);
  // },
  // deleteapproval(params) {
  //   return Axios.post("/deleteapproval", params);
  // },
  // insertapproval(params) {
  //   return Axios.post("/insertapproval", params);
  // },
  // oddapproval(params) {
  //   return Axios.post("/oddapproval", params);
  // },
  // editapproval(params) {
  //   return Axios.post("/editapproval", params);
  // },
  // officeing(params) {
  //   return Axios.post("/officeing", params);
  // },
  // insertapprovaling(params) {
  //   return Axios.post("/insertapprovaling", params);
  // },
  // approvaldetail(params) {
  //   return Axios.get("/approvaldetail", { params });
  // },
  // approvalend(params) {
  //   return Axios.post("/approvalend", params);
  // },
  // switchapproval(params) {
  //   return Axios.post("/switchapproval", params);
  // },
  // deleteapprovaling(params) {
  //   return Axios.post("/deleteapprovaling", params);
  // },
  // approvalenddetail(params) {
  //   return Axios.get("/approvalenddetail", { params });
  // },
  // classleave(params) {
  //   return Axios.post("/classleave", params);
  // },
  // insertclassleave(params) {
  //   return Axios.post("/insertclassleave", params);
  // },
  // classleaveend(params) {
  //   return Axios.post("/classleaveend", params);
  // },
  // switchclassleaveend(params) {
  //   return Axios.post("/switchclassleaveend", params);
  // },
  // deleteclassleaveend(params) {
  //   return Axios.post("/deleteclassleaveend", params);
  // }
  // //
};
