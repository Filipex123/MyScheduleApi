import { InjectionEnum } from '../entity/Injection.enum';
import * as express from 'express';
import { inject } from 'inversify';
import { interfaces, controller, request, response, httpPost, httpPatch, httpGet } from 'inversify-express-utils';
import { ILogineUseCase } from '../usecase/interface/Login.usecase.interface';
import { ICheckUserExam } from '../usecase/interface/CheckUserExam.usecase.interface';
import examsDone from '../models/examsDone.json';

@controller('/aluno')
export default class UserController implements interfaces.Controller {
  constructor(
    @inject(InjectionEnum.LogineUseCase) private readonly logineUseCase: ILogineUseCase,
    @inject(InjectionEnum.CheckUserExamUseCase) private readonly checkExamUseCase: ICheckUserExam,
  ) {
    console.log('Entrou no controller');
  }

  @httpPost('/login')
  public async userLogin(@request() req: express.Request, @response() res: express.Response) {
    try {
      const { email, senha } = req.body;
      const loggedUser = await this.logineUseCase.execute(email, senha);
      console.log(JSON.stringify(loggedUser));
      res.status(200).send(loggedUser);
    } catch (error: any) {
      res.status(error.status || 401).send(`Error: ${error}`);
    }
  }

  @httpPatch('/:id/checkExam/:examdId')
  public async checkUserExam(@request() req: express.Request, @response() res: express.Response) {
    try {
      const { id, examdId } = req.params;
      const { newValue } = req.body;

      await this.checkExamUseCase.execute(examdId, id, newValue);

      res.status(204).send();
    } catch (err: any) {
      console.log(JSON.stringify(err));
      res.status(err.status || 500).send(`Error: ${err}`);
    }
  }

  @httpGet('/doneExams')
  public async getDoneExams(@request() req: express.Request, @response() res: express.Response) {
    try {
      res.status(200).send(examsDone);
    } catch (err: any) {
      console.log(JSON.stringify(err));
      res.status(err.status || 500).send(`Error: ${err}`);
    }
  }
}
