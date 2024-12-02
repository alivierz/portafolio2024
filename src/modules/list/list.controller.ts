import { Controller, Get } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { DetailsDto } from 'src/dto/details.dto';

@Controller('list')
export class ListController {
  @ApiExcludeEndpoint()
  @Get('aaiitukituki')
  watermelon(): DetailsDto {
    return {
      language: '1',
    };
  }
}
