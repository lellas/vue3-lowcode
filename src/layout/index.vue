<template>
  <!-- <div class="lowcode-page">
    <div class="lowcode-page-nav"><navList></navList></div>
    <div class="lowcode-page-left"></div>
    <div class="lowcode-page-content"></div>
    <div class="lowcode-page-right"></div>
  </div> -->
  <el-container class="lowcode-page">
    <el-header class="lowcode-header"><navList></navList></el-header>
    <el-container class="lowcode-main">
      <el-aside class="lowcode-page-left"><leftMenu></leftMenu></el-aside>

      <el-container class="lowcade-page-content">
        <el-main>
          <workSpace></workSpace>
        </el-main>
      </el-container>

      <el-aside class="lowcode-page-right">
        <rightMenu></rightMenu>
      </el-aside>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import navList from "./navList.vue";
import leftMenu from "./leftMenu.vue";
import rightMenu from "./rightMenu.vue";
import workSpace from "./workSpace.vue";
</script>
<style lang="scss" scoped>
.lowcode-page {
  height: 100%;

  .lowcode-header {
    padding: 10px;
  }
  .lowcode-main {
    display: flex;
    border-top: 1px dashed #e5e7eb;
    .lowcode-page-left {
      width: 20%;
      border-right: 1px dashed #e5e7eb;
    }
    .el-container {
      width: 60%;
    }
    .lowcode-page-right {
      width: 20%;
      border-left: 1px dashed #e5e7eb;
    }
  }
}
</style>
