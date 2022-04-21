import { IsString, MinLength, IsArray, ArrayNotEmpty } from 'class-validator';
//change
export class BoardDto {
  @IsString()
  @MinLength(1)
  id: string;

  @IsArray({
    each: true,
  })
  @ArrayNotEmpty()
  array: number[][];
}
