<script lang="ts" setup>
  import { useTemplateRef } from "vue";

  const sidebar = useTemplateRef<HTMLDivElement>("sidebar");
  const toggleSidebar = () => sidebar.value.classList.toggle("collapsed")
</script>
<template>
  <!-- Sidebar (Desktop) -->
  <div class="sidebar" id="sidebar" ref="sidebar">
    <div class="menu-item">
      <span>🏠</span>
      <span class="menu-text">Dashboard</span>
    </div>
    <div class="menu-item">
      <span>📒</span>
      <span class="menu-text">Transactions</span>
    </div>
    <div class="menu-item">
      <span>📊</span>
      <span class="menu-text">Analytics</span>
    </div>
    <div class="menu-item">
      <span>⚙️</span>
      <span class="menu-text">Settings</span>
    </div>
    <div class="menu-item" @click="toggleSidebar" style="margin-top: 20px; background:#2b2b40;">
      <span>↔️</span>
      <span class="menu-text">Collapse</span>
    </div>
  </div>

  <!-- Bottom Nav (Mobile) -->
  <div class="bottom-nav">
    <div class="bottom-item">🏠</div>
    <div class="bottom-item">📒</div>
    <div class="bottom-item">📊</div>
    <div class="bottom-item">⚙️</div>
  </div>
</template>
<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  /* Sidebar (Desktop) */
  .sidebar {
    width: 220px;
    background: #1e1e2f;
    color: white;
    padding-top: 20px;
    transition: width 0.3s;
    display: none;
  }

  .sidebar.collapsed {
    width: 70px;
  }

  .menu-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    cursor: pointer;
    transition: background 0.2s;
  }

  .menu-item:hover {
    background: #35354d;
  }

  .menu-text {
    transition: opacity 0.3s;
    white-space: nowrap;
  }

  .collapsed .menu-text {
    opacity: 0;
    pointer-events: none;
  }

  /* Bottom Nav (Mobile) */
  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: none;
    background: #1e1e2f;
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
  }

  @media (width >= 48rem) {
    .sidebar {
      display: block;
    }
    .bottom-nav {
      display: none;
    }
  }

  .bottom-item {
    color: white;
    text-align: center;
    cursor: pointer;
  }

  .bottom-item span {
    display: block;
    font-size: 22px;
  }
</style>