import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.modules';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'training',
      password: 'password',
      database: 'trainingapi',
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
