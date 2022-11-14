import { InjectionEnum } from '../../entity/Injection.enum';
import { Container, interfaces } from 'inversify';
import { UserRepositoryImpl } from '../../repository/UserRepositoryImpl';
import { AdminRepositoryImpl } from '../../repository/AdminRepositoryImpl';
import { ExamRepositoryImpl } from '../../repository/ExamRepositoryImpl';
import { LogineUseCase } from '../../usecase/Login.usecase';
import { AdminLoginUseCase } from '../../usecase/AdminLogin.usecase';
import { CreateExamUseCase } from '../../usecase/CreateExam.usecase';
import { GetAllExamsUseCase } from '../../usecase/GetAllExams.usecase';
import { AddMatterToExamUseCase } from '../../usecase/AddMatterToExam.usecase';
import { AddSubjectToMatterUseCase } from '../../usecase/AddSubjectToMatter.usecase';

export class Injection {
  public container: interfaces.Container;

  constructor() {
    this.bindClass();
  }

  private bindClass(): void {
    this.container = new Container();
    this.container.bind<UserRepositoryImpl>(InjectionEnum.UserRepositoryImpl).to(UserRepositoryImpl);
    this.container.bind<AdminRepositoryImpl>(InjectionEnum.AdminRepositoryImpl).to(AdminRepositoryImpl);
    this.container.bind<ExamRepositoryImpl>(InjectionEnum.ExamRepositoryImpl).to(ExamRepositoryImpl);
    this.container.bind<LogineUseCase>(InjectionEnum.LogineUseCase).to(LogineUseCase);
    this.container.bind<AdminLoginUseCase>(InjectionEnum.AdminLoginUseCase).to(AdminLoginUseCase);
    this.container.bind<CreateExamUseCase>(InjectionEnum.CreateExamUseCase).to(CreateExamUseCase);
    this.container.bind<GetAllExamsUseCase>(InjectionEnum.GetAllExamsUseCase).to(GetAllExamsUseCase);
    this.container.bind<AddMatterToExamUseCase>(InjectionEnum.AddMatterToExamUseCase).to(AddMatterToExamUseCase);
    this.container.bind<AddSubjectToMatterUseCase>(InjectionEnum.AddSubjectToMatterUseCase).to(AddSubjectToMatterUseCase);
  }
}
