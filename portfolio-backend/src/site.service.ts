import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Site, Prisma } from '@prisma/client';

@Injectable()
export class SiteService {
  constructor(private prisma: PrismaService) {}

  async site(
    siteWhereUniqueInput: Prisma.SiteWhereUniqueInput,
  ): Promise<Site | null> {
    return this.prisma.site.findUnique({
      where: siteWhereUniqueInput,
    });
  }

  async sites(params: { where?: Prisma.SiteWhereInput }): Promise<Site[]> {
    const { where } = params;
    return this.prisma.site.findMany({
      where,
    });
  }

  async createSite(data: Prisma.SiteCreateInput): Promise<Site> {
    return this.prisma.site.create({
      data,
    });
  }

  async updateSite(params: {
    where: Prisma.SiteWhereUniqueInput;
    data: Prisma.SiteUpdateInput;
  }): Promise<Site> {
    const { where, data } = params;
    return this.prisma.site.update({
      data,
      where,
    });
  }

  async deleteSite(where: Prisma.SiteWhereUniqueInput): Promise<Site> {
    return this.prisma.site.delete({
      where,
    });
  }
}
