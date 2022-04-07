<template>
  <div class="main">
    <!-- <el-input class="input" v-model="name" placeholder="Please input" />
    <el-input
      v-model="password"
      class="input2"
      type="password"
      placeholder="Please input password"
      show-password
    />
    <el-button
      style="margintop: 20px"
      color="#626aef"
      size="large"
      plain
      @click="login"
      >login</el-button
    > -->
    <TEditor ref="editor" v-model="content" />
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { defineComponent } from "vue-demi";
import { ElMessage } from "element-plus";
import TEditor from '@/components/TinyMce/TEditor.vue';

export default defineComponent({
  components: {
    TEditor,
  },
  setup() {
    let name = ref("");
    let password = ref("");
    const content = ref("")
    const router = useRouter();
    const login = () => {
      if (name.value != "" && password.value != "") {
        router.push("/main");
      } else {
        ElMessage.warning("二者不能为空");
      }
    };
    return {
      name,
      password,
      login,
      content
    };
  },
});
</script>

<style lang="less" scoped>
.main {
  .input {
    margin-top: 100px;
    width: 200px;
  }
  .input2 {
    width: 200px;
    margin-top: 30px;
  }
}
</style>