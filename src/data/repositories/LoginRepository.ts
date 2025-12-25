import type ILoginRepository from '@/domain/repositories/login.repository.interface'
import type LoginResponse from '@/shared/types/LoginResponse'
import LoginDataSource from '@/data/datasources/LoginDataSource'
export default class LoginRepository implements ILoginRepository {
  constructor(private readonly dataSource: LoginDataSource) {}
  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await this.dataSource.login(email, password)

    return { accessToken: response.data?.accessToken }
  }
}
