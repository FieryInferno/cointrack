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
.limit-alert-card {
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  max-width: 100%;
  font-family: system-ui, sans-serif;
}

.limit-alert-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.limit-alert-header h3 {
  font-size: 16px;
  margin: 0;
}

.see-all {
  font-size: 12px;
  color: #6366f1;
  text-decoration: none;
}

.limit-item {
  margin-bottom: 14px;
}

.limit-info {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 6px;
}

.category {
  font-weight: 500;
}

.percent {
  font-weight: 600;
}

.progress-bar {
  background: #f1f5f9;
  height: 8px;
  border-radius: 6px;
  overflow: hidden;
}

.progress {
  height: 100%;
  border-radius: 6px;
}

.progress.warning {
  background: linear-gradient(90deg, #facc15, #f97316);
}

.progress.danger {
  background: linear-gradient(90deg, #ef4444, #dc2626);
}

.limit-text {
  font-size: 12px;
  color: #64748b;
  margin-top: 4px;
}

.limit-text.over {
  color: #dc2626;
  font-weight: 500;
}
</style>
