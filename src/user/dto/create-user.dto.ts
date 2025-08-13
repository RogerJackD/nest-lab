import { IsEmail, IsNumber, IsPositive, IsString, MinLength } from "class-validator"


export class CreateUserDto{

    @IsString()
    @MinLength(2)
    name: string

    @IsEmail()
    email: string

    @IsNumber()
    @IsPositive()
    phone: number

}