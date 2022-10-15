import { InjectionEnum } from '../entity/Injection.enum';
import * as express from 'express';
import { inject } from 'inversify';
import { interfaces, controller, httpGet, request, response } from 'inversify-express-utils';
import { IUseCase } from '../usecase/interface/IUseCase.interface';

@controller('/example')
export default class PostController implements interfaces.Controller {
  constructor(@inject(InjectionEnum.InsertExampleUseCase) private readonly insertExampleUseCase: IUseCase) {
    console.log('Entrou no controller');
  }

  @httpGet('/')
  public async getExample(@request() req: express.Request, @response() res: express.Response) {
    try {
      const posts = await this.insertExampleUseCase.execute(req);
      res.status(200).json(posts);
    } catch (error) {
      res.status(400).json('Deu certo porem errado');
    }
  }
}
