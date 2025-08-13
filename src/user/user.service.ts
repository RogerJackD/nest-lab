import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";

@Injectable()
export class UserService{

    constructor(
        @InjectRepository(User)
        private readonly userRepository : Repository<User>
    ){}

    async finAll(){
        return await this.userRepository.findOneBy({})
    }
K
    async finOne( id: string ){

        const user = await this.userRepository.findOneBy({ id })
        if( !user ) throw new BadRequestException(`user with id ${ id } doesnt exist`);

        return  user
    }

    async create( createUserDto : CreateUserDto ){

        try {
            const user = this.userRepository.create( createUserDto );
            await this.userRepository.save( createUserDto );
            return user
            
        } catch (error) {
            this.handleExceptiosnDb( error )
        }

    }

    update( data: any, id : number ){
        return {
            data,
            id
        }
    }

    async deleteOne( id: string){
        this.userRepository.delete({ id : id })
        return 'action successfully'
    }

    private handleExceptiosnDb( error ){
        if ( error.code === '23505') {
            throw new BadRequestException(error.detail)
        }
        throw new BadRequestException('error , check logs')
    }
}