import { IsString, MinLength, IsArray } from 'class-validator';

export class BoardDto {
  @IsString()
  @MinLength(1)
  id: string;

  @IsArray({
    each: true,
  })
  array: number[][];
}
