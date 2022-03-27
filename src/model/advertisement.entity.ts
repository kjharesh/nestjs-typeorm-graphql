import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  Unique,
} from 'typeorm';
import { AdvertisementType } from './advertisement.enum';
import { BaseEntity } from './base.entity';
import { Category } from './category.entity';
import { City } from './city.entity';
import { SubCategory } from './subCategory.entity';
import { Suburb } from './suburb.entity';

@Entity({ name: 'Advertisements' })
@ObjectType()
export class Advertisement extends BaseEntity {
  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  description: string;

  @Column({
    type: 'enum',
    enum: AdvertisementType,
    default: AdvertisementType.Rent,
  })
  @Field(() => AdvertisementType)
  adType: AdvertisementType;

  @ManyToOne(() => Category, (category) => category.advertisements)
  @Field(() => Category)
  category!: Category;

  @ManyToOne(() => SubCategory, (subCategory) => subCategory.advertisements)
  @Field(() => SubCategory)
  subCategory!: SubCategory;

  @ManyToOne(() => City, (city) => city.advertisements)
  @Field(() => City)
  city!: City;

  @ManyToOne(() => Suburb, suburb => suburb.advertisements)
  @Field(() => Suburb)
  suburb!: Suburb;

  // @OneToMany(
  //   () => AdvertisementToAttribute,
  //   (advertisementToAttribute) => advertisementToAttribute.advertisement,
  // )
  // @Field(() => [AdvertisementToAttribute])
  // advertisementToAttributes: AdvertisementToAttribute[];
}
