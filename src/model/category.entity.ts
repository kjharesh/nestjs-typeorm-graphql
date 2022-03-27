import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { SubCategory } from './subCategory.entity';
import { Advertisement } from 'src/model/advertisement.entity';

@Entity({ name: 'Categories' })
@ObjectType()
export class Category extends BaseEntity {
  @Column()
  @Field()
  categoryName: string;

  @OneToMany(() => Advertisement, advertisement => advertisement.category)
  @Field(() => [Advertisement])
  advertisements: Advertisement[]

  @OneToMany(() => SubCategory, (subCategory) => subCategory.category)
  @Field(() => [SubCategory])
  subCategories: SubCategory[];
}
