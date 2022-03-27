import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export abstract class BaseEntity {
  @Field(() => Number)
  @PrimaryGeneratedColumn("increment", {
    type: 'integer',
  })
  id: number;

  @Column({ type: 'boolean', default: true })
  @Field()
  isActive: boolean;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  @Field()
  createdDateTime: Date;
}
