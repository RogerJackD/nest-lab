import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService{

    constructor(
        @InjectRepository(User)
        private readonly userRepository : Repository<User>
    ){}

    async finAll(): Promise<User[]> {
        return await this.userRepository.find();
    }
K
    async finOne( id: string ): Promise<User> {

        const user = await this.userRepository.findOneBy({ id })
        if( !user ) throw new BadRequestException(`user with id ${ id } doesnt exist`);

        return  user
    }

    async create( createUserDto : CreateUserDto ): Promise<User> {

        try {
            const user = this.userRepository.create( createUserDto );
            await this.userRepository.save( createUserDto );
            return user
            
        } catch (error) {
            this.handleExceptiosnDb( error )
        }

    }

    async update( id : string, updateUserDto: UpdateUserDto  ){

        const result = await this.userRepository.update( id ,  updateUserDto  )
        

        if( result.affected === 0){
            throw new NotFoundException(`User with id ${id} doesnt exist`)
        }

        const updateUser = await this.userRepository.findOne( { where : { id } } )

        return updateUser

    }

    async deleteOne( id: string){
        this.userRepository.delete({ id : id })
        return 'action successfully'
    }

    private handleExceptiosnDb( error: any ): never {
        if ( error.code === '23505') {
            throw new BadRequestException(error.detail)
        }
        throw new BadRequestException('error , check logs')
    }
}