import { Body, Controller, Delete, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller("auth")
export class AuthController {

    constructor(private authService: AuthService) {}
  
    
    @Post('login')
    async login(@Body('password') password: string,
    @Body('userName') username: string) {
        return this.authService.login(username,password);
    }

    @Post('register')
    async register(@Body('userName') username: string,@Body('password') password: string) {
        const user = await this.authService.validatorUser(username,password);
        if (user) {
            return 
        }
        return this.authService.createUser(username,password);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number){
        this.authService.deleteUser(id);
    }
}