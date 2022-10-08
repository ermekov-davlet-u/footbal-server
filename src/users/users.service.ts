import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { IUser } from 'src/users/dto/create.model';


@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private readonly userRepo: Repository<User>
    ){}

  

  async findOne(username: string): Promise<User | undefined> {
    return this.userRepo.findOne({
        where: { userName: username }
    });
  }
  async createUser(body: IUser): Promise<User> {

    return this.userRepo.save({
        userName: body.userName,
        password: body.password,
    });
}

  async findByPayload({ username }: any): Promise<IUser> {
    return await this.userRepo.findOne({ 
        where:  { userName: username } }
        );  
  }

  async deleteUser(id: number) {
    return this.userRepo.delete(id)
  }

}