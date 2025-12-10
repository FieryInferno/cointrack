<script setup lang="ts">
  import Chart from "chart.js/auto";
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
  <main>
    <header>
      <h1>CoinTrack Dashboard</h1>
    </header>
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
  </main>
</template>

<style scoped>
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

  header {
    padding: 20px;
    text-align: center;
    background: #242424;
    margin-bottom: 20px;
  }

  .container {
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
  }

  .card {
    width: 20rem;
    margin: auto;
    background: #2a2a2a;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.4);
    min-height: 100%;
  }

  @media (width >= 48rem) {
    .container {
      width: 90%;
      margin: auto;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .card {
      width: 100%;
      margin: auto;
    }
  }

  .card h2 {
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }
</style>