import type Response from '@/shared/types/Response'

export default class LoginDataSource {
  login = async (email: string, password: string): Promise<Response> =>
    new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            success: true,
            data: { accessToken: 'dummy_token' },
            message: 'Login successful'
          }),
        3000
      )
    )
}
