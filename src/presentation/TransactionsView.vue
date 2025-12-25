<script lang="ts" setup>
import ButtonAddCategory from '@/components/ButtonAddCategory.vue'
import ListCategoriesWithGetData from '@/components/ListCategoriesWithGetData.vue'
import categoryService from '@/services/category.service'
import ListCategories from '@/components/ListCategories.vue'
</script>
<template>
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
  <!-- Category List -->
  <div class="flex-container">
    <div class="flex-item card category-list">
      <div
        style="
          display: flex;
          margin-bottom: 2rem;
          justify-content: space-between;
          align-items: center;
        "
      >
        <h2>Categories</h2>
        <ButtonAddCategory />
      </div>
      <Suspense>
        <ListCategoriesWithGetData :getCategories="categoryService.get">
          <template #default="{ categories }">
            <ListCategories :categories="categories" />
          </template>
        </ListCategoriesWithGetData>
        <template #fallback>Loading...</template>
      </Suspense>
    </div>
    <div class="flex-item card">
      <div
        style="
          display: flex;
          margin-bottom: 2rem;
          justify-content: space-between;
          align-items: center;
        "
      >
        <h2>All Transactions</h2>
        <RouterLink to="/transactions/create">
          <button>+ Add Transaction</button>
        </RouterLink>
      </div>
      <ul id="transactionList">
        <li class="transaction-item">
          2025-12-03 — Food <span class="amount income-color">+Rp 1</span
          ><br /><small>test</small>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
@import './TransactionsView.style.css';
</style>
