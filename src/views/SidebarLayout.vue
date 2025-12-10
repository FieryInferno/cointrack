<script setup lang="ts">
  import Menu from "@/components/Menu.vue";
</script>
<template>
  <div class="wrapper">
    <Menu />
    <main class="content" style="flex:1; padding:20px; font-weight:600;">
      <router-view />
    </main>
  </div>
</template>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  main {
    background: #1a1a1a;
    color: #fff;
    min-height: 100vh;
    padding-bottom: 40px;
  }
  @media (width >= 48rem) {
    .wrapper {
      display: flex;
    }
  }
</style>