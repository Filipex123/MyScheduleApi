export enum InjectionEnum {
  //Repository
  UserRepositoryImpl = 'UserRepositoryImpl',
  AdminRepositoryImpl = 'AdminRepositoryImpl',
  ExamRepositoryImpl = 'ExamRepositoryImpl',

  //Use Case
  LogineUseCase = 'LogineUseCase',
  AdminLoginUseCase = 'AdminLoginUseCase',
  CreateExamUseCase = 'CreateExamUseCase',
  DeleteExamUseCase = 'DeleteExamUseCase',
  GetAllExamsUseCase = 'GetAllExamsUseCase',
  AddMatterToExamUseCase = 'AddMatterToExamUseCase',
  AddSubjectToMatterUseCase = 'AddSubjectToMatterUseCase',
  CheckUserExamUseCase = 'CheckUserExamUseCase',
}
