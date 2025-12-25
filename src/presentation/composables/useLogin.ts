import { ref } from 'vue'
import Login from '@/domain/usecases/Login'
import LoginRepository from '@/data/repositories/LoginRepository'
import LoginDataSource from '@/data/datasources/LoginDataSource'
export function useLogin() {
  const loading = ref(false)
  const error = ref('')
  const login = async (email: string, password: string) => {
    try {
      loading.value = true
      const response = await new Login(
        new LoginRepository(new LoginDataSource())
      ).execute(email, password)

      if (response.errorMessage) return (error.value = response.errorMessage)

      localStorage.setItem('accessToken', response.accessToken!)
      return true
    } catch (error) {
      error.value = error.message ?? 'Unexpected error occurred'

      return false
    } finally {
      loading.value = false
    }
  }

  return { loading, error, login }
}
