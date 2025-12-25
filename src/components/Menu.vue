<script lang="ts" setup>
import { useTemplateRef } from 'vue'
import { authenticatedRoutes } from '@/router/routes'

const sidebar = useTemplateRef<HTMLDivElement>('sidebar')
const toggleSidebar = () => sidebar.value.classList.toggle('collapsed')
</script>
<template>
  <!-- Sidebar (Desktop) -->
  <div
    class="sidebar"
    id="sidebar"
    ref="sidebar"
  >
    <template
      v-for="route in authenticatedRoutes"
      :key="route.name"
    >
      <RouterLink
        :to="route.path"
        v-if="route.showInMenu"
        style="color: white; text-decoration: none"
      >
        <div class="menu-item">
          <span>{{ route.icon }}</span>
          <span class="menu-text">{{ route.name }}</span>
        </div>
      </RouterLink>
    </template>
    <div
      class="menu-item"
      @click="toggleSidebar"
      style="margin-top: 20px; background: #2b2b40"
    >
      <span>↔️</span>
      <span class="menu-text">Collapse</span>
    </div>
  </div>

  <!-- Bottom Nav (Mobile) -->
  <div class="bottom-nav">
    <template
      v-for="route in authenticatedRoutes"
      :key="route.name"
    >
      <RouterLink
        :to="route.path"
        v-if="route.showInMenu"
        style="color: white; text-decoration: none"
      >
        <div class="bottom-item">{{ route.icon }}</div>
      </RouterLink>
    </template>
  </div>
</template>
<style scoped>
@import './Menu.style.css';
</style>
