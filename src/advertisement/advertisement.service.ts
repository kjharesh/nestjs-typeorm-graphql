import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Advertisement } from 'src/model/advertisement.entity';
import { AdvertisementInput } from 'src/dto/advertisement.input';

@Injectable()
export class AdvertisementService {
  constructor(
    @InjectRepository(Advertisement)
    private advertismentRepository: Repository<Advertisement>,
  ) {}

  getAllSummary(): Promise<Advertisement[]> {
    return this.advertismentRepository.find();
  }

  createAdvertisement(advertisementInput: AdvertisementInput): Promise<Advertisement> {
    const newAd = this.advertismentRepository.create(advertisementInput);
    return this.advertismentRepository.save(newAd);
  }
}
