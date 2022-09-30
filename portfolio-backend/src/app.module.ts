import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SiteService } from './site.service';
import { SiteContentService } from './siteContent.service';
import { PrismaService } from './prisma.service';
import { CategoryService } from './category.service';
import { ServiceService } from './service.service';
import { EducationService } from './education.service';
import { ExperienceService } from './experience.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    SiteService,
    SiteContentService,
    PrismaService,
    CategoryService,
    ServiceService,
    EducationService,
    ExperienceService,
  ],
})
export class AppModule {}
