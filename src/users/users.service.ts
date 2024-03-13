import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll = async (): Promise<User[]> => {
    return await this.usersRepository.find();
  };

  findOne = async (id: string): Promise<User> => {
    const user: User = await this.usersRepository.findOne(id);

    if (!user) {
      throw new NotFoundException(`User [id:'${id}'] not found`);
    }
    return user;
  };

  findByEmail = async (email: string): Promise<User> => {
    return this.usersRepository.findOne({
      where: { email: email },
    });
  };

  create = async (newUser: User): Promise<User> => {
    const user: User = await this.findByEmail(newUser.email);
    await new Promise(resolve => setTimeout(resolve, 2000));
    if (user) {
      throw new ConflictException(
        `User [email:'${newUser.email}'] already exist`,
      );
    }
    return this.usersRepository.save(newUser);
  };

  update = async (userId: string, newUser: User): Promise<UpdateResult> => {
    await this.findOne(userId);

    return this.usersRepository.update(userId, newUser);
  };

  async remove(id: string): Promise<void> {
    await this.findOne(id);
    await this.usersRepository.delete(id);
  }
}
