<template>
	<div>
		<div>html</div>
    <!-- <codemirror></codemirror> -->
		<el-button type="success" @click="open">Success</el-button>
		<menu-drawer v-model="drawerShow" :menuArr="menu" @selectItem="selectOne" @close="close"></menu-drawer>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRef, ref } from "vue-demi";
import { useRouter } from "vue-router";
import MenuDrawer from '@/components/MenuDrawer/MenuDrawer.vue'
// import codemirror from '@/components/Content/content.vue'

export default defineComponent({
	components: {
		MenuDrawer,
    // codemirror
	},
  setup(props, ctx) {
    const R = useRouter();
		const drawerShow = ref(false)
		const menu = ref([])
    const methods = {
      open() {
        drawerShow.value = true
      },
      close() {
        drawerShow.value = false
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