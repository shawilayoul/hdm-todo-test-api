import { Injectable } from '@nestjs/common';
import { PrismaService } from '../PrismaService';
import { Prisma } from '@prisma/client';
import SaveTaskDto from 'src/UseCase/SaveTask/SaveTaskDto';
import UpdateTaskDto from 'src/UseCase/UpdateTask/UpdateTaskDto';

@Injectable()
export default class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: SaveTaskDto) {
    return this.prisma.task.create({
      data:{
        name: dto.name,
      }
    });
  }

  async findAll() {
    return this.prisma.task.findMany();
  }
  async update(id: number, dto: UpdateTaskDto) {
    if (!id) {
      throw new Error('Task ID is required for update');
    }
    return this.prisma.task.update({
      where: { id }, 
      data: {
        name: dto.name,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }

  async save(
    data:
      | Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>
      | Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>,
  ) {
    if (!data.id) {
      // @todo IMPLEMENT HERE USING PRISMA API
    }

    // @todo IMPLEMENT HERE USING PRISMA API
  }
}
