import type LoginResponse from '@/shared/types/LoginResponse'
import type ILoginRepository from '../repositories/login.repository.interface'
export default class Login {
  constructor(private readonly repository: ILoginRepository) {}
  async execute(email: string, password: string): Promise<LoginResponse> {
    try {
      return await this.repository.login(email, password)
    } catch (error: unknown) {
      return {
        errorMessage: (error as Error).message ?? 'Unexpected error occurred'
      }
    }
  }
}
