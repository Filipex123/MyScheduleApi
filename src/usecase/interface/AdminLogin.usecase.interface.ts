import { IAdmin } from "repository/model/Admin.model";

export interface IAdminLoginUseCase {
    execute(email: string, password: string): Promise<IAdmin | null>;
}