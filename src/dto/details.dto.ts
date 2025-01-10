import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class DetailsDto {
  @Length(1, 3, {
    message:
      '$property debe ser de un largo de minimo 1 y maximo 1 se envio: $value',
  })
  @IsString({ message: '$property debe ser un string y se recibio: $value' })
  @IsNotEmpty({ message: '$property no puede estar vacio' })
  @ApiProperty({
    description: 'Idioma en que queremos que la data regrese',
    examples: { Es: { value: 'Es' }, En: { value: 'En' } },
  })
  readonly language: string;
}
