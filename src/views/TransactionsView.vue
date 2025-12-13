<script lang="ts" setup>
  import ButtonAddCategory from '@/components/ButtonAddCategory.vue';
  import ListCategories from '@/components/ListCategories.vue';
</script>
<template>
  <div class="container">
    <!-- Summary -->
    <section class="summary">
      <div class="card">
        <h2>Total Balance</h2>
        <p id="totalBalance">Rp 0</p>
      </div>
      <div class="card income">
        <h2>Total Income</h2>
        <p id="totalIncome">Rp 0</p>
      </div>
      <div class="card expense">
        <h2>Total Expense</h2>
        <p id="totalExpense">Rp 0</p>
      </div>
    </section>
  </div>
  <!-- Category List -->
  <div class="flex-container">
    <div class="flex-item card">
      <div style="display: flex; margin-bottom: 2rem; justify-content: space-between; align-items: center;">
        <h2>Categories</h2>
        <ButtonAddCategory />
      </div>
      <ListCategories />
    </div>
    <div class="flex-item card">
      <div style="display: flex; margin-bottom: 2rem; justify-content: space-between; align-items: center;">
        <h2>All Transactions</h2>
        <RouterLink to="/transactions/create">
          <button>+ Add Transaction</button>
        </RouterLink>
      </div>
      <ul id="transactionList">
        <li class="transaction-item">
          2025-12-03 — Food <span class="amount income-color">+Rp 1</span><br><small>test</small>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
  .summary {
    display: flex;
    gap: 15px;
    margin-bottom: 25px;
  }

  .summary .card {
    flex: 1;
    background: #1b1b1b;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    border: 1px solid #333;
  }

  .card.income p {
    color: #4caf50;
  }

  .card.expense p {
    color: #ff5252;
  }

  label {
    display: block;
    margin-top: 10px;
    font-size: 14px;
  }

  input, select, textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    background: #222;
    border: 1px solid #444;
    border-radius: 8px;
    color: white;
  }

  textarea {
    height: 60px;
  }

  .submit-btn {
    width: 100%;
    background: #0aa85a;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .transaction-item {
    background: #222;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #333;
    margin-bottom: 10px;
  }

  .transaction-item span.amount {
    float: right;
    font-weight: bold;
  }

  .income-color {
    color: #4caf50;
  }

  .expense-color {
    color: #ff5252;
  }
  .flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-align-content: flex-start;
    align-content: flex-start;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    gap: 1rem;
  }
  .flex-item:nth-child(1) {
    -webkit-order: 0;
    order: 0;
    -webkit-flex: 0 1 30%;
    flex: 0 1 30%;
    -webkit-align-self: auto;
    align-self: auto;
  }
  .flex-item:nth-child(2) {
    -webkit-order: 0;
    order: 0;
    -webkit-flex: 1 0 auto;
    flex: 1 0 auto;
    -webkit-align-self: auto;
    align-self: auto;
  }
</style>
