<template>
  <div class="main">
    <el-container>
      <el-header class="header">你渴望知识吗</el-header>
      <el-container style="height: 92vh">
        <el-aside class="aside" width="200px">
          <h5>菜单</h5>
					<pathMenu :menuArr="menuData" @select="select"></pathMenu>
        </el-aside>
        <el-main class="cont">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import pathMenu from "@/components/Menu/Menu.vue"
import menuData from "@/global/Menu/menu"
export default defineComponent({
	components: {
		pathMenu
	},
  setup(props, ctx) {
    const router = useRouter();
		const methods = {
			select(val: any) {
				console.log(val)
			}
		}
    return {
      router,
			menuData,
			...methods
    };
  },
});
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  .header {
    background: #ccc;
    height: 8vh;
    line-height: 8vh;
  }
  .aside {
    border: 1px solid #1c1c1c;
    // background: #1d1e23;
    color: #828284;
		border-right: none;
  }
  .cont {
    background: #fff;
    border: 1px solid #1c1c1c;
  }
}
</style>