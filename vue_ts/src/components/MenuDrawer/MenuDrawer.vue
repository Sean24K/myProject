<template>
  <div>
    <el-drawer v-model="popupShow" title="HTML相关" @close="handleClose">
      <div class="list">
				<span class="listItem" v-for="item in htmlMenu" :key="item.id" @click="touchOne(item.id)">
					{{item.title}}
				</span>
			</div>
    </el-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRef, computed } from "vue-demi";
import { useRouter } from "vue-router";
import htmlMenu from '@/catalog/htmlMenu'

export default defineComponent({
  emits: ["selectItem", "close", "update:modelValue"],
  name: "menuDrawer",
  props: {
    menuArr: {
      type: Array,
      default: () => []
    },
		showDrawer: {
			type: Boolean,
			default: false
		},
    modelValue: {
      type: Boolean,
      defalult: false
    }
  },
  setup(props, ctx) {
    const popupShow: any = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        ctx.emit("update:modelValue", val)
      }
    })
    const R = useRouter();
    // const t = ref(props.showDrawer)
		// const isShow = toRef(props, "showDrawer")
    const methods = {
      touchOne(id: any) {
        ctx.emit("selectItem", id);
      },
      handleOpen() {
        console.log("123");
      },
      handleClose() {
        ctx.emit("close");
      },
    };
    return {
      R,
      ...methods,
			popupShow,
      // t,
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