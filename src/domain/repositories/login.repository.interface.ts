import type LoginResponse from '@/shared/types/LoginResponse'
export default interface ILoginRepository {
  login(email: string, password: string): Promise<LoginResponse>
}
