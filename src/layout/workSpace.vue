<template>
  <div class="work-pages">
    <div class="canvasBox" ref="canvasBox">
      {{ dragComponetList }}
      <draggable
        :list="dragData"
        item-key="key"
        :group="{ name: 'dragGroup', pull: 'clone', put: false }"
      >
        <template #item="{ element: item }">
          <li class="field-assembly-item" :title="item.ControlType">
            <span class="component-name"> {{ item.ControlType }} </span>
          </li>
          <!-- <component :is="item.ControlType"></component> -->
          <!-- <li
          class="field-assembly-item"
          :title="item.displayName"
          @dblclick="addFiled(item)"
        >
          <svg-icon :name="item.icon"> </svg-icon>
          <span class="component-name"> {{ item.displayName }} </span>
        </li> -->
        </template>
      </draggable>
    </div>
  </div>
</template>
<script lang="ts" setup>
import draggable from "vuedraggable";
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import useStore from "@/store";
const store = useStore().form;

const canvasBox = ref();
const dragData = ref([
  { id: 1, ControlType: "Text" },
  { id: 2, ControlType: "Text" },
  { id: 3, ControlType: "Text" },
]);
const dragComponetList = computed(() => {
  const pa = [{ ControlType: "Text", icon: "text", displayName: "文本框" }];
  return pa;
  // return store.allComponentList;
});
</script>
