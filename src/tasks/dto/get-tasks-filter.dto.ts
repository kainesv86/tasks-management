import { IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../tasks.module';

export class GetTaskFilterDto {
  @IsOptional()
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
