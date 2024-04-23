import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
const fakeUsers = [
    {
      username: "ali",
      password:"password"  
    },
    {
        username: "ahmed",
        password:"password"  
      }
]

@Injectable()
export class AuthService {
    constructor(private jwtService:JwtService){}
  
    validateUser({username,password}:AuthDto){
      const findUser = fakeUsers.find((user) => user.username === username)
      if(!findUser) return null
      if(password === findUser.password){
        const {password, ...user} = findUser
        return this.jwtService.sign(user)
      }
    }
}
