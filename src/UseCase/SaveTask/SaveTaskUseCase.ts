import { BadRequestException, Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import SaveTaskDto from './SaveTaskDto';
import TaskRepository from '../../Repositories/TaskRepository';


@Injectable()
export default class SaveTaskUseCase
  implements UseCase<Promise<Task>, [dto: SaveTaskDto]>
{
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle(
    dto: SaveTaskDto,
  ): Promise<{ id: number; name: string; createdAt: Date; updatedAt: Date }> {
    /*
     * @todo IMPLEMENT HERE : VALIDATION DTO, DATA SAVING, ERROR CATCHING
     */
    try {
      const respones = await this.taskRepository.create(dto);
      return respones;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
