<template>
  <div id="app">
    <div id="nav">
      <router-link to="#/">
        <svg-icon icon-class="qq" ></svg-icon>
        <!-- <svg>
          <use xlink:href="#icon-qq"></use>
        </svg> -->
        Home
      </router-link> |
      <router-link to="#/about">
        <!-- <svg>
          <use xlink:href="#icon-wx"></use>
        </svg> -->
        <svg-icon icon-class="wx"></svg-icon>
      About</router-link>
    </div>
    <!-- 插座 -->
    <router-view/>
    <TreeTest></TreeTest>
    <!-- <KFormTest></KFormTest> -->
    <!-- <HelloWorld 
      @foo="onFoo"
      ref="hw"
      msg="Welcome to Your Vue.js App"/>
    <HelloWorld>
      <template>abc</template>
      <template v-slot:content>lalala...</template>
      <template v-slot:footer="slotProps">
        {{slotProps.foo}} - {{slotProps.bar}}
      </template>
    </HelloWorld>-->
    <!-- <CompCommunicate /> -->
    <!-- <SlotsTest></SlotsTest> -->
    <!-- <Recursion></Recursion> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import CompCommunicate from "./components/communicate";
import SlotsTest from "./components/slots";
import Recursion from "./components/recursion";
import KFormTest from "./components/form";
import TreeTest from './components/tree';
// import '@/icons/svg/qq.svg'
// import '@/icons/svg/wx.svg'

export default {
  name: "app",
  provide() {
    return {
      foo: this
    };
  },
  components: {
    HelloWorld,
    CompCommunicate,
    SlotsTest,
    Recursion,
    KFormTest,
    TreeTest
  },
  // mounted() {
  //   console.log(this.$refs.hw.msg);
  //   console.log(this.$children[0].msg);
  // },
  methods: {
    onFoo(msg) {
      console.log(msg);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
