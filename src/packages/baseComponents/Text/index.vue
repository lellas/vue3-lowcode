<template>
  <div class="form-filed">
    <div class="filed-label">{{ filedLabel }}:</div>
    <div class="filed-item">
      <el-input
        :modelValue="filedName"
        :placeholder="placeholder"
        :size="size"
      ></el-input>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { FiledProps } from "../model/FiledProps";

defineOptions({
  ControlType: "Text",
  nameCn: "文本框",
  icon: "text",
  mounted() {
    console.log("mounted");
  },
});

export interface API {
  nameCn: string;
}
const props = withDefaults(defineProps<FiledProps>(), {
  filedName: "text" + new Date().getTime(),
  filedLabel: "文本框",
  isRequired: false,
  size: "default",
  placeholder: "请输入",
});
onMounted(() => {
  console.log("onMounted");
});
onMounted(() => {
  console.log("onMounted111");
});
onMounted(() => {
  console.log("onMounted3222");
});
</script>
