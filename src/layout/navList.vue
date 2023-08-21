<template>
  <div class="header-nav">
    <div class="nav-tool">
      <div class="left-nav">低代码</div>
      <div class="tools">
        <div class="tool-item">
          <View></View>
          <div class="title">预览</div>
        </div>
        <div class="tool-item">
          <Delete></Delete>
          <div class="title">清空</div>
        </div>
        <div class="tool-item">
          <Upload></Upload>
          <div class="title">导出json</div>
        </div>
        <div class="tool-item">
          <Download></Download>
          <div class="title">导入json</div>
        </div>
      </div>
      <div>文档</div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss">
.header-nav {
  .nav-tool {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  svg {
    width: 20px;
    height: 20px;
  }
  .tools {
    display: flex;
    align-items: center;
  }
  .tool-item {
    padding: 0 10px;
    .title {
      font-size: 12px;
    }
  }
}
</style>
