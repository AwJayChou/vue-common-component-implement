<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-for="item in items" :key="item.id">
      <router-link :to="`/detail/${item.id}`">{{ item.name }}</router-link>
    </div>
    <div>count: {{ $store.state.count }}</div>
    <button @click="add">add count</button>
    <button @click="asyncAdd">async 1 second add</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      items: [
        { id: 1, name: "shop-list-1" },
        { id: 2, name: "shop-list-2" },
      ],
    };
  },
  components: {
    HelloWorld,
  },
  mounted() {
    const timer = setInterval(() => {
    }, 1000);
    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer);
    });
  },
  methods: {
    add() {
      // mutation
      // this.$store.commit('increment')
      // action
      this.$store.dispatch("a/increment")
      // .then((result) => {
      //   if (!result) {
      //     alert("add success！");
      //   }
      // });
    },
    asyncAdd() {
      this.$store.dispatch("asyncIncrement").then((result) => {
        if (!result) {
          alert("add fail！");
        }
      });
    },
  },
};
</script>
