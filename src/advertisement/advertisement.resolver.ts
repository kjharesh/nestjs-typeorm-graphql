import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AdvertisementInput } from 'src/dto/advertisement.input';
import { Advertisement } from 'src/model/advertisement.entity';
import { AdvertisementService } from './advertisement.service';

@Resolver(() => Advertisement)
export class AdvertisementResolver {
  constructor(private advertisementService: AdvertisementService) {}

  @Query((returns) => [Advertisement])
  async summaries() {
    return this.advertisementService.getAllSummary();
  }

  @Mutation((returns) => Advertisement)
  async createAd(
    @Args('advertisementInput') advertisementInput: AdvertisementInput,
  ): Promise<Advertisement> {
    return this.advertisementService.createAdvertisement(advertisementInput);
  }
}
