<script lang="ts" setup>
  import { ref } from 'vue';
  import ButtonEditCategory from './ButtonEditCategory.vue';
  import formatRupiah from '@/utils/format-rupiah.util';

  const categories = ref([
    { name: 'Food', limit: 1500000, total: 500000, percentage: 33 },
    { name: 'Transport', limit: 500000, total: 200000, percentage: 40 },
    { name: 'Shopping', limit: 1000000, total: 1750000, percentage: 175 },
    { name: 'test', limit: 0, total: 1000000, percentage: 0 }
  ]);
  const limitClass = (percentage: number) => {
    if (percentage >= 100) return 'over-limit';
    if (percentage < 80) return 'save';
    if (percentage >= 80 && percentage < 100) return 'near-limit';
    return '';
  };
</script>
<template>
  <ul id="categoryList">
    <li v-for="{ limit, total, percentage, ...category } in categories" :key="category.name" class="category-item">
      <div>
        <div>{{ category.name }}</div>
        <div
          class="category-limit"
          v-if="limit > 0"
          :class="limitClass(percentage)"
        >{{ formatRupiah(total) }} / {{ formatRupiah(limit) }}</div>
        <div v-if="limit > 0" style="display: flex; align-items: center; gap: 8px;">
          <progress :value="Math.min(percentage, 100)" :max="100" :class="limitClass(percentage)"></progress>
          <span>
            {{ percentage }}%
            <span v-if="percentage >= 100">❌</span>
            <span v-else-if="percentage < 80">✅</span>
            <span v-else>⚠️</span>
          </span>
        </div>
      </div>
      <ButtonEditCategory />
    </li>
  </ul>
</template>
<style scoped>
  @import './ListCategory.style.css';
</style>