<template>
  <div class="main">
		<el-container>
      <el-header class="header">你渴望知识吗</el-header>
      <el-container style="height: 92vh">
        <el-aside class="aside" width="200px">
					<h5>菜单</h5>
					<el-menu
						:default-active="router.path"
						class="el-menu-vertical-demo"
						@open="handleOpen"
						@close="handleClose"
						router
					>
						<el-menu-item v-for="item in pathArr" :key="item.pathId" :index="item.path">
							<span>{{item.name}}</span>
						</el-menu-item>
					</el-menu>
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
export default defineComponent({
  setup() {
		const router = useRouter()
		const pathArr = ref([
			{pathId: 0, name: '关于', path: '/About'}
		])
		return {
			router,
			pathArr
		}
	},
});
</script>

<style scoped lang="less">
	.main{
		width: 100%;
		height: 100%;
		.header{
			background: #ccc;
			height: 8vh;
			line-height: 8vh;
		}
		.aside{
			border: 1px solid #1c1c1c;
			// background: #1d1e23;
			color: #828284;
		}
		.cont{
			background: #ccc;
			border: 1px solid #1c1c1c;
		}
	}
</style>