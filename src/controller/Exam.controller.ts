import { InjectionEnum } from '../entity/Injection.enum';
import * as express from 'express';
import { inject } from 'inversify';
import { interfaces, controller, request, response, httpPost } from 'inversify-express-utils';
import { ICreateExamUseCase } from '../usecase/interface/CreateExam.usecase.interface';

@controller('/exams')
export default class ExamController implements interfaces.Controller {
  constructor(@inject(InjectionEnum.CreateExamUseCase) private readonly createExamUsecase: ICreateExamUseCase) {
    console.log('Entrou no controller');
  }

  @httpPost('/')
  public async addExam(@request() req: express.Request, @response() res: express.Response) {
    try {
      const { name, completionDate } = req.body;
      await this.createExamUsecase.execute(name, completionDate);
      res.status(200).send()
    } catch (error: any) {
      res.status(error.status || 401).send(`Error: ${error}`);
    }
  }
}
