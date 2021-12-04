import { TaskStatus } from '../tasks.module';

export class GetTaskFilterDto {
  status?: TaskStatus;
  search?: string;
}
