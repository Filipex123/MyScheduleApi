import { InjectionEnum } from '../../entity/Injection.enum';
import { Container, interfaces } from 'inversify';
import { ExampleMongoRepositoryImpl } from '../../repository/implementation/ExampleMongoRepositoryImp';
import { InsertExampleUseCase } from '../../usecase/InsertExample.usecase';

export class Injection {
  public container: interfaces.Container;

  constructor() {
    this.bindClass();
  }

  private bindClass(): void {
    this.container = new Container();
    this.container
      .bind<ExampleMongoRepositoryImpl>(InjectionEnum.ExampleMongoRepository)
      .to(ExampleMongoRepositoryImpl);
    this.container.bind<InsertExampleUseCase>(InjectionEnum.InsertExampleUseCase).to(InsertExampleUseCase);
  }
}
