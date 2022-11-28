import { IAdmin } from "repository/model/Admin.model";

export interface IAdminRepository {
    findByEmailAndPassword(email: string, password: string): Promise<IAdmin | null>;
}
  