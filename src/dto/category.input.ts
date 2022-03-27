import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CategoryInput {
  @Field(() => Number)
  id: number;
}
