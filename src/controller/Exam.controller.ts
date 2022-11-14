import { InjectionEnum } from '../entity/Injection.enum';
import * as express from 'express';
import { inject } from 'inversify';
import { interfaces, controller, request, response, httpPost, httpGet } from 'inversify-express-utils';
import { ICreateExamUseCase } from '../usecase/interface/CreateExam.usecase.interface';
import { IGetAllExamsUseCase } from '../usecase/interface/GetAllExams.usecase.interface';
import { IAddMatterToExamUseCase } from '../usecase/interface/AddMatterToExam.usecase.interface';
import { IAddSubjectToMatterUseCase } from '../usecase/interface/AddSubjectToMatter.usecase.interface';

@controller('/exams')
export default class ExamController implements interfaces.Controller {
  constructor(
    @inject(InjectionEnum.CreateExamUseCase) private readonly createExamUsecase: ICreateExamUseCase,
    @inject(InjectionEnum.GetAllExamsUseCase) private readonly getAllExamsUsecase: IGetAllExamsUseCase,
    @inject(InjectionEnum.AddMatterToExamUseCase) private readonly addMatterToExamUsecase: IAddMatterToExamUseCase,
    @inject(InjectionEnum.AddSubjectToMatterUseCase) private readonly addSubjectToMatterUsecase: IAddSubjectToMatterUseCase
  ) {
    console.log('Entrou no controller');
  }

  @httpGet('/')
  public async getAll(@request() req: express.Request, @response() res: express.Response) {
    try {
      const exams = await this.getAllExamsUsecase.execute();
      res.status(200).send(exams)
    } catch (error: any) {
      res.status(error.status || 401).send(`Error: ${error}`);
    }
  }

  @httpPost('/')
  public async addExam(@request() req: express.Request, @response() res: express.Response) {
    try {
      const { name, completionDate } = req.body;
      const exam = await this.createExamUsecase.execute(name, completionDate);
      res.status(200).send(exam)
    } catch (error: any) {
      res.status(error.status || 401).send(`Error: ${error}`);
    }
  }

  @httpPost('/:id/materias')
  public async addMatterToExam(@request() req: express.Request, @response() res: express.Response) {
    try {
      const { matterName } = req.body;
      const { id: examId } = req.params

      const result = await this.addMatterToExamUsecase.execute(examId, matterName);
      
      res.status(200).send(result)
    } catch (error: any) {
      res.status(error.status || 401).send(`Error: ${error}`);
    }
  }

  @httpPost('/:examId/materias/:matterId')
  public async addSubjectToMatter(@request() req: express.Request, @response() res: express.Response) {
    try {
      const { subjectName } = req.body;
      const { matterId, examId } = req.params

      const result = await this.addSubjectToMatterUsecase.execute(examId, matterId, subjectName);
      
      res.status(200).send(result)
    } catch (error: any) {
      res.status(error.status || 401).send(`Error: ${error}`);
    }
  }
}
