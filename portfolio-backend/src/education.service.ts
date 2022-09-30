import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Education, Prisma } from '@prisma/client';

@Injectable()
export class EducationService {
  constructor(private prisma: PrismaService) {}

  async education(
    educationWhereUniqueInput: Prisma.EducationWhereUniqueInput,
  ): Promise<Education | null> {
    return this.prisma.education.findUnique({
      where: educationWhereUniqueInput,
    });
  }

  async educationList(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.EducationWhereUniqueInput;
    where?: Prisma.EducationWhereInput;
    orderBy?: Prisma.EducationOrderByWithRelationInput;
  }): Promise<Education[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.education.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createEducation(data: Prisma.EducationCreateInput): Promise<Education> {
    return this.prisma.education.create({
      data,
    });
  }

  async updateEducation(params: {
    where: Prisma.EducationWhereUniqueInput;
    data: Prisma.EducationUpdateInput;
  }): Promise<Education> {
    const { where, data } = params;
    return this.prisma.education.update({
      data,
      where,
    });
  }

  async deleteEducation(
    where: Prisma.EducationWhereUniqueInput,
  ): Promise<Education> {
    return this.prisma.education.delete({
      where,
    });
  }
}
