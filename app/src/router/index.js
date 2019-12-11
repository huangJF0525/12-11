import Vue from "vue";
import VueRouter from "vue-router";
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../views/main"),
    children: [
      {
        path: "/home/:id",
        name: "home",
        component: () => import("../views/main/home")
      },
      {
        path: "/case/:id",
        name: "case",
        component: () => import("../views/main/case")
      }
    ],
    redirect: "/home/1"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login")
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin"),
    children: [
      {
        path: "/admin/mine",
        name: "mine",
        meta: {
          title: "个人主页",
          show: true
        },
        component: () => import("../views/admin/mine")
      },
      {
        path: "/admin/change",
        name: "change",
        meta: {
          title: "修改密码",
          show: false
        },
        component: () => import("../views/admin/mine/change")
      },
      {
        path: "/admin/mycontent",
        name: "mycontent",
        meta: {
          title: "我的内容"
        },
        component: () => import("../views/admin/mine/mycontent")
      },
      {
        path: "/admin/myoperation",
        name: "myoperation",
        meta: {
          title: " 操作日志"
        },
        component: () => import("../views/admin/mine/myoperation")
      },
      {
        path: "/admin/mylogin",
        name: "mylogin",
        meta: {
          title: "登录日志"
        },
        component: () => import("../views/admin/mine/mylogin")
      },
      {
        path: "/admin/myequipment",
        name: "myequipment",
        meta: { title: "我的设备" },
        component: () => import("../views/admin/mine/myequipment")
      },
      {
        path: "/admin/myauthorization",
        name: "myauthorization",
        meta: { title: "登录授权" },
        component: () => import("../views/admin/mine/myauthorization")
      },
      {
        path: "/admin/management",
        name: "management",
        meta: { title: "分类管理" },
        component: () => import("../views/admin/classify/management")
      },
      {
        path: "/admin/show",
        name: "show",
        meta: { title: "功能演示" },
        component: () => import("../views/admin/classify/show")
      },
      {
        path: "/admin/introduce",
        name: "introduce",
        meta: { title: "介绍" },
        component: () => import("../views/admin/classify/introduce")
      },
      {
        path: "/admin/demonration",
        name: "demonration",
        meta: { title: "演示" },
        component: () => import("../views/admin/classify/demonration")
      }
    ],
    redirect: "/admin/mine"
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
