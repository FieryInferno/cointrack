<script lang="ts" setup>
  import { ref, defineEmits } from 'vue';
  defineProps<{ titleButton: string; title: string }>();

  const emit = defineEmits(['close']);
  const modal = ref<HTMLElement | null>(null);
  const closeModal = () => {
    if (modal.value) {
      modal.value.style.display = 'none';
      emit('close');
    }
  };
</script>
<template>
  <div class="modal" id="myModal" ref="modal" style="display: flex;">
    <div class="modal-content">
      <h2 class="modal-title" v-if="title">{{ title }}</h2>
      <span class="close" @click="closeModal">&times;</span>
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
  /* Background overlay */
  .modal {
    display: none; 
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
    justify-content: center;
    align-items: center;
    color: black;
    font-weight: normal;
  }
  .modal-title {
    margin-top: 0;
    margin-bottom: 15px;
  }

  /* Modal box */
  .modal-content {
    background: #fff;
    padding: 20px;
    width: 90%;
    max-width: 400px;
    border-radius: 10px;
    animation: fadeIn 0.3s ease;
    position: relative;
  }

  /* Close button */
  .close {
    position: absolute;
    right: 15px;
    top: 10px;
    font-size: 20px;
    cursor: pointer;
  }

  /* Animation */
  @keyframes fadeIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>