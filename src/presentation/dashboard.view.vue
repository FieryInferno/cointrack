<script setup lang="ts">
  import Chart from "chart.js/auto";
  import WarningLimit from "@/components/WarningLimit.vue";
  import { onMounted } from "vue";
  // --------------------------
  // Dummy data (bisa diganti nanti)
  // --------------------------

  const categoryData = {
    labels: ["Food", "Transport", "Shopping", "Bills", "Others"],
    values: [500000, 200000, 350000, 400000, 150000]
  };

  const monthlyTrend = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
    values: [1200000, 900000, 1100000, 1500000, 1300000, 1000000]
  };

  const ratioData = {
    labels: ["Income", "Expense"],
    values: [5000000, 3200000]
  };

  onMounted(() => {
    // --------------------------
    // Chart 1 - Pie Pengeluaran per Kategori
    // --------------------------
    new Chart(document.getElementById("categoryChart"), {
      type: "pie",
      data: {
        labels: categoryData.labels,
        datasets: [{
          data: categoryData.values,
          backgroundColor: ["#f54242", "#f5a142", "#42a5f5", "#7e42f5", "#42f57b"]
        }]
      }
    });

    // --------------------------
    // Chart 2 - Line Spending Trend Bulanan
    // --------------------------
    new Chart(document.getElementById("trendChart"), {
      type: "line",
      data: {
        labels: monthlyTrend.labels,
        datasets: [{
          data: monthlyTrend.values,
          fill: false,
          borderColor: "#42a5f5",
          tension: 0.2
        }]
      }
    });

    // --------------------------
    // Chart 3 - Doughnut Rasio Income vs Expense
    // --------------------------
    new Chart(document.getElementById("ratioChart"), {
      type: "doughnut",
      data: {
        labels: ratioData.labels,
        datasets: [{
          data: ratioData.values,
          backgroundColor: ["#42f57e", "#f54242"]
        }]
      }
    });
  });
</script>
<template>
  <header>
    <h4>CoinTrack Dashboard</h4>
  </header>
  <div >
    <div :style="{ 'margin-bottom': '1rem' }">
      <WarningLimit />
    </div>
    <div class="container">
      <div class="card">
        <h2>Pengeluaran per Kategori</h2>
        <canvas id="categoryChart"></canvas>
      </div>
      <div class="card">
        <h2>Spending Trend per Bulan</h2>
        <canvas id="trendChart"></canvas>
      </div>
      <div class="card">
        <h2>Rasio Income vs Expense</h2>
        <canvas id="ratioChart"></canvas>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import './styles/dashboard.style.css';
</style>