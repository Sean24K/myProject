<template>
  <div class="box">
    <iframe :src="url" frameborder="0" width="100%" height="100%" ></iframe>
  </div>
</template>

<script>
import { defineComponent } from 'vue-demi'

export default defineComponent({
	name: 'Content',
  props: {
    url: {
      type: String,
      default: ''
    }
  },
})
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height:calc(92vh);
}
</style>
