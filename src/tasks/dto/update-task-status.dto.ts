import { IsEnum } from 'class-validator';
import { TaskStatus } from '../tasks.module';

export class UpdateTaskStatusDto {
  // @IsEnum(TaskStatus)
  status: TaskStatus;
}
