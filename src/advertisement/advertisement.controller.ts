import { Controller, Get } from '@nestjs/common';
import { Advertisement } from 'src/model/advertisement.entity';
import { AdvertisementService } from './advertisement.service';

@Controller('advertisement')
export class AdvertisementController {
  constructor(private readonly advertisementService: AdvertisementService) {}

  // @Get()
  // async getAllSummary(): Promise<Advertisement[]> {
  //   return this.advertisementService.getAllSummary();
  // }
}
