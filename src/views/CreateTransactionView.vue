<script lang="ts" setup></script>
<template>
  <div class="container">
    <section class="form-section">
      <h2>Add Transaction</h2>

      <label>Date</label>
      <input type="date" id="date">

      <label>Category</label>
      <select id="category"></select>
      <button id="addCategoryBtn">+ Add Category</button>

      <label>Amount</label>
      <input type="number" id="amount" placeholder="Enter amount">

      <label>Note</label>
      <textarea id="note" placeholder="Optional note..."></textarea>

      <label>Receipt Photo</label>
      <input type="file" id="receipt" accept="image/*">

      <button class="submit-btn" id="saveTransaction">Save Transaction</button>
    </section>
  </div>
</template>
<style>
  button {
    margin-top: 12px;
  }
</style>