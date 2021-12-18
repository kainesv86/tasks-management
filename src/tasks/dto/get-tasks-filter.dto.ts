import { IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task-status';

export class GetTaskFilterDto {
  @IsOptional()
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
