<script lang="ts" setup>
import CategoryEntity from '@/entities/category.entity'

const props = defineProps<{ getCategories: () => Promise<CategoryEntity[]> }>()
const categories = await props.getCategories()
</script>
<template>
  <slot :categories="categories"></slot>
</template>
