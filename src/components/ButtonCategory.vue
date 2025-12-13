<script lang="ts" setup>
  import { ref, defineAsyncComponent } from 'vue';

  const isClick = ref(false);
  const ModalAsync = defineAsyncComponent({ loader: () => import('./Modal.vue') });
  const FormAddCategoryAsync = defineAsyncComponent({ loader: () => import('./FormAddCategory.vue') });
</script>
<template>
  <div @click="isClick = !isClick">
    <slot></slot>
  </div>
  <ModalAsync v-if="isClick" :title="'Form Category'" :show="isClick" @update:show="isClick = $event">
    <FormAddCategoryAsync v-if="isClick"/>
  </ModalAsync>
</template>