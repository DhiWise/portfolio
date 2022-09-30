import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { SiteContent, Prisma } from '@prisma/client';

@Injectable()
export class SiteContentService {
  constructor(private prisma: PrismaService) {}

  async siteContent(
    siteWhereUniqueInput: Prisma.SiteContentWhereUniqueInput,
  ): Promise<SiteContent | null> {
    return this.prisma.siteContent.findUnique({
      where: siteWhereUniqueInput,
    });
  }

  async siteContents(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SiteContentWhereUniqueInput;
    where?: Prisma.SiteContentWhereInput;
    orderBy?: Prisma.SiteContentOrderByWithRelationInput;
  }): Promise<SiteContent[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.siteContent.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createSiteContent(
    data: Prisma.SiteContentCreateInput,
  ): Promise<SiteContent> {
    return this.prisma.siteContent.create({
      data,
    });
  }

  async updateSiteContent(params: {
    where: Prisma.SiteContentWhereUniqueInput;
    data: Prisma.SiteContentUpdateInput;
  }): Promise<SiteContent> {
    const { where, data } = params;
    return this.prisma.siteContent.update({
      data,
      where,
    });
  }

  async deleteSiteContent(
    where: Prisma.SiteContentWhereUniqueInput,
  ): Promise<SiteContent> {
    return this.prisma.siteContent.delete({
      where,
    });
  }
}
