import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaClient, Task } from '@prisma/client';
import { UseCase } from '../../index';
import UpdateTaskDto from './UpdateTaskDto';
import TaskRepository from '../../Repositories/TaskRepository';

@Injectable()
export default class UpdateTaskUseCase
  implements UseCase<Promise<Task>, [id: number, dto: UpdateTaskDto]>
{
  constructor(private readonly taskRepository: TaskRepository) {}
  /* private prisma: PrismaClient;

  constructor(private readonly taskRepository: TaskRepository) {
    this.prisma = new PrismaClient();
  }*/
  async handle(
    id: number,
    dto: UpdateTaskDto,
  ): Promise<{ id: number; name: string; createdAt: Date; updatedAt: Date }> {
    try {
      const respones = await this.taskRepository.update(id, dto);
      return respones;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
