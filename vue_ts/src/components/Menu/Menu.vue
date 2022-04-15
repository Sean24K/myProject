<template>
  <div>
    <el-menu
      :default-active="R.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      router
    >
      <el-menu-item
        v-for="item in menuArr"
        :key="item.pathId"
        :index="item.path"
      >
        <span>{{ item.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";
import { useRouter } from "vue-router";

export default defineComponent({
  emits: ["select", "close"],
  name: "pathMenu",
  props: {
    menuArr: {
      type: Array,
      default: () => []
    }
  },
  setup(props, ctx) {
    const R = useRouter();
    const methods = {
      handleSelect() {
        ctx.emit("select", "点击了")
      },
      handleOpen() {
        console.log('123')
      },
      handleClose() {
        ctx.emit("close")
      }
    }
    return {
      R,
      ...methods
    };
  },
});
</script>

<style lang="less" scoped>
</style>