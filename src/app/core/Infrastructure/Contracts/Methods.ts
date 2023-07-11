export interface IDelete<T> {
  delete(id?: string | number): Promise<T>;
}

export interface IGetAll<T> {
  getAll(args: any): Promise<T>;
}

export interface IPost<L, T> {
  post(data: L): Promise<T>;
}

export interface IPut<T> {
  put(data: T): Promise<T | void>;
}

export interface IGetById<T> {
  getById(id: string | number): Promise<T>;
}
