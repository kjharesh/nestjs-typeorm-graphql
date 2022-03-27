import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class SuburbInput {
  @Field(() => Number)
  id: number;
}
