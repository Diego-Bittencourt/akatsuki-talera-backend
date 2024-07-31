import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { AddCharacterDto } from './dto/addCharacter.dto';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('login')
  async loginUser(@Body() userDto: UserDto) {
    return await this.usersService.loginUser(userDto);
  }

  @Post('create')
  async createUser(@Body() userDto: UserDto) {
    return await this.usersService.createUser(userDto);
  }

  @Post('add-character')
  async addCharacter(@Body() addCharacterDto: AddCharacterDto) {
    return await this.usersService.addCharacter(addCharacterDto);
  }

  @Get('confirm-character')
  async confirmCharacter(@Query('id') id: string) {
    return await this.usersService.confirmCharacter(id);
  }
}
