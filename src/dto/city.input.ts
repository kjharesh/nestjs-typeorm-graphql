import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CityInput {
  @Field(() => Number)
  id: number;
}
