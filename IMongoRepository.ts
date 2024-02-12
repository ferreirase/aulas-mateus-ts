import { IPerson, IPersonRepository } from "./IPerson";

const database: Array<IPerson> = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Doe", age: 26 },
  { id: 3, name: "Jane", age: 27 },
];

export class MongoPersonRepository implements IPersonRepository {
  getById(id: number): IPerson | null {
    return database.find((person) => person.id === id) || null;
  }

  getAll(): Array<IPerson> {
    throw new Error("Method not implemented.");
  }

  getName(id: number): string {
    throw new Error("Method not implemented.");
  }
}
