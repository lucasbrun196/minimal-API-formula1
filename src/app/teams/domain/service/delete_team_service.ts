
import { IdTeamJson } from "../entities/params/id_team_param";
import { IDeleteTeamRepository } from "../repository/i_delete_team_repository";
import { IDeleteTeamService } from "./i_delete_team_service";

export class DeleteTeamService implements IDeleteTeamService {
    private readonly repository;
    constructor(repository: IDeleteTeamRepository) {
        this.repository = repository;
    }
    async call(params: IdTeamJson): Promise<void> {
        await this.repository.call(params)
    }
}