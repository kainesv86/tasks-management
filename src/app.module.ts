import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/user.entity';

const DBConfig = TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  keepConnectionAlive: true,
  entities: [User],
});

@Module({
  imports: [TasksModule, AuthModule],
})
export class AppModule {}
