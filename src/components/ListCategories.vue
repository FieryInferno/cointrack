<script lang="ts" setup>
  import { ref } from 'vue';
  import ButtonEditCategory from './ButtonEditCategory.vue';
  import formatRupiah from '@/utils/format-rupiah.util';

  const categories = ref([
    { name: 'Food', limit: 1500000 },
    { name: 'Transport', limit: 500000 },
    { name: 'Shopping', limit: 1000000 },
    { name: 'test', limit: 0 }
  ]);
</script>
<template>
  <ul id="categoryList">
    <li v-for="{ limit, ...category } in categories" :key="category" class="category-item">
      <div>
        <div>{{ category.name }}</div>
        <div class="category-limit" v-show="limit > 0">{{ formatRupiah(limit) }}</div>
      </div>
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
  .category-limit {
    color: var(--success);
    font-size: 14px;
  }
</style>