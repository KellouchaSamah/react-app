import {
  Controller,
  Get,
  Param,
  Body,
  Put,
  Delete,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAll(): Promise<UserDto[]> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() userDto: UserDto) {
    return await this.usersService.create(userDto);
  }

  @Get(':id')
  async getById(@Param() params): Promise<UserDto> {
    const { id } = params;

    return await this.usersService.findOne(id);
  }

  @Put(':id')
  async updateUser(@Param() params, @Body() userDto: UserDto) {
    const { id } = params;

    await new Promise(resolve => setTimeout(resolve, 2000));

    return await this.usersService.update(id, userDto);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    const { id } = params;
    return this.usersService.remove(id);
  }
}
