<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useLogin } from '@/presentation/composables/useLogin'

const { loading, error, login } = useLogin()
const router = useRouter()
const dataLogin = ref<{ email: string; password: string }>({
  email: '',
  password: ''
})
const submitLogin = async () => {
  const response = await login(dataLogin.value.email, dataLogin.value.password)

  debugger

  if (response) router.push('/dashboard')
}
</script>
<template>
  <form @submit.prevent="submitLogin">
    <div class="login-container">
      <h2>CoinTrack</h2>
      <div class="input-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          v-model.trim="dataLogin.email"
          required
        />
      </div>

      <div class="input-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          v-model.trim="dataLogin.password"
          required
        />
      </div>

      <button
        id="loginBtn"
        type="submit"
        >{{ loading ? 'Loading...' : 'Login' }}</button
      >
      <div
        class="error"
        v-if="error"
        >{{ error }}</div
      >
    </div>
  </form>
</template>
<style scoped>
@import './styles/login.style.css';
</style>
