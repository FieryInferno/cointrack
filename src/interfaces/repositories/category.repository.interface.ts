import type { ResponseRepository } from '@/types'
import CategoryEntity from '@/entities/category.entity'
export default interface CategoryRepositoryInterface {
  get(): Promise<ResponseRepository<CategoryEntity>>
}