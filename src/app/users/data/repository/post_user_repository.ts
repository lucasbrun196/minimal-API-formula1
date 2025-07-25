import { Password } from "../../../../utils/hash_password/hash_password";
import { IPassword } from "../../../../utils/hash_password/i_hash_password";
import { UsersEntity, UsersEntityJson } from "../../domain/entities/typeorm/users_entity";
import { IPostUserRepository } from "../../domain/repository/i_post_user_repository";
import { IPostUserDatasource } from "../datasource/i_post_user_datasource";

export class PostUserRepository implements IPostUserRepository {

    private readonly datasource;

    constructor(datasource: IPostUserDatasource) {
        this.datasource = datasource;
    }

    async call(params: UsersEntityJson, hashPassword: string): Promise<void> {
        const userEntityParams = new UsersEntity(
            params.email,
            hashPassword,
            params.username,
            params.id_favorite_team_fk,
            params.id_favorite_driver_fk,
            params.country,
            params.phone,
        );
        return this.datasource.call(userEntityParams);
    }
}

