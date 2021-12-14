import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/user.entity';
import { ConfigModule } from '@nestjs/config';

const Config = ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: `/config/.env.${process.env.NODE_ENV}`,
});

const DBConfig = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  // username: process.env.DB_USERNAME,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_NAME,
  username: 'root',
  password: '1234567890Aa',
  database: 'task_management',
  synchronize: true,
  keepConnectionAlive: true,
  entities: [User],
});

@Module({
  imports: [
    // --- Config
    Config,
    DBConfig,
    // -- Module
    TasksModule,
    AuthModule,
  ],
})
export class AppModule {}
