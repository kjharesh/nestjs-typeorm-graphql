import { registerEnumType } from '@nestjs/graphql';

enum AdvertisementType {
  Rent,
  Sale,
}

registerEnumType(AdvertisementType, {
  name: 'AdvertisementType',
});

export { AdvertisementType };
