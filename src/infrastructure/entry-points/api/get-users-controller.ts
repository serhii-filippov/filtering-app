import {Adapter, Get, Mapping } from "@tsclean/core";
import {Auth} from "@/infrastructure/helpers/auth";
import {GET_USERS_SERVICE, IGetUsersService} from "@/domain/use-cases/get-users-service";
import {patchedServer} from "@/index";

@Mapping('api/v1/get-users')
export class GetUsersController {

    constructor(
        @Adapter(GET_USERS_SERVICE) private readonly getUsersService: IGetUsersService
    ) {
    }

    @Get()
    // @Auth(["admin", "guest"])
    async getUsersController(): Promise<any> {
        const server = await patchedServer.getHttpServer()
        const { params } = server._events.request._router

        const res = await this.getUsersService.getUsersByParams(params)

        return res
    }
}
