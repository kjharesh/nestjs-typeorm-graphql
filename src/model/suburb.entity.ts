import { BaseEntity } from './base.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { City } from './city.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Advertisement } from 'src/model/advertisement.entity';

@Entity({ name: 'Suburbs' })
@ObjectType()
export class Suburb extends BaseEntity {
  @Column()
  @Field(() => String)
  suburbName: string;

  @ManyToOne(() => City, (city) => city)
  @Field(() => City)
  city: City;

  @OneToMany(() => Advertisement, (advertisement) => advertisement.suburb)
  @Field(() => [Advertisement])
  advertisements: Advertisement[];
}
