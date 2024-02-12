export type IPerson = {
  id: number;
  name: string;
  age: number;
};

export interface IPersonRepository {
  getById(id: number): IPerson | null;
  getAll(): Array<IPerson>;
};
