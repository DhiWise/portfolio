import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Service, Prisma } from '@prisma/client';

@Injectable()
export class ServiceService {
  constructor(private prisma: PrismaService) {}

  async service(
    serviceWhereUniqueInput: Prisma.ServiceWhereUniqueInput,
  ): Promise<Service | null> {
    return this.prisma.service.findUnique({
      where: serviceWhereUniqueInput,
    });
  }

  async services(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ServiceWhereUniqueInput;
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithRelationInput;
  }): Promise<Service[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.service.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createService(data: Prisma.ServiceCreateInput): Promise<Service> {
    return this.prisma.service.create({
      data,
    });
  }

  async updateService(params: {
    where: Prisma.ServiceWhereUniqueInput;
    data: Prisma.ServiceUpdateInput;
  }): Promise<Service> {
    const { where, data } = params;
    return this.prisma.service.update({
      data,
      where,
    });
  }

  async deleteService(where: Prisma.ServiceWhereUniqueInput): Promise<Service> {
    return this.prisma.service.delete({
      where,
    });
  }
}
