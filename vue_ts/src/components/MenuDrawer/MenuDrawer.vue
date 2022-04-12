<template>
  <div>
    <el-drawer v-model="isShow" title="HTML相关">
      <div class="list">
				<span class="listItem" v-for="item in htmlMenu" :key="item.id" @click="touchOne(item.id)">
					{{item.title}}
				</span>
			</div>
    </el-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from "vue-demi";
import { useRouter } from "vue-router";
import htmlMenu from '@/catalog/htmlMenu'

export default defineComponent({
  emits: ["selectItem"],
  name: "menuDrawer",
  props: {
    menuArr: {
      type: Array,
      default: () => []
    },
		showDrawer: {
			type: Boolean,
			default: false
		}
  },
  setup(props, ctx) {
    const R = useRouter();
		const isShow = toRef(props, "showDrawer")
    const methods = {
      touchOne(id: any) {
        ctx.emit("selectItem", id);
      },
      handleOpen() {
        console.log("123");
      },
      handleClose() {
        console.log("456");
      },
    };
    return {
      R,
      ...methods,
			isShow,
			htmlMenu,
    };
  },
});
</script>

<style lang="less" scoped>
	.list{
		.listItem{
			display: inline-block;
			width: 100%;
			height: 40px;
			border-bottom: 1px solid #ccc;
			line-height: 40px;
			text-align: left;
		}
	}
</style>