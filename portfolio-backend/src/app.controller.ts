import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { SiteService } from './site.service';
import { SiteContentService } from './siteContent.service';
import {
  Category as CategoryModel,
  Site as SiteModel,
  SiteContent as SiteContentModel,
  Service as ServiceModel,
  Education as EducationModel,
  Experience as ExperienceModel,
} from '@prisma/client';
import { CategoryService } from './category.service';
import { ServiceService } from './service.service';
import { EducationService } from './education.service';
import { ExperienceService } from './experience.service';

@Controller()
export class AppController {
  constructor(
    private readonly siteService: SiteService,
    private readonly siteContentService: SiteContentService,
    private readonly categoryService: CategoryService,
    private readonly serviceService: ServiceService,
    private readonly educationService: EducationService,
    private readonly experienceService: ExperienceService,
  ) {}

  @Get('/')
  async main() {
    return 'Portfolio backend is running';
  }

  @Get('site/:id')
  async getSiteById(@Param('id') id: string): Promise<SiteModel> {
    return this.siteService.site({ id: Number(id) });
  }

  @Get('siteContent/:id')
  async getSiteContentById(@Param('id') id: string): Promise<SiteContentModel> {
    return this.siteContentService.siteContent({ id: Number(id) });
  }

  @Get('sites')
  async sites(): Promise<SiteModel[]> {
    return this.siteService.sites({});
  }

  @Get('sites/:categoryId')
  async getSitesByName(
    @Param('categoryId') categoryId: string,
  ): Promise<SiteModel[]> {
    return this.siteService.sites({
      where: {
        categoryId: Number(categoryId),
      },
    });
  }

  @Post('site')
  async createSite(
    @Body() siteData: { title: string; desc: string; image: string },
  ): Promise<SiteModel> {
    const { title, desc, image } = siteData;
    return this.siteService.createSite({
      title,
      desc,
      image,
      date: Date.now().toString(),
    });
  }

  @Get('categories')
  async getCategories(): Promise<CategoryModel[]> {
    return this.categoryService.categories({});
  }

  @Get('services')
  async getServices(): Promise<ServiceModel[]> {
    return this.serviceService.services({});
  }

  @Get('education')
  async getEducation(): Promise<EducationModel[]> {
    return this.educationService.educationList({});
  }

  @Get('experience')
  async getExperiences(): Promise<ExperienceModel[]> {
    return this.experienceService.experiences({});
  }
}
