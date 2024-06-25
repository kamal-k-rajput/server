import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { Request, Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('')
  async getUser() {
    return this.userService.users({});
  }

  @Post('signup')
  async createUser(req: Request, res: Response) {
    return 'Hi, From create user';
  }
}
