<script lang="ts" setup>
  import { ref } from 'vue';
  import ButtonEditCategory from './ButtonEditCategory.vue';

  const categories = ref([
    'Food',
    'Transport',
    'Shopping',
    'test'
  ]);
</script>
<template>
  <ul id="categoryList">
    <li v-for="category in categories" :key="category" class="category-item">
      {{ category }}
      <ButtonEditCategory />
    </li>
  </ul>
</template>
<style scoped>
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .category-item {
    background: #222;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #333;
    margin-bottom: 10px;
  }
</style>