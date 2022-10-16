export interface ExampleMongoRepositoryInterface {
  findAll(): Promise<any[]>;
  create(object: any): any;
  delete(id: number): boolean;
  update(object: any): any;
  findById(id: number): any;
}
