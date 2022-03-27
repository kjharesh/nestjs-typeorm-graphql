import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { Attribute } from './attribute.entity';
import { BaseEntity } from './base.entity';
import { Category } from './category.entity';
import { Advertisement } from 'src/model/advertisement.entity';

@Entity({ name: 'SubCategories' })
@ObjectType()
export class SubCategory extends BaseEntity {
  @Column()
  @Field()
  subCategoryName: string;

  @ManyToOne(() => Category, (category) => category.subCategories)
  @Field(() => Category)
  category: Category;

  @OneToMany(() => Advertisement, advertisement => advertisement.subCategory)
  @Field(() => [Advertisement])
  advertisements: Advertisement[];

  @ManyToMany(() => Attribute)
  @JoinTable()
  @Field(() => [Attribute])
  attributes!: Attribute[];
}
