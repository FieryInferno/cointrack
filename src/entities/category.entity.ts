export default class CategoryEntity {
  id: string
  name: string
  limit?: number
  percentage?: number
  total?: number

  constructor({ id, name, limit, percentage, total }: { id: string, name: string, limit?: number, percentage?: number, total?: number }) {
    this.id = id
    this.name = name
    this.limit = limit
    this.percentage = percentage
    this.total = total
  }
  static fromJSON(json: any): CategoryEntity {
    return new CategoryEntity({
      id: json.id,
      name: json.name,
      limit: json.limit,
      percentage: json.percentage,
      total: json.total
    })
  }
}