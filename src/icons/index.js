import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

// req将仅在svg目录查找
// require.context()返回指定上下文的require
const req = require.context('./svg', false, /\.svg$/)
// req.keys()获取上下文中符合规则的所有文件
req.keys().map(req)

// 全局注册SvgIcon组件
Vue.component('svg-icon', SvgIcon)