import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Experience, Prisma } from '@prisma/client';

@Injectable()
export class ExperienceService {
  constructor(private prisma: PrismaService) {}

  async experience(
    experienceWhereUniqueInput: Prisma.ExperienceWhereUniqueInput,
  ): Promise<Experience | null> {
    return this.prisma.experience.findUnique({
      where: experienceWhereUniqueInput,
    });
  }

  async experiences(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ExperienceWhereUniqueInput;
    where?: Prisma.ExperienceWhereInput;
    orderBy?: Prisma.ExperienceOrderByWithRelationInput;
  }): Promise<Experience[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.experience.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createExperience(
    data: Prisma.ExperienceCreateInput,
  ): Promise<Experience> {
    return this.prisma.experience.create({
      data,
    });
  }

  async updateExperience(params: {
    where: Prisma.ExperienceWhereUniqueInput;
    data: Prisma.ExperienceUpdateInput;
  }): Promise<Experience> {
    const { where, data } = params;
    return this.prisma.experience.update({
      data,
      where,
    });
  }

  async deleteExperience(
    where: Prisma.ExperienceWhereUniqueInput,
  ): Promise<Experience> {
    return this.prisma.experience.delete({
      where,
    });
  }
}
