import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'Attributes' })
@ObjectType()
export class Attribute extends BaseEntity {
  @Column()
  @Field()
  attributeName: string;
}
