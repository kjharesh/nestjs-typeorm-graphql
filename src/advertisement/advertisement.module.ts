import { Module } from '@nestjs/common';
import { AdvertisementController } from './advertisement.controller';
import { AdvertisementService } from './advertisement.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advertisement } from 'src/model/advertisement.entity';
import { AdvertisementResolver } from './advertisement.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Advertisement])],
  controllers: [AdvertisementController],
  providers: [AdvertisementService, AdvertisementResolver],
})
export class AdvertisementModule {}
