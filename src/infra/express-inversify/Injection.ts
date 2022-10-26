import { InjectionEnum } from '../../entity/Injection.enum';
import { Container, interfaces } from 'inversify';
import { UserRepositoryImpl } from '../../repository/UserRepositoryImpl';
import { LogineUseCase } from '../../usecase/Login.usecase';

export class Injection {
  public container: interfaces.Container;

  constructor() {
    this.bindClass();
  }

  private bindClass(): void {
    this.container = new Container();
    this.container.bind<UserRepositoryImpl>(InjectionEnum.UserRepositoryImpl).to(UserRepositoryImpl);
    this.container.bind<LogineUseCase>(InjectionEnum.LogineUseCase).to(LogineUseCase);
  }
}
