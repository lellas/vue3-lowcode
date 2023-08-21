<template>
  <el-scrollbar class="scroll-left">
    <div style="text-align: center">组件库</div>
    <draggable
      :list="componentList"
      item-key="key"
      :group="{ name: 'dragGroup', pull: 'clone', put: false }"
    >
      <template #item="{ element: item }">
        <li
          class="field-assembly-item"
          :title="item.displayName"
          @dblclick="addFiled(item)"
        >
          <svg-icon :name="item.icon"> </svg-icon>
          <span class="component-name"> {{ item.displayName }} </span>
        </li>
      </template>
    </draggable>
  </el-scrollbar>
</template>
<script setup lang="ts">
import draggable from "vuedraggable";
import { ref, onMounted } from "vue";
import baseComponents from "@/packages/baseComponents/index.ts";
import { storeToRefs } from "pinia";
import useStore from "@/store";
const store = useStore().form;

export interface BaseComponentItem {
  /**
   * 组件渲染唯一标识
   */
  ControlType: string;
  /**
   * 组件icon图标
   */
  icon: string;
  /**
   * 组件名称
   */
  nameCn: string;
  /**
   * 是否是布局表单
   */
  layout: boolean;
  /**
   * 规则
   */
  // rules?: FormRule;
}
const formComponents = baseComponents;

const componentList: any = [];
for (const key in formComponents) {
  const item = formComponents[key];
  const model: BaseComponentItem | Record<string, any> = {};
  model.ControlType = item.ControlType;
  model.icon = item.icon;
  model.displayName = item.nameCn;
  componentList.push(model);
}
function addFiled(item: any) {
  console.log(item);
  console.log("store:", store);
  store.setAllComponentList(item);
}
</script>
<style lang="scss" scoped>
.scroll-left {
  .field-assembly-item {
    display: flex;
    height: 32px;
    line-height: 32px;
    width: 98px;
    margin: 2px 6px 6px 0;
    cursor: move;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    background: #fff;
    border: 1px solid #e8e9eb;
    border-radius: 4px;
    padding: 0 8px;
    align-items: center;
  }
  .field-assembly-item:hover {
    background: #f1f2f3;
    border-color: #409eff;
  }
  .component-name {
    margin-left: 10px;
  }
}
</style>
