import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from "@nestjs/common";
import { UserService } from './user.service';
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller('user')
export class UserController{

    constructor(
        private readonly userService : UserService,
    ){}

    @Get()
    finAll(){
        return this.userService.finAll()
    }

    @Get(':id')
    finOne(@Param('id', ParseUUIDPipe) id : string){
        return this.userService.finOne( id );
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto){
        return this.userService.create( createUserDto );
    }

    @Patch(':id')
    update(@Param('id', ParseUUIDPipe) id : string, @Body() updateUserDto : UpdateUserDto ){
        return this.userService.update( id , updateUserDto )
    }

    @Delete(':id')
    delete(@Param('id', ParseUUIDPipe) id: string ){
        return this.userService.deleteOne( id )
    }
}