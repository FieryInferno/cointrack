<script setup lang="ts">
  import { useLimit } from '@/presentation/composables/useLimit'

  const { getLimit } = useLimit()
</script>
<template>
  <div class="card limit-alert-card">
    <div class="limit-alert-header">
      <h3>⚠️ Limit Alert</h3>
      <a
        href="#"
        class="see-all"
        >See all</a
      >
    </div>

    <div class="limit-item warning">
      <div class="limit-info">
        <span class="category">🍔 Makan</span>
        <span class="percent">90%</span>
      </div>
      <div class="progress-bar">
        <div
          class="progress warning"
          style="width: 90%"
        ></div>
      </div>
      <p class="limit-text">Rp 900.000 / Rp 1.000.000</p>
    </div>

    <div class="limit-item danger">
      <div class="limit-info">
        <span class="category">🎮 Hiburan</span>
        <span class="percent">120%</span>
      </div>
      <div class="progress-bar">
        <div
          class="progress danger"
          style="width: 100%"
        ></div>
      </div>
      <p class="limit-text over">Over limit Rp 200.000</p>
    </div>

    <div class="limit-item warning">
      <div class="limit-info">
        <span class="category">🚕 Transport</span>
        <span class="percent">82%</span>
      </div>
      <div class="progress-bar">
        <div
          class="progress warning"
          style="width: 82%"
        ></div>
      </div>
      <p class="limit-text">Rp 410.000 / Rp 500.000</p>
    </div>
  </div>
</template>
<style scoped>
  @import '../styles/warning-limit.style.css';
</style>
