import { InjectionEnum } from '../entity/Injection.enum';
import * as express from 'express';
import { inject } from 'inversify';
import { interfaces, controller, request, response, httpPost } from 'inversify-express-utils';
import { ILogineUseCase } from '../usecase/interface/Login.usecase.interface';

@controller('/aluno')
export default class UserController implements interfaces.Controller {
  constructor(@inject(InjectionEnum.LogineUseCase) private readonly logineUseCase: ILogineUseCase) {
    console.log('Entrou no controller');
  }

  @httpPost('/login')
  public async userLogin(@request() req: express.Request, @response() res: express.Response) {
    try {
      const { email, senha } = req.body;
      const posts = await this.logineUseCase.execute(email, senha);
      res.status(200).send(posts);
    } catch (error: any) {
      res.status(error.status || 401).send(`Error: ${error}`);
    }
  }
}
