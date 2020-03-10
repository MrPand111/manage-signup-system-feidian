import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/',meta: {title: '登录',index: 0},component: () => import('../views/Login/Login.vue') },                            // 登录页
  { path: '/user/register',meta: {title: '注册',index: 1},component: () => import('../views/Register/Register.vue') },         // 注册页
  { path: '/user/activeAccount/:mail/:uuId',meta: {title: '激活账号',index: 0},component: () => import('../views/Register/ActiveAccount.vue') },  // 激活账号页
  { path: '/system/home',meta: {title: '我的主页',index: 1},component: () => import('../views/Home/Home.vue') },               // 我的主页
  { path: '/user/center',meta: {title: '个人中心',index: 2},component: () => import('../views/Center/Center.vue') },           // 个人中心页 
  { path: '/user/edit',meta: {title: '修改资料',index: 3},component: () => import('../views/EditUser/EditUser.vue') },         // 修改资料页
  { path: '/system/list/:type',meta: {title: '组织列表',index: 3},component: () => import('../views/OrgList/OrgList.vue') },   // 组织列表页
  { path: '/system/build',meta: {title: '创建组织',index: 3},component: () => import('../views/BuildOrg/BuildOrg.vue') },      // 创建组织页
  { path: '/system/manager/:orgid',meta: {title: '成员管理',index: 4},component: () => import('../views/Manager/Manager.vue') },  // 成员管理页
  { path: '/system/vieworg/:orgid',meta: {title: '查看组织',index: 4},component: () => import('../views/ViewOrg/ViewOrg.vue') },  // 查看组织页
  { path: '/system/editorg/:orgid',meta: {title: '组织编辑',index: 4},component: () => import('../views/EditOrg/EditOrg.vue') },  // 编辑组织页
  { path: '/system/editform/:formid',meta: {title: '报名表编辑',index: 5},component: () => import('../views/EditForm/EditForm.vue') },  // 编辑组织页
  { path: '/system/signup/:orgid',meta: {title: '报名',index: 5},component: () => import('../views/SignUp/SignUp.vue') },  // 编辑组织页
  { path: '/system/showform/:orgid',meta: {title: '查看报名表',index: 5},component: () => import('../views/ShowForm/ShowForm.vue') },  // 查看报名表页
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((from,to,next) => {
  window.document.title = from.meta.title;
  next();
})

export default router
