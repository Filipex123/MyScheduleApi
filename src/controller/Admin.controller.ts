import { InjectionEnum } from '../entity/Injection.enum';
import * as express from 'express';
import { inject } from 'inversify';
import { interfaces, controller, request, response, httpPost } from 'inversify-express-utils';
import { IAdminLoginUseCase } from '../usecase/interface/AdminLogin.usecase.interface';

@controller('/admin')
export default class AdminController implements interfaces.Controller {
  constructor(@inject(InjectionEnum.AdminLoginUseCase) private readonly logineUseCase: IAdminLoginUseCase) {
    console.log('Entrou no controller');
  }

  @httpPost('/login')
  public async userLogin(@request() req: express.Request, @response() res: express.Response) {
    try {
      const { email, password: senha } = req.body;
      const user = await this.logineUseCase.execute(email, senha);

      if(user !== null)
        return res.status(201).send(user);

      res.status(401).send()
    } catch (error: any) {
      res.status(error.status || 401).send(`Error: ${error}`);
    }
  }
}
