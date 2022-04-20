import {
  IsString,
  MinLength,
  IsArray,
  ValidateNested,
  IsNumber,
} from 'class-validator';

export class BoardDto {
  @IsString()
  @MinLength(1)
  id: string;

  @IsArray({
    each: true,
  })
  array: number[][];
}
