import {MigrationInterface, QueryRunner} from "typeorm";

export class initialMigration1638041262573 implements MigrationInterface {
    name = 'initialMigration1638041262573'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Attributes" ("id" SERIAL NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "attributeName" character varying NOT NULL, CONSTRAINT "PK_ab80d6e6f1c583317b83549995a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "SubCategories" ("id" SERIAL NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "subCategoryName" character varying NOT NULL, "categoryId" integer, CONSTRAINT "PK_38d63313dcfb4bbbc3680fbab4f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Categories" ("id" SERIAL NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "categoryName" character varying NOT NULL, CONSTRAINT "PK_537b5c00afe7427c4fc9434cd59" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Suburbs" ("id" SERIAL NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "suburbName" character varying NOT NULL, "cityId" integer, CONSTRAINT "PK_0da3ee551455a666a5d92af6cb9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Cities" ("id" SERIAL NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "cityName" character varying NOT NULL, CONSTRAINT "PK_21ae4232868104702703893428e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."Advertisements_adtype_enum" AS ENUM('0', '1')`);
        await queryRunner.query(`CREATE TABLE "Advertisements" ("id" SERIAL NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "title" character varying NOT NULL, "description" character varying NOT NULL, "adType" "public"."Advertisements_adtype_enum" NOT NULL DEFAULT '0', "categoryId" integer, "subCategoryId" integer, "cityId" integer, "suburbId" integer, CONSTRAINT "PK_c43073fcea0da9b01f0c54e8492" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sub_categories_attributes_attributes" ("subCategoriesId" integer NOT NULL, "attributesId" integer NOT NULL, CONSTRAINT "PK_7bdb15fd30ee6e46d4bd5cadc2b" PRIMARY KEY ("subCategoriesId", "attributesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4a7d364dc62fb1e3a1b50b096d" ON "sub_categories_attributes_attributes" ("subCategoriesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_0615210cc3da2daa793adcc3ad" ON "sub_categories_attributes_attributes" ("attributesId") `);
        await queryRunner.query(`ALTER TABLE "SubCategories" ADD CONSTRAINT "FK_353e292f3d2c9268ca0bebd3650" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Suburbs" ADD CONSTRAINT "FK_44cf020766fc1675651cf80690e" FOREIGN KEY ("cityId") REFERENCES "Cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Advertisements" ADD CONSTRAINT "FK_24f19f8ee47e6499a49c4045a69" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Advertisements" ADD CONSTRAINT "FK_b8e7fd796bf9b7c378e31e21100" FOREIGN KEY ("subCategoryId") REFERENCES "SubCategories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Advertisements" ADD CONSTRAINT "FK_b672023cb4b580e900b4101ec15" FOREIGN KEY ("cityId") REFERENCES "Cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Advertisements" ADD CONSTRAINT "FK_523e9c1b0605ad33b2da4775528" FOREIGN KEY ("suburbId") REFERENCES "Suburbs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sub_categories_attributes_attributes" ADD CONSTRAINT "FK_4a7d364dc62fb1e3a1b50b096da" FOREIGN KEY ("subCategoriesId") REFERENCES "SubCategories"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "sub_categories_attributes_attributes" ADD CONSTRAINT "FK_0615210cc3da2daa793adcc3adf" FOREIGN KEY ("attributesId") REFERENCES "Attributes"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sub_categories_attributes_attributes" DROP CONSTRAINT "FK_0615210cc3da2daa793adcc3adf"`);
        await queryRunner.query(`ALTER TABLE "sub_categories_attributes_attributes" DROP CONSTRAINT "FK_4a7d364dc62fb1e3a1b50b096da"`);
        await queryRunner.query(`ALTER TABLE "Advertisements" DROP CONSTRAINT "FK_523e9c1b0605ad33b2da4775528"`);
        await queryRunner.query(`ALTER TABLE "Advertisements" DROP CONSTRAINT "FK_b672023cb4b580e900b4101ec15"`);
        await queryRunner.query(`ALTER TABLE "Advertisements" DROP CONSTRAINT "FK_b8e7fd796bf9b7c378e31e21100"`);
        await queryRunner.query(`ALTER TABLE "Advertisements" DROP CONSTRAINT "FK_24f19f8ee47e6499a49c4045a69"`);
        await queryRunner.query(`ALTER TABLE "Suburbs" DROP CONSTRAINT "FK_44cf020766fc1675651cf80690e"`);
        await queryRunner.query(`ALTER TABLE "SubCategories" DROP CONSTRAINT "FK_353e292f3d2c9268ca0bebd3650"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0615210cc3da2daa793adcc3ad"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4a7d364dc62fb1e3a1b50b096d"`);
        await queryRunner.query(`DROP TABLE "sub_categories_attributes_attributes"`);
        await queryRunner.query(`DROP TABLE "Advertisements"`);
        await queryRunner.query(`DROP TYPE "public"."Advertisements_adtype_enum"`);
        await queryRunner.query(`DROP TABLE "Cities"`);
        await queryRunner.query(`DROP TABLE "Suburbs"`);
        await queryRunner.query(`DROP TABLE "Categories"`);
        await queryRunner.query(`DROP TABLE "SubCategories"`);
        await queryRunner.query(`DROP TABLE "Attributes"`);
    }

}
