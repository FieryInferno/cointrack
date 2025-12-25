import CategoryEntity from '@/entities/category.entity'
import type CategoryRepositoryInterface from '../interfaces/repositories/category.repository.interface'
export default class CategoryRepository implements CategoryRepositoryInterface {
  async get() {
    try {
      const response = await fetch(
        'https://620371684d21c200170b9d23.mockapi.io/api/v27/categories'
      )

      if (!response.ok)
        return {
          error: `Error: ${response.status} ${response.statusText}`,
          data: null
        }

      const data = await response.json()

      return {
        data: data.map((item: any) => CategoryEntity.fromJSON(item)),
        error: null
      }
    } catch (error) {
      return { error: (error as Error).message, data: null }
    }
  }
}
