import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ToBoolean } from 'src/config/transformers';

export class DetailsDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Idioma en que queremos que la data regrese',
    examples: { Es: { value: 'Es' }, En: { value: 'En' } },
  })
  readonly language: string;

  @IsOptional()
  @IsNotEmpty()
  @ToBoolean()
  @IsBoolean()
  @ApiProperty({
    description: 'Booleano para traer mi description compleja',
    examples: { true: { value: true }, false: { value: false } },
  })
  readonly description?: boolean;
}
