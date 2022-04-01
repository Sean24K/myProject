<template>
  <div class="home">
    <el-row>
      <el-button @click="toPrimary" type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const id = ref("")
    const router = useRouter();
    // const route = useRoute();s
    const toPrimary = () => {
      router.push("/primary")
    }
    return {
      id,
      toPrimary
    }
  }
})
</script>

<style scoped lang="less">
  .home{
    width: 100%;
    height: 100vh;
    background-color: antiquewhite;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>