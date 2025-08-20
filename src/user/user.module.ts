import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User
        ]),

        PassportModule.register({ defaultStrategy: 'jwt'}), //decirle que tipo de autenticacion/estrategia

        JwtModule.registerAsync({

            useFactory : ( ) => {
                return {
                    secret: process.env.JWT_SECRET,
                    signOptions: {
                        expiresIn: '1h'
                    }
                }
            }
        })

    ],
    controllers: [ UserController ],
    providers: [ UserService ],
    exports: [],
})
export class UserModule{}