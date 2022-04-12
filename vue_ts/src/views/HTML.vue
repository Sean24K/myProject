<template>
	<div>
		<div>html</div>
		<el-button type="success" @click="open">Success</el-button>
		<menu-drawer :showDrawer="drawerShow" :menuArr="menu" @selectItem="selectOne"></menu-drawer>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRef, ref } from "vue-demi";
import { useRouter } from "vue-router";
import MenuDrawer from '@/components/MenuDrawer/MenuDrawer.vue'

export default defineComponent({
	components: {
		MenuDrawer
	},
  setup(props, ctx) {
    const R = useRouter();
		const drawerShow = ref(false)
		const menu = ref([])
    const methods = {
      open() {
        drawerShow.value = !drawerShow.value
      },
      handleClose() {
        console.log("456");
      },
			selectOne(val: any) {
				console.log(val)
			}
    };
    return {
      R,
      ...methods,
			menu,
			drawerShow
    };
  },
});
</script>

<style lang="less" scoped>
</style>