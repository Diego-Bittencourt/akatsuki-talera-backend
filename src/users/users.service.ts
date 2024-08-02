import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { UserDto } from './dto/user.dto';
import { AddCharacterDto } from './dto/addCharacter.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async createUser(userDto: UserDto): Promise<User> {
    const createdUser = new this.userModel(userDto);
    return createdUser.save();
  }

  async findUser(userName: string): Promise<User> {
    const user = this.userModel.findOne({
      where: {
        userName,
      },
    });
    if (user) {
      return user;
    } else {
      return null;
    }
  }

  async findAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async addCharacter(addCharacterDto: AddCharacterDto) {
    console.log(addCharacterDto);
    return true;
  }

  async confirmCharacter(id: string) {
    //logic to confirm the added character
    console.log(id);
    return true;
  }
}
