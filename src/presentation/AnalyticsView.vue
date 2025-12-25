<script lang="ts" setup>
  import { onMounted, ref, computed } from "vue";

  const incomeVal = ref<HTMLElement | null>(null);
  const expenseVal = ref<HTMLElement | null>(null);
  const netVal = ref<HTMLElement | null>(null);
  const insightText = ref<HTMLElement | null>(null)
  const monthly = ref<Record<string, number>>({
    Jan: 2000000,
    Feb: 1800000,
    Mar: 2400000,
    Apr: 2100000,
    May: 2600000,
    Jun: 2500000
  });
  const maxVal = computed(() => Math.max(...Object.values(monthly.value)));
  const topMonth = computed(() => Object.entries(monthly.value).sort((a, b) => b[1] - a[1])[0]);
  const categories = ref<Record<string, number>>({
    Food: 1200000,
    Transport: 500000,
    Shopping: 1500000,
    Bills: 900000,
    Entertainment: 450000
  });

  onMounted(() => {
    // Dummy data
    const income = 8500000;
    const expense = 3600000;

    // Fill summary values
    incomeVal.value!.innerText = income.toLocaleString("id-ID");
    expenseVal.value!.innerText = expense.toLocaleString("id-ID");
    netVal.value!.innerText = (income - expense).toLocaleString("id-ID");

    // // Category table
    // const table = document.getElementById("categoryTable");
    // let highest = { name: "", value: 0 };

    // for (const cat in categories) {
    //   const tr = document.createElement("tr");
    //   const val = categories[cat];

    //   tr.innerHTML = `
    //   `;

    //   if (val > highest.value) {
    //     highest = { name: cat, value: val, row: tr };
    //   }

    //   table.appendChild(tr);
    // }

    // // Highlight biggest category
    // highest.row.classList.add("highlight");

    // Insight calculation

    insightText.value!.innerText =
      `Pengeluaran terbesar terjadi pada bulan ${topMonth.value[0]} dengan total Rp ${topMonth.value[1]}.`;
  })
</script>
<template>
  <h1>Analytics Report</h1>

  <!-- Summary -->
  <div class="summary-cards">
    <div class="card">
      <h2>Total Income</h2>
      <div class="value" ref="incomeVal">Rp 0</div>
    </div>
    <div class="card">
      <h2>Total Expense</h2>
      <div class="value" ref="expenseVal">Rp 0</div>
    </div>
    <div class="card">
      <h2>Net Balance</h2>
      <div class="value" ref="netVal">Rp 0</div>
    </div>
  </div>

  <!-- Spending timeline (bar without charts) -->
  <div class="timeline-box card">
    <h2>Monthly Spending Timeline</h2>
    <div>
      <div class="timeline-item" v-for="month in Object.keys(monthly)" :key="month">
        <div class="timeline-label">{{ month }}</div>
        <div class="timeline-bar" :style="{ width: (monthly[month] / maxVal) * 100 + '%' }"></div>
      </div>
    </div>
  </div>

  <!-- Insights -->
  <div class="insight-box" id="insightBox">
    <h2>Insights</h2>
    <p ref="insightText">Loading...</p>
  </div>

  <!-- Category summary -->
  <h2>Category Breakdown</h2>
  <table id="categoryTable">
    <tr>
      <th>Category</th>
      <th>Total Expense</th>
    </tr>
    <tr v-for="(value, key) in categories" :key="key" :class="{ highlight: value === Math.max(...Object.values(categories)) }">
      <td>{{ key }}</td>
      <td>Rp {{ value.toLocaleString("id-ID") }}</td>
    </tr>
  </table>
</template>
<style scoped>
  .summary-cards {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
  h1 {
    text-align: center;
    margin-bottom: 25px;
  }
  .card {
    flex: 1;
    min-width: 200px;
  }

  .card h2 {
    margin: 0 0 10px;
    font-size: 18px;
    opacity: 0.7;
  }

  .card .value {
    font-size: 26px;
    font-weight: 700;
  }
  .timeline-box {
    background: #191919;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 30px;
  }

  .timeline-item {
    display: flex;
    align-items: center;
    margin: 12px 0;
  }

  .timeline-bar {
    height: 10px;
    background: #4caf50;
    border-radius: 4px;
    margin-left: 10px;
  }

  .timeline-label {
    width: 50px;
    opacity: 0.7;
  }

  /* Insight box */
  .insight-box {
    background: #202020;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 30px;
  }

  /* Table */
  table {
    width: 100%;
    border-collapse: collapse;
    background: #1e1e1e;
    border-radius: 10px;
    overflow: hidden;
  }

  th, td {
    padding: 14px;
    border-bottom: 1px solid #333;
    text-align: left;
  }

  th {
    background: #272727;
  }

  tr.highlight {
    background: #333;
    font-weight: bold;
  }
</style>