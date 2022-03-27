import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class SubCategoryInput {
  @Field(() => Number)
  id: number;
}
