<template>
  <form>
    <div class="control">
      <label for="category" class="required">Category</label>
      <input id="category" name="category" type="text" placeholder="Example: Food" required/>
    </div>
    <div class="control">
      <label for="limit">Limit</label>
      <input id="limit" name="limit" type="number" placeholder="Example: 1000000" />
    </div>
    <button type="submit">Add Category</button>
  </form>
</template>