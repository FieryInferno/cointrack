export default interface IRepository {
  get<T>(): Promise<T>
}
