<template>
  <li>
    <div>
      <div @click="toggle">
        {{model.title}}
        <span v-if="isFolder">[{{open ? '-': '+'}}]</span>
      </div>
    </div>
    <ul v-if="isFolder" v-show="open">
        <item v-for="model in model.children" :model="model" :key="model.title"></item>
    </ul>
  </li>
</template>

<script>
export default {
    // 递归组件
    // 必须要有名字
    name:"Item",
    props: {
        models: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
            open: false
        }
    },
    computed: {
        isFolder() {
            return this.models.children && this.models.children.length
        }
    },
};
</script>

<style lang="scss" scoped>
</style>