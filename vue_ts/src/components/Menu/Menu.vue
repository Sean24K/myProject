<template>
  <div>123</div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const R = useRouter();
    return {
      R,
    };
  },
});
</script>

<style lang="less" scoped>
</style>