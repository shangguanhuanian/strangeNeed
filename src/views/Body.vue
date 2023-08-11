<template>
	<h1> 我在这 {{ msg }}</h1>
	<input v-model="msg">
  </template>

<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<style></style>

<!-- // 请确保模板中使用的属性在setup选项中有定义 -->
<!-- // “ref”是用来存储值的响应式数据源。
// 理论上我们在展示该字符串的时候不需要将其包装在 ref() 中，
// 但是在下一个示例中更改这个值的时候，我们就需要它了。 -->


