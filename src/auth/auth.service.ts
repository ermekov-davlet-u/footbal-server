import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { IUser } from 'src/users/dto/create.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(
    username: string,
    password: string,
): Promise<IUser> {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    const result = await this.usersService.createUser(
        {   
            userName: username,
            password: hashedPassword
        }
    );
    return result;
}

async validatorUser(username: string, pass: string): Promise<any> {
  const user = await this.usersService.findOne(username);
  if (user && user.password === pass) {
    const { password, ...result } = user;
    return result;
  }
  return null;
}

  async login(username: string, password: string) {
    const user = await this.usersService.findOne(username)
    console.log(user);
    if(!user) {
      return null;
    }

    const confirm = await bcrypt.compare(password, user.password)
    console.log(confirm);
    
    return {
      access_token: this.jwtService.sign(
        {
          payload: username
        }
      ),
    };
  }

  async validateUser(payload: any): Promise<IUser> {
    const user = await this.usersService.findByPayload(payload);    
    if (!user) {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);    
    }    
    return user;  
}
  async deleteUser(id: number): Promise<void> {
    this.usersService.deleteUser(id)
  }

}