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
        
        const metaDataFound: string[] = this.reflector.get('hello', context.getHandler());
        console.log(metaDataFound)
        
        //!extraer data extra como user:
        // const request = context.switchToHttp().getRequest()
        // console.log(request)
        return true
    }
}