import { InjectionEnum } from '../entity/Injection.enum';
import { injectable, inject } from 'inversify';
import { ExampleMongoRepositoryInterface } from 'repository/interface/IExampleMongoRepository.interface';
import { IUseCase } from './interface/IUseCase.interface';

@injectable()
export class InsertExampleUseCase implements IUseCase {
  constructor(
    @inject(InjectionEnum.ExampleMongoRepository)
    private readonly exampleMongoRepository: ExampleMongoRepositoryInterface,
  ) {
    console.log('Entrou no usecase');
  }

  execute(data: any): Promise<any> {
    console.log(data);
    this.exampleMongoRepository.findAll();
    throw new Error('Method not implemented.');
  }
}
