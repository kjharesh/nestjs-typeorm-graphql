// import { BaseEntity } from './base.entity';
// import { Column, Entity, ManyToOne } from 'typeorm';
// import { Advertisement } from '../model/advertisement.entity';
// import { Attribute } from './attribute.entity';
// import { Field, ObjectType } from '@nestjs/graphql';

// @Entity({ name: 'AdvertisementToAttributes' })
// @ObjectType()
// export class AdvertisementToAttribute extends BaseEntity {
//   @Column()
//   @Field()
//   value: string;

//   @ManyToOne(
//     () => Advertisement,
//     (advertisement) => advertisement.advertisementToAttributes,
//   )
//   @Field(() => Advertisement)
//   advertisement: Advertisement;

//   @ManyToOne(
//     () => Attribute,
//     (attribute) => attribute.advertisementToAttributes,
//   )
//   @Field()
//   attribute: Attribute;
// }
