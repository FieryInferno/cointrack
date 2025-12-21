import type CategoryRepositoryInterface from '../interfaces/repositories/category.repository.interface'
import CategoryEntity from '@/entities/category.entity'
export default class CategoryUseCase {
  constructor(private repository: CategoryRepositoryInterface) {}
  get: () => Promise<CategoryEntity[]> =
    async () => await this.repository.get().then((res) => res.data).catch(() => { throw new Error('Failed to get categories') })
}