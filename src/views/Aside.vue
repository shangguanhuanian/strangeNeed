<template>
  <div class="aside">
    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="1"
      text-color="#fff" @open="handleOpen" @close="handleClose">
      <router-link to="/body">
      <el-menu-item index="1">
          <el-icon><IceCream /></el-icon>
          <span>毫无亮点的首页</span>
        </el-menu-item>
      </router-link>

      <router-link to="/eat">
        <el-menu-item index="2">
          <el-icon><IceCream /></el-icon>
          <span>想吃啥？</span>
        </el-menu-item>
      </router-link>

      <!-- <router-link to="/test3"> -->
      <el-menu-item index="3">
        <el-icon>
          <document />
        </el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
    <!-- </router-link> -->

      <el-menu-item index="4">
        <el-icon>
          <setting />
        </el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  IceCream
} from '@element-plus/icons-vue'

</script>

<style>
.aside {
  background-color: #545c64;
  height: calc(100vh - 60px);
}
</style>