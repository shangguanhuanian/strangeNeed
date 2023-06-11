<script setup>
import Header from '../views/Header.vue'
import Aside from '../views/Aside.vue'
</script>

<template>
<div class="common-layout">
    <el-container>
      <el-header>
		  <Header></Header>
	  </el-header>
      <el-container>
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-main></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
</style>
