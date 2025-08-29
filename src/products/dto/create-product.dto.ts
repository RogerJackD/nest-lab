import { IsArray, IsNumber, IsOptional, IsPositive, IsString, MinLength } from 'class-validator';

export class CreateProductDto {

    @IsString()
    @MinLength(2)
    title: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    price: number;

    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    main_image: string;

    @IsString({each: true})
    @IsArray()
    @IsOptional()
    gallery_images: string[];
}
