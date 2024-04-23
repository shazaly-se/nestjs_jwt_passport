import { Body, Controller, Get, HttpException, Post, Req, UseGuards } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
    constructor (private authService : AuthService){}
    @Post('login')
   @UseGuards(LocalGuard)
    login(@Req() req:Request){
      return req.user
    }
    @Get('status')
    @UseGuards(JwtAuthGuard)
    status(@Req() req:Request){
        console.log("inside authcontroller status method");
        console.log(req.user);
        
        
    }
}
