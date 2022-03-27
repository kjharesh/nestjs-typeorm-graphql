import { Field, InputType, Int } from '@nestjs/graphql';
import { AdvertisementType } from 'src/model/advertisement.enum';
import { CategoryInput } from './category.input';
import { CityInput } from './city.input';
import { SubCategoryInput } from './subCategory.input';
import { SuburbInput } from './suburb.input';

@InputType()
export class AdvertisementInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => AdvertisementType)
  adType: AdvertisementType;

  @Field()
  subCategory: SubCategoryInput;

  @Field()
  category: CategoryInput;

  @Field()
  city: CityInput;

  @Field()
  suburb: SuburbInput;

  // @Field()
  // advertisementAttributes: AdvertisementAttributeInput[];
}
