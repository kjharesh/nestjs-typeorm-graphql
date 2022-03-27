import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Suburb } from './suburb.entity';
import { Advertisement } from 'src/model/advertisement.entity';

@Entity({ name: 'Cities' })
@ObjectType()
export class City extends BaseEntity {
  @Column()
  @Field()
  cityName: string;

  @OneToMany(() => Suburb, (suburb) => suburb.city)
  @Field(() => [Suburb])
  suburbs: Suburb[];

  @OneToMany(() => Advertisement, (advertisement) => advertisement.city)
  @Field(() => [Advertisement])
  advertisements: Advertisement[];
}
