import { Test, TestingModule } from '@nestjs/testing';
import { AdvertisementResolver } from './advertisement.resolver';

describe('AdvertisementResolver', () => {
  let resolver: AdvertisementResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdvertisementResolver],
    }).compile();

    resolver = module.get<AdvertisementResolver>(AdvertisementResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
