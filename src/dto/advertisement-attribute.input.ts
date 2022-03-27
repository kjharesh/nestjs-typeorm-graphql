import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AdvertisementAttributeInput {
  @Field()
  value: string;
}
