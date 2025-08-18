import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";

@Injectable()
export class UseRoleAdminGuard implements CanActivate {

    constructor(
        private readonly reflector: Reflector,
    ){}
    
    canActivate(
        context: ExecutionContext
    ): boolean | Promise<boolean> | Observable<boolean> {
        
        const metaDataFound = this.reflector.get<string[]>('hello', context.getHandler());

        console.log(metaDataFound)
        
        const request = context.switchToHttp().getRequest()

        console.log(request)

        return true
    }
}